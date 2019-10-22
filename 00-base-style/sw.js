/* ---------------------------------------------------- */
// ECMAScript 6: (include, y =>)
// porque un sw, solo es reconocido con https o localhost
/* ---------------------------------------------------- */

   self.addEventListener('fetch', event => {
       console.log(event.request.url);
   });