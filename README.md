# Providers frontend project

## run the project with:
```yarn && yarn start ```

## The project structure:
`rootOfProject` \n
  |`package.json` \n
  |`yarn.lock` \n
  |`README.md` \n
  |`public` \n
    | `index.js`
    | `favicon.ico`
    | `manifest.json`
  |`src`
    |`common`
      | `components`
        | `[styles-for(component || container)].js`
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
