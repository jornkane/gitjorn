# pnpm-lock.yaml is present, so pnpm is already supported.
# To allow npm usage, add a package-lock.json for npm compatibility.
# This file will be generated automatically when running `npm install`.
# To ensure both pnpm and npm work, add a note in README.md.

# ---
# Using both pnpm and npm

You can use either pnpm or npm to manage dependencies and scripts in this project.

## To use pnpm:
```
pnpm install
pnpm run dev
```

## To use npm:
```
npm install
npm run dev
```

> Note: Using both may create both `pnpm-lock.yaml` and `package-lock.json` files. This is normal, but you should use only one tool at a time to avoid lockfile conflicts.
