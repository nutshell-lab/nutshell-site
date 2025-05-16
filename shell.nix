with import <nixpkgs> {};
let 
  basePackages = [
    nodejs_22
    pnpm
  ];

  #PROJECT_ROOT = builtins.toString ./.;


in mkShell {
    buildInputs = basePackages;
  }
