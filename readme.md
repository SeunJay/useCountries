# countries-hook

A ReactJS hook to get the country information.



## How to use it?

You can use the project in this way:

### Install

```bash
# with npm
npm install countries-hook

# with yarn
yarn add countries-hook
```

### Usage

- Import the package in your app:

```js
import { useCountry } from "countries-hook";
```

- Get the country information from the hook:

```js
const { loading, error, country } = useCountry('Republic Of India')'
```
