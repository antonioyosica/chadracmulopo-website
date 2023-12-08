export default defineNuxtConfig({
    vite: {
        server: {
            hmr: {
                clientPort: 3000,
                port: 3000
            }
        }
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    css: ['~/assets/css/main.css']
})







