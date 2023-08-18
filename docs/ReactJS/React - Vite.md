# Vite/Lint/Prettier/Husky 

## Arrancando proyecto

1. Crear proyecto en carpeta deseada (frontend):

```bash
npm create/init vite@latest <nombre del proyecto> 
```

2. Entrar al proyecto e iniciar la instalación de dependencias que vienen por default:

```bash
cd frontend
npm install
```

3. Ejecutar el proyecto:

```bash
npm run dev
```

4. Eliminar los archivos innecesarios y crear estructura de archivos.


5. Cambiar rama a main:

```bash
git config --global init.defaultBranch <name>
```

6. Renombrar rama:

```bash
git branch -m <name>
```

## Instalar dependencias

### Bootstrap.

[https://react-bootstrap.github.io/docs/getting-started/introduction](https://react-bootstrap.github.io/docs/getting-started/introduction)


```bash
npm install react-bootstrap bootstrap
```

Agregar en el archivo principal de css (index.css) lo siguiente:

```bash
@import "bootstrap/dist/css/bootstrap.css";
```

### Axios.

```bash
npm install axios
```

Ejemplo para testear axios:

```bash
// Importar Axios
import axios from 'axios';

// URL de la API de ejemplo
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Hacer una solicitud GET a la API
axios.get(apiUrl)
  .then(response => {
    console.log('Respuesta de la API:', response.data);
  })
  .catch(error => {
    console.error('Error al obtener datos:', error);
  });
```

### Iconos de Bootstrap.

[https://react-icons.github.io/react-icons](https://react-icons.github.io/react-icons)

```bash
npm install react-icons --save
```

ejemplo:

```bash
import { FaBeer } from 'react-icons/fa';

// usarlo
<h3> Test <FaBeer />? </h3>
```

### Prettier.

```bash
npm i -D prettier
```

Crear archivo en root: **.prettierrc** y copiar este objeto:


```bash
{
	"useTabs": true,
	"semi": true,
	"singleQuote": true,
	"jsxSingleQuote": true
}
```

### Eslint-config-prettier:

```bash
npm i -D eslint-config-prettier
```

Copiar **eslint-config-prettier** en extends dentro de **.eslintrc (.eslintrc.cjs) 

- Instalar: **npm i -D eslint-config-prettier**
- Copiar **eslint-config-prettier** en extends dentro de **.eslintrc.cjs**

```bash
module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'eslint-config-prettier', // ------> De esta manera
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'react/react-in-jsx-scope': 'off',
		'no-console': 'warn',
		'no-unused-vars': 'error',
	},
};
```

- Crear un archivo llamado: **.prettierignore** y agregar:

```bash
dist
package-lock.json
```

- Crear el archivo **.eslintignore** y agregar:

```bash
dist
```

- Agregar estos scripts en el **package.json**:

```bash
"format": "prettier --write .",
"lint": "eslint --fix . --ext .js,.jsx --report-unused-disable-directives --max-warnings 0",
```

- Copiar en reglas de eslint:

```bash
'react/react-in-jsx-scope': 'off',
'no-console': 'warn',
'no-unused-vars': 'error',
```

El archivo **.eslintrc (.eslintrc.cjs)** debe quedar asi:

```bash
module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'eslint-config-prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'react/react-in-jsx-scope': 'off',
		'no-console': 'warn',
		'no-unused-vars': 'error',
	},
};
```

### Husky:

[https://www.youtube.com/watch?v=sKT4YvXc1SY](https://www.youtube.com/watch?v=sKT4YvXc1SY) (min 15:13)

[https://www.youtube.com/watch?v=sKT4YvXc1SY](https://www.youtube.com/watch?v=sKT4YvXc1SY)

- Ejecutar:

```bash
npx husky-init && npm install
```

- En el archivo **pre-comit** que se ceó en la carpeta **.husky** agregar los script a ejecutar antes de que se haga el commit:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run format
npm run lint
```

## Agregar puerto para docker:
```jsx
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		watch: {
		  usePolling: true,
		},
		host: true, // needed for the Docker Container port mapping to work
		strictPort: true,
		port: 5173, // you can replace this port with any port
	  }
});
```
