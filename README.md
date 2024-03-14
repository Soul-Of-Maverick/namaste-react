//to create package.json file

- npm init

// to add parcel dependencies

- npm install -D parcel

// to host our code in local server

- npx parcel index.html

- npm install react
- npm install react-dom

// create production build note: remove main in package.json

- npx parcel build index.html

# parcel

- dev build
- local server
- HMR= hot module replacement
- File watching algorithm - writen in c++
- cashing - Faster builds
- Image Optimization
- minification
- bundling
- compress
- consistent Hashing
- code spliting
- differential bundling - support older browsers
- Diagostic
- error handling
- HTTPs
- tree shaking - remove unsed code
- diffrent dev and prod bundles

Two types of Export/Import

- Default Export/import

export default component;
import component from "path";

- Named Export/import

export const componet;
import {component} from "path";

# React hooks

( normal JS utility functions)

- useState() - Superpowerful state variables in react
- useEffect()
