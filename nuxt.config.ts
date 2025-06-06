// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  $development: {
    ssr: false
  },

  imports: {
    presets: [
      {
        from: "vee-validate",
        imports: ["useForm"],
      },
    ],
  },

  nitro: {
    preset: 'cloudflare_pages',
    prerender: {
      routes: ['/sitemap.xml'],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
  },

  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxtjs/plausible",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "nuxt-route-meta",
    "nuxt-security",
    "@nuxt/image",
    "@nuxtjs/robots",
  ],

  plausible: {
    domain: "nutshell-lab.com",
    apiHost: "https://plausible.nutshell-lab.com",
  },

  site: {
    url: "https://nutshell-lab.com",
  },

  content: {
    database: {
      type: 'd1',
      bindingName: 'DB'
    }
  },

  security: {
    headers: {
      contentSecurityPolicy: {
        'script-src': [
          "'wasm-unsafe-eval'",
          "'self'",  // Fallback value, will be ignored by most modern browsers (level 3)
          "https:", // Fallback value, will be ignored by most modern browsers (level 3)
          "'unsafe-inline'", // Fallback value, will be ignored by almost any browser (level 2)
          "'strict-dynamic'", // Strict CSP via 'strict-dynamic', supported by most modern browsers (level 3)
          "'nonce-{{nonce}}'" // Enables CSP nonce support for scripts in SSR mode, supported by almost any browser (level 2)
        ],
        'style-src': [
          "'self'", // Enables loading of stylesheets hosted on same origin
          "https:", // For increased security, replace by the specific hosting domain or file name of your external stylesheets
          "'unsafe-inline'" // Recommended default for most Nuxt apps
        ],
        'base-uri': ["'none'"],
        'img-src': ["'self'", "data:"], // Add relevant https://... sources if you load images from external sources 
        'font-src': ["'self'", "https:", "data:"], //  For increased security, replace by the specific sources for fonts
        'object-src': ["'none'"],
        'script-src-attr': ["'none'"],
        'upgrade-insecure-requests': true
      }
    }
  },

  sitemap: {
    exclude: ["/mentions-legales", "/faq", "/cgv", "/services"],
  },

  robots: {
    disallow: ['/mentions-legales'],
  },

  ignore: [
    process.env.CF_PAGES == "1" ? "pages/dev/*" : "",
    process.env.CF_PAGES == "1" ? "pages/faq.vue" : "",
    process.env.CF_PAGES == "1" ? "pages/cgv.vue" : "",
    process.env.CF_PAGES == "1" ? "pages/services.vue" : "",
  ],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "fr",
      },
      meta: [
        {
          name: "theme-color",
          content: "#161616",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
        },
      ],
    },
  },

  compatibilityDate: "2024-09-16",
});