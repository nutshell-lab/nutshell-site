---
title: "Rust, l'evironement parfait pour la ligne de commande"
short_description: "Developpement d'outils en ligne de commande."
description: "Dans ce billet de blog, nous verrons coment developper un outils en ligne de commade avec Rust."
image:
  src: '/blog/cookies.webp'
  alt: 'Une incroyable image de cookies.'
  width: 1024
  height: 819
created_at: 188/01/2024
category: dev
featured: true
---

Prêt à plonger dans l'univers de Rust ? Dans cet article, nous utiliserons le développement d'un outil en ligne de commande pour tuer un processus comme prétexte pour explorer les bases de Rust. Suivez ce guide pas à pas pour acquérir une compréhension pratique du langage et débloquez le potentiel de Rust tout en créant un outil simple et efficace. Préparez-vous à découvrir Rust d'une manière pratique et immersive !

:table-of-content

## Stack

- Installer Rust
- Perimetre fonctionnel
    - Rechercher un processus
        - par nom
        - par pid
        - par port
    - Tuer un processus
    - Tuer un processus (force)
- Dependances
    - Clap
    - Heim
    - Skim (ou ratatui ?)
    - Miette
- Implementation naive
    - Arguments
    - Recherche
    - Selection
    - Kill
- Refactoring
- Installation
- Conclusion

## Installer Rust

Avant toute chose il vous faudra installer la toolchain Rust. Pour ce faire, la solution privilegiee est de passer par [rustup.sh](https://rustup.sh).

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
# ...

rustc --version
# rustc 1.75.0 (82e1608df 2023-12-21)

cargo --version
# cargo 1.75.0 (1d8b05cdd 2023-11-20)
```

Une fois Rust installe, nous pourrons creer un nouveau projet a l'aide de cargo.

```bash
cargo new --bin rskill

cd rs kill

cargo run
# Hello, world !
```

# Perimetre fonctionnel

Rechercher un Processus :

- Par Nom :
L'utilisateur peut spécifier le nom du processus à rechercher.
Le système effectue une recherche parmi les processus en cours d'exécution pour le processus correspondant au nom fourni.
Affichage des détails du processus trouvé (PID, nom, etc.).

- Par PID :
L'utilisateur peut spécifier le PID du processus à rechercher.
Le système effectue une recherche parmi les processus en cours d'exécution pour le processus correspondant au PID fourni.
Affichage des détails du processus trouvé (nom, port, etc.).

- Par Port :
L'utilisateur peut spécifier le port associé au processus à rechercher.
Le système effectue une recherche parmi les processus en cours d'exécution pour le processus occupant le port spécifié.
Affichage des détails du processus trouvé (PID, nom, etc.).

Tuer un Processus :

L'utilisateur peut demander la terminaison d'un processus spécifié.
Utilisation du signal SIGTERM pour permettre au processus de terminer proprement.

Tuer un Processus (Force) :

L'utilisateur peut demander la terminaison forcée d'un processus spécifié.
Utilisation du signal SIGKILL pour une fermeture immédiate du processus, sans possibilité de traitement final.

Gestion des Erreurs :

Mise en place d'une gestion des erreurs pour traiter les cas où le processus spécifié n'est pas trouvé ou la terminaison échoue.
Affichage de messages d'erreur explicites en cas de problème.

Interface en Ligne de Commande (CLI) :n

Création d'une interface en ligne de commande conviviale pour permettre à l'utilisateur de spécifier les actions à effectuer et les paramètres nécessaires.
Utilisation de commandes simples et intuitives pour garantir une expérience utilisateur fluide.

Compatibilité Multiplateforme :

Assurer la compatibilité avec les principaux systèmes d'exploitation (Windows, Linux, MacOS).
Adapter les fonctionnalités pour garantir une expérience utilisateur cohérente sur différentes plateformes.

> Ce périmètre fonctionnel vise à couvrir les principales fonctionnalités de recherche et de gestion de processus, en mettant l'accent sur la flexibilité d'utilisation et la robustesse de l'outil en Rust.

# Dependances

Clap :

Clap est une bibliothèque en Rust qui facilite la création d'interfaces en ligne de commande (CLI). Elle offre une syntaxe concise pour définir les commandes, les arguments et les options de la ligne de commande. Intégrer Clap rendra la création de votre interface utilisateur plus simple et plus intuitive.

```bash
cargo add clap --features derive
```

Nom :

Utilisez une bibliothèque de parsing de chaînes comme regex ou nom pour analyser l'argument unique pouvant être un nom, un PID ou un port. Ces bibliothèques offrent des fonctionnalités puissantes pour la manipulation de motifs de chaînes et peuvent vous aider à extraire les informations nécessaires à partir de l'argument.

```bash
cargo add nom
```

Heim :

Heim est une bibliothèque en Rust axée sur la collecte d'informations sur le système. Elle vous permettra d'obtenir des détails sur les processus en cours d'exécution, tels que le nom, le PID, les ports, etc. Intégrer Heim facilitera la recherche de processus, l'information cruciale pour votre outil.

```bash
cargo add heim
```

Skim :

Skim est une bibliothèque en Rust qui offre des fonctionnalités d'interface utilisateur pour la sélection interactive d'éléments à partir d'une liste. Elle peut être utile pour présenter à l'utilisateur une liste de processus à choisir lors de la recherche, rendant l'expérience plus conviviale.

```bash
cargo add skim
```
