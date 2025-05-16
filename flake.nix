{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    nixvim.url = "github:NoBrainSkull/nixvim-flake?tag=24.11_v2.1.10";
  };

  outputs = { nixvim, nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};

    in {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = [
          pkgs.nodejs_22
          pkgs.typescript
          pkgs.typescript-language-server
          pkgs.nixfmt
          pkgs.pnpm
          (nixvim.packages.${system}.default.extend {
            plugins.lsp = {
              enable = true;
              servers = {
                ts_ls.enable = true;
                nixd = { enable = true; };
                volar.enable = true;
              };
            };
          })
        ];
      };
    };
}
