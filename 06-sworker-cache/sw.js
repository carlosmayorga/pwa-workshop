/* ----------------------------------------------------
   Cache : Dynamic, Static, Inmutable
   Appshell: Corazon de la aplicacion
   Estrategias de cache: 
                      - Cache With NetWork Fallback 
                      - NetWork with Cache Fallback (x)
   ---------------------------------------------------- */

const CACHE_STATIC_NAME = 'static-v1';
const CACHE_DYNAMIC_NAME = 'dynamic-v1';
const CACHE_INMUTABLE_NAME = 'inmutable-v1';


// APPShell - Lo mínimo para que tu app funcione
// 1 - INSTALL
self.addEventListener('install', e => {

    const cacheProm = caches.open(CACHE_STATIC_NAME)
        .then(cache => {
            return cache.addAll([
                
            ]);
        });

    const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME)
        .then(cache => {
            
            return cache;
        });

    e.waitUntil(Promise.all([cacheProm, cacheInmutable]));
});

// 2 - ACTIVATE
self.addEventListener('activate', e => {

    
});

// 3 - PROXY SERVICE WORKER
self.addEventListener('fetch', e => {

     // Network First
        
});
