"use strict";(self.webpackChunkdocumentation_mg=self.webpackChunkdocumentation_mg||[]).push([[2776],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2431:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},l="Configurar proyecto Java en IntelliJ IDEA",s={unversionedId:"Java/ConfigProjectJava",id:"Java/ConfigProjectJava",title:"Configurar proyecto Java en IntelliJ IDEA",description:"Arrancando proyecto",source:"@site/docs/Java/ConfigProjectJava.md",sourceDirName:"Java",slug:"/Java/ConfigProjectJava",permalink:"/documentation-mg/docs/Java/ConfigProjectJava",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Java/ConfigProjectJava.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/documentation-mg/docs/category/java"},next:{title:"ReactJS",permalink:"/documentation-mg/docs/category/reactjs"}},i={},p=[{value:"Arrancando proyecto",id:"arrancando-proyecto",level:2},{value:"Instalar dependencias",id:"instalar-dependencias",level:2},{value:"Bootstrap.",id:"bootstrap",level:3},{value:"Axios.",id:"axios",level:3},{value:"Iconos de Bootstrap.",id:"iconos-de-bootstrap",level:3},{value:"Prettier.",id:"prettier",level:3},{value:"Eslint-config-prettier:",id:"eslint-config-prettier",level:3},{value:"Husky:",id:"husky",level:3},{value:"Agregar puerto para docker:",id:"agregar-puerto-para-docker",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configurar-proyecto-java-en-intellij-idea"},"Configurar proyecto Java en IntelliJ IDEA"),(0,a.kt)("h2",{id:"arrancando-proyecto"},"Arrancando proyecto"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Crear proyecto en carpeta deseada (frontend):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm create/init vite@latest <nombre del proyecto> \n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Entrar al proyecto e iniciar la instalaci\xf3n de dependencias que vienen por default:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd frontend\nnpm install\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Ejecutar el proyecto:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Eliminar los archivos innecesarios y crear estructura de archivos.")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Cambiar rama a main:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global init.defaultBranch <name>\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Renombrar rama:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git branch -m <name>\n")),(0,a.kt)("h2",{id:"instalar-dependencias"},"Instalar dependencias"),(0,a.kt)("h3",{id:"bootstrap"},"Bootstrap."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://react-bootstrap.github.io/docs/getting-started/introduction"},"https://react-bootstrap.github.io/docs/getting-started/introduction")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-bootstrap bootstrap\n")),(0,a.kt)("p",null,"Agregar en el archivo principal de css (index.css) lo siguiente:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'@import "bootstrap/dist/css/bootstrap.css";\n')),(0,a.kt)("h3",{id:"axios"},"Axios."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install axios\n")),(0,a.kt)("p",null,"Ejemplo para testear axios:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"// Importar Axios\nimport axios from 'axios';\n\n// URL de la API de ejemplo\nconst apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';\n\n// Hacer una solicitud GET a la API\naxios.get(apiUrl)\n  .then(response => {\n    console.log('Respuesta de la API:', response.data);\n  })\n  .catch(error => {\n    console.error('Error al obtener datos:', error);\n  });\n")),(0,a.kt)("h3",{id:"iconos-de-bootstrap"},"Iconos de Bootstrap."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://react-icons.github.io/react-icons"},"https://react-icons.github.io/react-icons")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-icons --save\n")),(0,a.kt)("p",null,"ejemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"import { FaBeer } from 'react-icons/fa';\n\n// usarlo\n<h3> Test <FaBeer />? </h3>\n")),(0,a.kt)("h3",{id:"prettier"},"Prettier."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -D prettier\n")),(0,a.kt)("p",null,"Crear archivo en root: ",(0,a.kt)("strong",{parentName:"p"},".prettierrc")," y copiar este objeto:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "useTabs": true,\n    "semi": true,\n    "singleQuote": true,\n    "jsxSingleQuote": true\n}\n')),(0,a.kt)("h3",{id:"eslint-config-prettier"},"Eslint-config-prettier:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -D eslint-config-prettier\n")),(0,a.kt)("p",null,"Copiar ",(0,a.kt)("strong",{parentName:"p"},"eslint-config-prettier")," en extends dentro de **.eslintrc (.eslintrc.cjs) "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Instalar: ",(0,a.kt)("strong",{parentName:"li"},"npm i -D eslint-config-prettier")),(0,a.kt)("li",{parentName:"ul"},"Copiar ",(0,a.kt)("strong",{parentName:"li"},"eslint-config-prettier")," en extends dentro de ",(0,a.kt)("strong",{parentName:"li"},".eslintrc.cjs"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"module.exports = {\n    root: true,\n    env: { browser: true, es2020: true },\n    extends: [\n        'eslint:recommended',\n        'plugin:react/recommended',\n        'plugin:react/jsx-runtime',\n        'plugin:react-hooks/recommended',\n        'eslint-config-prettier', // ------\x3e De esta manera\n    ],\n    ignorePatterns: ['dist', '.eslintrc.cjs'],\n    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },\n    settings: { react: { version: '18.2' } },\n    plugins: ['react-refresh'],\n    rules: {\n        'react-refresh/only-export-components': [\n            'warn',\n            { allowConstantExport: true },\n        ],\n        'react/react-in-jsx-scope': 'off',\n        'no-console': 'warn',\n        'no-unused-vars': 'error',\n    },\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Crear un archivo llamado: ",(0,a.kt)("strong",{parentName:"li"},".prettierignore")," y agregar:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dist\npackage-lock.json\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Crear el archivo ",(0,a.kt)("strong",{parentName:"li"},".eslintignore")," y agregar:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dist\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Agregar estos scripts en el ",(0,a.kt)("strong",{parentName:"li"},"package.json"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'"format": "prettier --write .",\n"lint": "eslint --fix . --ext .js,.jsx --report-unused-disable-directives --max-warnings 0",\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Copiar en reglas de eslint:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"'react/react-in-jsx-scope': 'off',\n'no-console': 'warn',\n'no-unused-vars': 'error',\n")),(0,a.kt)("p",null,"El archivo ",(0,a.kt)("strong",{parentName:"p"},".eslintrc (.eslintrc.cjs)")," debe quedar asi:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"module.exports = {\n    root: true,\n    env: { browser: true, es2020: true },\n    extends: [\n        'eslint:recommended',\n        'plugin:react/recommended',\n        'plugin:react/jsx-runtime',\n        'plugin:react-hooks/recommended',\n        'eslint-config-prettier',\n    ],\n    ignorePatterns: ['dist', '.eslintrc.cjs'],\n    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },\n    settings: { react: { version: '18.2' } },\n    plugins: ['react-refresh'],\n    rules: {\n        'react-refresh/only-export-components': [\n            'warn',\n            { allowConstantExport: true },\n        ],\n        'react/react-in-jsx-scope': 'off',\n        'no-console': 'warn',\n        'no-unused-vars': 'error',\n    },\n};\n")),(0,a.kt)("h3",{id:"husky"},"Husky:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=sKT4YvXc1SY"},"https://www.youtube.com/watch?v=sKT4YvXc1SY")," (min 15:13)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=sKT4YvXc1SY"},"https://www.youtube.com/watch?v=sKT4YvXc1SY")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ejecutar:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx husky-init && npm install\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"En el archivo ",(0,a.kt)("strong",{parentName:"li"},"pre-comit")," que se ce\xf3 en la carpeta ",(0,a.kt)("strong",{parentName:"li"},".husky")," agregar los script a ejecutar antes de que se haga el commit:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env sh\n. "$(dirname -- "$0")/_/husky.sh"\n\nnpm run format\nnpm run lint\n')),(0,a.kt)("h2",{id:"agregar-puerto-para-docker"},"Agregar puerto para docker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n    plugins: [react()],\n    server: {\n        watch: {\n          usePolling: true,\n        },\n        host: true, // needed for the Docker Container port mapping to work\n        strictPort: true,\n        port: 5173, // you can replace this port with any port\n      }\n});\n")))}m.isMDXComponent=!0}}]);