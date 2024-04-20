import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  hooks: {
    'close': async () => {
        const fs = require('fs/promises');
        await fs.cp('./staticwebapp-old.config.json', './staticwebapp.config.json', {force: true});
    }
  },
})
