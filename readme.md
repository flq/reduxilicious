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

# Run the app

The app needs a "db". It is just some JSON in app storage. Visit "/admin" and then paste in some valid json. Here is an example:

```
{
  "users": [
    {
      "login": "Frank", 
      "name": "Frank Quednau", 
      "email": "me@somedomain.com" }
  ],
  "products": [
    { 
      "id": 1,
      "name": "Neiko 30201A Socket Adapter and Drive Reducer Set", 
      "image": "/assets/reducer1.jpg", 
      "description": "Precisely machined, heat treated chrome vanadium steel provides excellent durability and strength with every impact movement"
    }
  ]
}
```

Press **Save** and off you go.
