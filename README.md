# setup-cr (archived / 已归档)

> [!IMPORTANT]
> This Action is frozen at `0.0.9` and replaced by
> [`calcit-lang/setup-calcit@v1`](https://github.com/calcit-lang/setup-calcit).
> Existing immutable `setup-cr` tags remain readable for legacy workflows, but
> this repository receives no Calcit-version, dependency, Actions, or feature updates.
>
> 本 Action 冻结于 `0.0.9`，由
> [`calcit-lang/setup-calcit@v1`](https://github.com/calcit-lang/setup-calcit)
> 取代。旧 workflow 仍可读取固定 tag，但本仓库不再跟进 Calcit、依赖、Actions 或功能更新。

## Migration / 迁移

```yml
- uses: calcit-lang/setup-calcit@v1
```

The replacement reads `:calcit-version` from `deps.cirru`, installs the current
`calcit` command, and preserves compatibility for older release asset names. New
workflows should use a released `v1` tag; security-sensitive workflows may pin an
exact commit.

新 workflow 使用 `setup-calcit@v1`，版本来自 `deps.cirru :calcit-version`。不要再为
旧 `setup-cr` 创建升级 PR。

## Historical documentation / 历史文档

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
