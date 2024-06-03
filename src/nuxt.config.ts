export default defineNuxtConfig({
    vite: {
        server: {
            hmr: {
                clientPort: 3000,
                port: 3000
            }
        }
    },
    nitro: {
        compressPublicAssets: true,
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    css: ['~/assets/css/main.css'],
    modules: ['@nuxtjs/sitemap'],
    sitemap: {
        hostname: 'https://chadracmulopo.com',
        gzip: true,
        defaults: {
            changefreq: 'monthly',
            priority: 1,
            lastmod: new Date().toISOString(),
        },
        routes: [
            '/',
            '/sobre',
            '/trabalho',
            '/contacto',
            '/blog'
        ]
    },
    plugins: [
    ],
})