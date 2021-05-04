# Security tooling
This is a mock project for testing security tooling, set up using a NextJS project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Bugs

Some "bugs" are in the [api route](./src/pages/api/hello.ts) and [index](./src/pages/index.tsx) files.

Misconfigured terraform is in the [infrastructure](./infrastructure/infra.tf) file.

An insecure version of SSRI is installed in the [package.json](./package.json) file.

## Tools

CI security tools are configured to run in the [github workflow file](./.github/workflows/build-deploy.yml).

ES-lint is configured in the [.eslintrc](./.eslintrc.json) file.
