export default {

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Meraki UI Tailwind CSS Components',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Beautiful Tailwind CSS components that support RTL languages & fully responsive based on Flexbox & CSS Grid with elegant Dark Mode.' },
      { name: "twitter:card", content: "summary_large_image" },
      { hid: "twitter:title", name: "twitter:title", content: "Meraki UI Tailwind CSS Components" },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Beautiful Tailwind CSS components that support RTL languages & fully responsive based on Flexbox & CSS Grid with elegant Dark Mode.",
      },
      { hid: "twitter:image", name: "twitter:image", content: 'https://raw.githubusercontent.com/bakateam/merakiui/main/assets/images/merakiui-thumbnail.png' },
      { hid: "og:title", property: "og:title", content: "Meraki UI Tailwind CSS Components" },
      { property: "og:site_name", content: "Meraki UI" },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:image", property: "og:image", content: 'https://raw.githubusercontent.com/bakateam/merakiui/main/assets/images/merakiui-thumbnail.png' },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Beautiful Tailwind CSS components that support RTL languages & fully responsive based on Flexbox & CSS Grid with elegant Dark Mode.",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
	'~/plugins/vue-clipboard'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
