# Background

This is an example application that attempts to show some use cases for redux. The trouble with too simple apps is that redux is quite the overkill.
This app is a tiny shop-like app that tries to make good use of an application-wide store. 

It is also an experimental ground for me, as I've never worked with rxjs in combination with redux ([reactive-loop](https://github.com/flq/reactive-loop) doesn't count :)) and I may actually pull in other stuff, too if it feels applicable.

# Kick-Off

I started this project with
```
yarn create react-app my-app --scripts-version=react-scripts-ts
```

# Stuff in use

* redux, react-redux
* react-router
* [semantic-ui-react](https://react.semantic-ui.com/)
* [unionize](https://github.com/pelotom/unionize)
* [redux-observable](https://redux-observable.js.org/)


# Linter

linter rules I prefer:
```
"interface-name": [true, "never-prefix"],
"object-literal-sort-keys": false,
"jsx-boolean-value": false,
"ordered-imports": false,
"max-classes-per-file": false,
"member-access": false,
"curly": false
```

* dfd8409b8915 - store is introduced
