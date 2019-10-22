/* ---------------------------------------------------- */
// Manejo de errores
// porque un sw, solo es reconocido con https o localhost
/* ---------------------------------------------------- */

self.addEventListener('fetch', event => {

   event.respondWith(
      fetch(event.request)
      .then(resp => {
         //console.log(resp);
         return resp;
      })
   );

});