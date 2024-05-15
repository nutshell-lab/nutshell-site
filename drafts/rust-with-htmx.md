---
title: "Retour aux sources, Rust, Axum, et Htmx"
short_description: "Apres l'aire React, peut-on vraiment retourner au tout-serveur ?"
description: "Exploration et proof of concept quant au developpement d'une webapp avec Rust."
image:
  src: '/blog/cookies.webp'
  alt: 'Une incroyable image de cookies.'
  width: 1024
  height: 819
created_at: 188/01/2024
category: dev
featured: true
---

Intro

:table-of-content

## Stack

- Rust
- Axum (serveur web)
- Postgres
- Sqlx
- Maud (html)
- Htmx (interactivite front-end)
- Tailwind
  - daisyUI (composants css)

## Setup

```bash
cargo new --bin muto && cd muto
```

```bash
cargo add maud --features axum

cargo add axum --features headers
cargo add axum-htmx

cargo add tracing
cargo add tracing-subscriber --features env-filter

cargo add tower
cargo add tower-http --featurs fs,trace

cargo add config
cargo add dotenv

cargo add sqlx --features runtime-tokio-rustls,postgres,offline,migrate
cargo add tokio --features full

cargo add serde --features derive
```

```rust
use tracing::info;
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

#[tokio::main]
async fn main() {
    let filter = tracing_subscriber::filter::Targets::new()
        // I like to see web requests logs
        .with_target("tower_http::trace::on_response", Level::DEBUG)
        .with_target("tower_http::trace::make_span", Level::DEBUG)
        .with_target("tower_http::trace::on_request", Level::DEBUG)
        .with_target("muto", Level::DEBUG)
        .with_default(Level::INFO);
    let filter = tracing_subscriber::EnvFilter::try_from_default_env().unwrap_or(filter)
    let tracing_layer = tracing_subscriber::fmt::layer();

    tracing_subscriber::registry()
        .with(filter)
        .with(tracing_layer)
        .init();

    info!("hello, web server!");
}
```

## Structure

```
muto
    /main.rs      <-- app entry point
    /config.rs    <-- app config
    /state.rs     <-- web server global state
    /domain       <-- domain logic
    /controllers  <-- web server routes
    /views        <-- everything that generates html
```

## Base de donnees

```bash
docker run -d \
	--name mutodb \
	-e POSTGRES_DB=mutodb \
	-e POSTGRES_DB=postgres \
	-e POSTGRES_PASSWORD=postgres \
	-p 5432:5432 \
	-d \
	postgres
```

## Configuration


## CSS

```rust
// muto/build.rs
fn main() {
    println!("cargo:rerun-if-changed=src/views/");

    let dir: String = std::env::var("CARGO_MANIFEST_DIR").unwrap();
    let input = format!("{}/src/views/style.css", dir);
    let output = format!("{}/static/dist.css", dir);

    let result = std::process::Command::new("npx")
        .args(["tailwind", "-i", &input, "-o", &output])
        .output()
        .expect("Unable run command to generate css");

    if !result.status.success() {
        let error = String::from_utf8_lossy(&result.stderr);
        println!("cargo:warning=Unable to build CSS !");
        println!("cargo:warning=Output: {error}");
    }
}
```

## Deploiement

```dockerfile
FROM lukemathwalker/cargo-chef:latest-rust-1.64.0 as chef
WORKDIR /app

FROM chef AS planner
COPY . .
RUN cargo chef prepare --recipe-path recipe.json

FROM chef as builder
COPY --from=planner /app/recipe.json recipe.json
RUN cargo chef cook --release --recipe-path recipe.json
COPY . .
ENV SQLX_OFFLINE true
RUN cargo build --release --bin muto

FROM node:gallium-alpine AS bundler
WORKDIR /app
RUN npm install -g tailwindcss@3.0.x daisyui@2.13.x
COPY . .
RUN npx tailwindcss -i /app/src/views/style.css -o /app/static/dist.css --minify

FROM debian:buster-slim AS runtime
WORKDIR /app
RUN apt-get update -y \
    && apt-get install -y --no-install-recommends openssl \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*
COPY static static
COPY --from=builder /app/target/release/muto muto
COPY --from=bundler /app/static/dist.css static/dist.css
ENV APP_ENVIRONMENT production
ENTRYPOINT ["./muto"]
```
