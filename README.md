# React Clean Architecture

<p align="center">
<img src="./assets/images/react-clean-architecture-banner.png?raw=true" style="max-width: 100%; width: 600px;" />
</p>
<p align="center" style="margin-top: 10px;">A <b>React scaffold</b> with a clean architecture that is easy to understand.</p>

## Features

- 📁 Clean architecture. Layered file structure
- 🛡️ TypeScript bulletproof typing
- ⚡ Development environment: [Vite](https://vitejs.dev/)
- 🎨 Design System and UI: [Tailwind CSS](https://tailwindcss.com/) + [Headless UI](https://headlessui.com/)
- 🖌️ Code format: [ESLint](https://eslint.org/)
- 🐩 Git hooks: [Husky](https://www.npmjs.com/package/husky)
- 💉 Dependency injection: [Inversiland](https://github.com/inversiland/inversiland)
- 🌍 I18n: [i18next](https://www.i18next.com)
- 🚢 Navigation: [React Router](https://reactrouter.com/en/main)
- 🧰 State Manager: [Mobx](https://mobx.js.org/)

<hr>

## 📁 Project File Structure

> ⚠️ What makes the implementation of the clean architecture concept more difficult in my opinion is that since it is defined theoretically, each person implements it using different terminology or omitting/adding some layers or pieces to simplify it or continue to make it more complex.

For this reason, I think it is important to emphasize the documentation that accompanies the architecture to avoid obstacles with the rest of the people who are going to work with this system.

I briefly explain each of the four layers that make up clean architecture within the /src folder:

```
└── /src
    ├── AppModule.ts               # Dependency injection root module
    ├── /core                      # Core bounded context
    │   └── /presentation
    └── /post                      # Post bounded context
        ├── /domain
        ├── /application
        ├── /infrastructure
        └── /presentation
```

### Domain

This layer contains all the enterprise business rules: entities, specifications...

### Application

This layer contains the use cases of the bounded context.

### Infrastructure

This layer contains the technical details (implementation) of the domain layer and third parties integrations.

### Presentation

This layer contains the React source code: views and controllers (Mobx controllers).

### Referencesw

- https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
- https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/

<hr>

## Run

Dev

```bash
yarn dev
```

Tailwind dev

```bash
yarn tailwindcss:dev
```

Build

```bash
yarn build
```

Tailwind build

```bash
yarn tailwindcss:build
```

<hr>

## Support the project

<p align="center">☕️ Buy me a coffee so the open source party never ends.</p>

<p align="center"><a href="https://www.buymeacoffee.com/carlossala95" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a></p>

<p align="center">
  <a href="https://www.youtube.com/channel/UCC-EUKPStBfQ1nEIvSl6bAQ" target="_blank">YouTube</a> |
  <a href="https://instagram.com/carlossalasamper" target="_blank">Instagram</a> |
  <a href="https://twitter.com/carlossala95" target="_blank">Twitter</a> |
  <a href="https://facebook.com/carlossala95" target="_blank">Facebook</a>
</p>
<p align="center">
  <a href="https://godofprogramming.com" target="_blank">godofprogramming.com</a>
</p>
