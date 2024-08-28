## Action to setup [Calcit scripting language](https://calcit-lang.org/)

basic usages:

- `cr` command
- `caps` command
- `bundle_calcit` command, when `bundler` is set to `true`

### Usage

```yml
- uses: calcit-lang/setup-cr@0.0.7
  with:
    version: "0.9.4"
    bundler: false
```

Calcit latest: ![Calcit Version](https://img.shields.io/github/v/release/calcit-lang/calcit)

`version` is also optional when `deps.cirru` is provided, which declares `:calcit-version`.

### License

MIT
