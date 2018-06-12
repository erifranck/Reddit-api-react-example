# Providers frontend project

## run the project with:
```yarn && yarn start ```


## The project structure:

`rootOfProject`
.
+-- _package.json
+-- _yarn.lock
+-- _README.md
+-- _public
|   +-- index.html
|   +-- manifest.json
|   +-- favicon.ico
+-- _src
|   +-- _common
|   |   +-- _components
|   |   |  +-- _[styles-for(component || container)].js
|   +-- header.html
+-- _layouts
|   +-- default.html
|   +-- post.html
+-- _posts
|   +-- 2007-10-29-why-every-programmer-should-play-nethack.textile
|   +-- 2009-04-26-barcamp-boston-4-roundup.textile
+-- _data
|   +-- members.yml
+-- _site
+-- index.html

| `[component-name].jsx`
| `index.js`
| `containers`
| `[styles-for(component || container)].js`
| `[container-name].jsx`
| `index.js`
| `styles`
| `[styles-for(component || container)].js`
| `index.js`
| `index.js`
|`main`
| `components`
| `[component-name].jsx`
| `index.js`
| `containers`
| `[container-name].jsx`
| `index.js`
| `styles`
| `[styles-for(component || container)].js`
| `index.js`
| `index.js`
|`root`
| `components`
| `[component-name].jsx`
| `index.js`
| `containers`
| `[container-name].jsx`
| `index.js`
| `styles`
| `[styles-for(component || container)].js`
| `index.js`
| `index.js`
|`auth`
| `components`
| `[component-name].jsx`
| `index.js`
| `containers`
| `[container-name].jsx`
| `index.js`
| `styles`
| `[styles-for(component || container)].js`
| `index.js`
| `index.js`
|`users`
| `components`
| `[component-name].jsx`
| `index.js`
| `containers`
| `[container-name].jsx`
| `index.js`
| `styles`
| `[styles-for(component || container)].js`
| `index.js`
| `index.js`
|`products`
| `components`
| `[component-name].jsx`
| `index.js`
| `containers`
| `[container-name].jsx`
| `index.js`
| `styles`
| `[styles-for(component || container)].js`
| `index.js`
| `index.js`

## WHY ?

This structure split the project in diferents folders, this folders are modules like user, products or authorization.
This structure help to organize the code by modules, you can create independient elements to use in other projects with react.
