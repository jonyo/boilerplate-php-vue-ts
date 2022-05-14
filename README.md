# Boilerplate PHP | Vue SFC | TS

This is a boilerplate starter that uses:

* Docker to run local instance
* PHP (no framework)
* XDebug (configured to run with VSC)
* webpack
* Vue 3 / Single File Components (SFC)
* Typescript

## Requirements

* [Docker](https://docs.docker.com/get-docker/)
* npm
* composer

The last 2 could eventually be set up in the container itself but for now must be installed on the host.

## Building

### Docker

First, build:
```
docker-compose build
```

Then run this once:
```
docker-compose up
```

### PHP

Run:
```
composer install
```

### CSS / JS bundling

Run once:
```
npm install
```

Then, use `npm build` or `npm watch` to build the JS and CSS into the `webroot/dist/` folder.

## Paths

* webroot/ - Put web-accessible PHP scripts (and other things) here.
* src/ - most the code goes here (other than directly loaded PHP scripts)
  * components/ - Vue SFC components
  * css/ - global CSS (typically imported in `components/App.vue`)
  * ts/ - Typescripts
