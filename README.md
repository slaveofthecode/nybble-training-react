# Nybble Training React

Repository with the code related to the training get from the company:

## Main stack tech
- [React](https://react.dev/) 
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)

### Other technologies, libraries and framework just to shown different examples

- [styled-components](https://styled-components.com)


<br>

---
---

<br>

# Some utils sentences that were used 
### Git `2.33.1` and its code related to the 'branch'
```git
git --version
git branch <new-branch-to-create>
git checkout <branch-to-point>
git branch -d <branch-to-remove>
```

### Alias in the imports
- Install the "path" library
```
npm install path
```
- Go to the 'vite.config.ts' file
```ts
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
    },
  },
});
```
- Go to the "tsconfig.app.json" file
```ts
    /* Paths */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@pages/*": ["./src/pages/*"],
      "@layouts/*": ["./src/layouts/*"],
    }
```

<br>

---
---

<br>

# Different configurations or settings own of the project:








- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
