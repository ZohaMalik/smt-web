# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

<!-- Old Website Link -->
https://sites.google.com/view/www-sharifmemorial-com/aims?authuser=0

<!-- To deploy after updating code (old way for github pages) -->
<!-- - push code/merge your branch to the main branch
- Run: `npm run deploy`
- verify (open github repository settings - select 'Pages' from side bar) (check the custom domain, should be - sharifmemorialtrust.org - if not update this then click save) -->

<!-- new way to deploy on c_panel -->
- make sure vite.config.js has: 
`base: './'`
- after confirming base, run `npm run build`
- in c panel, there is already a 'public_html' folder
- delete all content inside the public_html folder
- then paste all the files/folders that are inside the dist folder in the public_html folder
