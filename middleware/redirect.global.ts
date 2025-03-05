export default defineNuxtRouteMiddleware((to, from) => {
  //TODO check if this is good for google ?
  // Redirect all trailling / to non trailling / url
  // if (to.path !== '/' && to.path.endsWith('/')) {
  //   const { path, query, hash } = to;
  //   const nextPath = path.replace(/\/+$/, '') || '/';
  //   const nextRoute = { path: nextPath, query, hash };
  //   return navigateTo(nextRoute, { redirectCode: 301 });
  // }
  // Redirect /blog to /dossier (usefull for breadrumb component)
  if (to.path === '/blog') {
    return navigateTo('/dossiers', { redirectCode: 301 })
  }
})