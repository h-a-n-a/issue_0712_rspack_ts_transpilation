# Rspack reproduction

## Install

```bash
pnpm install
pnpm build
```

## Configuration

Please refer to `rspack.config.js`

## Actual behavior

In the `src/main.js`, two modules are created.

The first statement leverages `raw-loader` feature directly, due to Rspack's builtin `ts` post-processor. The result of `raw-loader` should be transpiled correctly instead of empty object.

## Expected behavior

THe second statement is used as a workaround for disable builtin `ts` transpilation using `js` post-processor.

However, both of them should produce the same evaluation semantics.
