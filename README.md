## Action to setup [Calcit scripting language](https://calcit-lang.org/)

basic usages, to install:

- `cr` for compiling Calcit code
- `caps` for adding dependencies
- `bundle_calcit` optional to bundle hand-written `.cirru` files

### Usage

```yml
- uses: calcit-lang/setup-cr@0.0.8
  with:
    version: "0.9.6"
    bundler: false
```

Calcit latest: ![Calcit Version](https://img.shields.io/github/v/release/calcit-lang/calcit)

options:

- in `deps.cirru` file, `:calcit-version |0.9.6` to specify the version(higher priority)
- optional `version` in yml file
- optional `bundler` to enable bundler

at least one version should be specified.

### License

MIT
