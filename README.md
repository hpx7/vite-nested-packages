run `npm install` in both root directory and inside app directory.

```
cd app
npx vite
```

Observe the following error in browser console:
```
Uncaught SyntaxError: The requested module '/@fs//<project path>/vite-nested-packages/node_modules/invariant/browser.js?v=588e9ec3' does not provide an export named 'default'
```
