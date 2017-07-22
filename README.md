dcr-jekyll
==========

Uses Docker Compose to run Jekyll.

This saves us having to install Jekyll locally.

The Docker image used is [jekyll/jekyll](https://hub.docker.com/r/jekyll/jekyll/) and is [described here](https://github.com/jekyll/docker/blob/master/README.md).

To install, do:

```shell
npm install -g dcr-jekyll
```

Then run a command with:

```shell
$ dcr-jekyll --help
jekyll 3.4.3 -- Jekyll is a blog-aware, static site generator in Ruby

Usage:

  jekyll <subcommand> [options]

Options:
        -s, --source [DIR]  Source directory (defaults to ./)
        -d, --destination [DIR]  Destination directory (defaults to ./_site)
            --safe         Safe mode (defaults to false)
        -p, --plugins PLUGINS_DIR1[,PLUGINS_DIR2[,...]]  Plugins directory (defaults to ./_plugins)
            --layouts DIR  Layouts directory (defaults to ./_layouts)
            --profile      Generate a Liquid rendering profile
        -h, --help         Show this message
        -v, --version      Print the name and version
        -t, --trace        Show the full backtrace when an error occurs

Subcommands:
  import
  build, b              Build your site
  clean                 Clean the site (removes site output and metadata file) without building.
  doctor, hyde          Search site and print specific deprecation warnings
  help                  Show the help message, optionally for a given subcommand.
  new                   Creates a new Jekyll site scaffold in PATH
  new-theme             Creates a new Jekyll theme scaffold
  serve, server, s      Serve your site locally
  docs, d               Start a local server for the Jekyll documentation
```
