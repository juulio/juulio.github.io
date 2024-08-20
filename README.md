# Julio Del Valle Costa Rica 2024

# 3d web portfolio -javascript generative graphics experiments.

# My Kyokushin Karate Biography

# Project History

- August 2024 -launch new Portfolio website
- April 2024 - removing webpack, adding vite.
- December 2022 - Adding React to create a Projects' Portfolio
- December 2021 - Creating new scenes using js modules
- November 2021 - Launched the GLSL Volcanic Eruption
- February 2021 - Added webpack to bundle JS + Threejs
- October 2019 - Unsuccesfully tried to do a THREE.js daily sketch
- June 2017 - This project is a GULP + THREEjs Template.

### installation

1. Make sure you have npm and Node.js installed on your local machine.
   To install Node and NPM go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
   To check your current version, on a terminal type:
   node -v
   npm -v

2. Clone this repo into the desired folder.

3. Go into the recently cloned project folder, Make sure there's a package.json file and type **npm i**.
   After this command is properly finished, there will be a new 'node_modules' folder.

4. To run the project type
   npm run dev

5. To build the project type
   npm run build

6. Only the contents of the /docs folder will be published to the site's URL juliodelvalle.com

### gitignore

There's a .gitignore file. It avoids the following files and folders to be included on the git repository.

- the node_modules folder
- DS_Store files
- sass-cache files
- dist production folder

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
