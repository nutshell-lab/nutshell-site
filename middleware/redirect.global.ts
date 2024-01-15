export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.replace(/\/\/*/g,"/").replace(/\/+$/,"") === '/blog') {
    return navigateTo('/dossiers', { redirectCode: 301 })
  }
})