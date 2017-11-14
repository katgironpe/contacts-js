# contacts-js
Address book app in modern JavaScript. Created for open university Programming Fundamentals course.

## Fundamentals and Best Practices

* This app uses ES6/ modern JavaScript standards.
* We use ESLint.

## Installation

You need to make sure have Node.js installed on your computer. These commands should work: `npm` and `node`.

### Important references on dependencies

* [Webpack](https://webpack.github.io/docs/tutorials/getting-started/)
* [Webpack Getting Started](https://webpack.js.org/guides/getting-started/)
* [Material Design Lite](https://github.com/google/material-design-lite)
* [Firebase](https://www.npmjs.com/package/firebase)
* [Blueimp](https://github.com/blueimp/JavaScript-Templates/blob/master/README.md)
* [Redux](https://github.com/reactjs/redux)
* [Immutability Helper](https://github.com/kolodny/immutability-helper)
* [Lodash SortBy](https://www.npmjs.com/package/lodash.sortby)

### NoBackend App with Firebase

* [Firebase to your JavaScript Project](https://firebase.google.com/docs/web/setup)

### Clone the application

```bash
git clone git@github.com:katgironpe/contacts-js.git
```

### Install ESLint

* Make sure your current path is the application path

```
cd contacts-js
```

* Install ESLint globally

```
npm i eslint -g
```

### Install the dependencies

```bash
npm i
```

### Using Webpack

* We use Webpack for transpiling ES6 to ES5 and other tasks
* Read `webpack.config.js`

```bash
webpack
```

#### Install Webpack globally

* There may be a rare case wherein you have installed the dependencies but the command does not work. In this case, it is best to install `webpack` globally.

```bash
npm i webpack -g
```

#### Start the app

* This would watch for JS changes so you don't need to restart the app

```bash
npm start
```

### Access the app via web browser

```bash
open http://localhost:5000
```
