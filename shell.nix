with import <nixpkgs> {};
let 
  basePackages = [
    nodejs_18
    pnpm
  ];

  #PROJECT_ROOT = builtins.toString ./.;


in mkShell {
    buildInputs = basePackages;
  }
