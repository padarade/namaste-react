

#Parcel
- Dev Build
- Local Server
- HMR - Hot module replacement
- File watching algorithm - written in c++
- caching - Faster builds
- Image optimization
- Minification of file
- Bundling
- Comppress
- Consistent Hashing - read online
- Code splitting
- Differential bundling - support older browsers
- Diagnostic
- Error Handling
- Https
- Tree shaking - remove unused code
- different dev and production bundler
- npx parcel build index.html
=================================================================
# Babel is transpiler that converts JS to HTML code
====================================================================================
# Two types of import/ export

- Default Export/Import
export default Component
import Component from "path"

- Named export/import

export const Component
import {Component} from "path"

=====================================================================================

# types of routing
- Client side routing
- Server side routing


============================================

# Redux
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to app
- slice(cartSlice)
- dispatch(action)
- selector


==============================
# different type of testc cases
- Unit Testing
- Integration Testing 
- End to end testing(e2e)

# Setting up testing for app
- install @testing-library/react
- install jest 
- install Babel dependencies
- configure Babel
- Configure parcel config file .parcelrc to disable default babel transpilation https://parceljs.org/languages/javascript/#babel
- Jest configuration - npx jest --init
- Install Js Dom library
- install @babel/preset-react library - transpile helps to convert JS to HTML code
- include @babel/preset-react library in babel config
- install @testing-library/jest-dom - helps to toBeInTheDocument etc to test

# Note
__ - dunder js