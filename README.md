# Reddit frontend project

## run the project with:
```yarn && yarn start ```


## The project structure:

```
.
├── package.json
├── yarn.lock
├── .eslintrc
├── .babelrc
├── public
|   ├── index.js
|   ├── favicon.ico
|   └── manifest.json
├── src
|   ├── common
|   |   ├── index.js
|   |   ├── components
|   |   |   ├── [component-name].jsx
|   |   |   └── index.jsx
|   |   ├── containers
|   |   |   ├── [container-name].jsx
|   |   |   └── index.jsx
|   |   └── styles
|   |       ├── [styles-for(component || container)].js
|   |       └── index.jsx
|   ├── root
|   |   ├── index.js
|   |   ├── routes.js
|   |   ├── reducer.js
|   |   ├── store.js
|   |   ├── saga.js
|   |   ├── components
|   |   |   ├── [component-name].jsx
|   |   |   └── index.jsx
|   |   ├── containers
|   |   |   ├── [container-name].jsx
|   |   |   └── index.jsx
|   |   └── styles
|   |       ├── [styles-for(component || container)].js
|   |       └── index.jsx
|   ├── main
|   |   ├── index.js
|   |   ├── routes.js
|   |   ├── reducer.js
|   |   ├── saga.js
|   |   ├── components
|   |   |   ├── [component-name].jsx
|   |   |   └── index.jsx
|   |   ├── containers
|   |   |   ├── [container-name].jsx
|   |   |   └── index.jsx
|   |   └── styles
|   |       ├── [styles-for(component || container)].js
|   |       └── index.jsx
|   └── [module-folder]
|       ├── index.js
|       ├── reducer.js
|       ├── saga.js
|       ├── routes.js
|       ├── components
|       |   ├── [component-name].jsx
|       |   └── index.jsx
|       ├── containers
|       |   ├── [container-name].jsx
|       |   └── index.jsx
|       └── styles
|           ├── [styles-for(component || container)].js
|           └── index.jsx
└── README.md
```

## WHY ?

This structure split the project in diferents folders, this folders are modules like user, products or authorization.
This structure help to organize the code by modules, you can create independient elements to use in other projects with react.
