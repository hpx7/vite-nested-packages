First run `npm install` in root directory and app directory.

To repro:
```
cd app
npx vite
```

Observe the following error in browser console:
```
[vite] Internal server error: Failed to load url vue/dist/vue.esm.js/dist/vue.esm.js (resolved id: vue/dist/vue.esm.js/dist/vue.esm.js/dist/vue.esm.js). Does the file exist?
```
