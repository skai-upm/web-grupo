// Loads the latest JavaScript from the GitHub main branch in production.
// When opened locally (localhost, 127.0.0.1 or file://), it loads the packaged copies
// so the ZIP can be tested before the new files are pushed to GitHub.
(function () {
  const tag = document.currentScript;
  const contentSrc = tag && tag.dataset ? tag.dataset.contentSrc : '';
  const appSrc = tag && tag.dataset ? tag.dataset.appSrc : '';
  const params = new URLSearchParams(location.search);
  const forceRemote = params.get('remote') === '1';
  const forceLocal = params.get('local') === '1';
  const localHost = location.protocol === 'file:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname === '::1';
  const isLocal = forceLocal || (!forceRemote && localHost);

  const remoteBase = 'https://raw.githubusercontent.com/skai-upm/web-grupo/refs/heads/main/';
  window.SKAI_REMOTE_BASE = remoteBase;
  window.SKAI_REMOTE_MODE = !isLocal;

  function localName(src) {
    if (!src) return '';
    return src.split('?')[0].split('/').pop();
  }

  function loadScript(primary, fallback) {
    return new Promise((resolve, reject) => {
      if (!primary) return resolve();
      const script = document.createElement('script');
      script.src = primary;
      script.onload = resolve;
      script.onerror = () => {
        if (!fallback || fallback === primary) return reject(new Error('Could not load ' + primary));
        const local = document.createElement('script');
        local.src = fallback;
        local.onload = resolve;
        local.onerror = () => reject(new Error('Could not load ' + primary + ' or fallback ' + fallback));
        document.body.appendChild(local);
      };
      document.body.appendChild(script);
    });
  }

  function productionUrl(src) {
    if (!src) return '';
    // Cache-busting makes changes committed to main visible on the next page load.
    return src + (src.includes('?') ? '&' : '?') + 'v=' + Date.now();
  }

  const contentPrimary = isLocal ? localName(contentSrc) : productionUrl(contentSrc);
  const contentFallback = isLocal ? '' : localName(contentSrc);
  const appPrimary = isLocal ? localName(appSrc) : productionUrl(appSrc);
  const appFallback = isLocal ? '' : localName(appSrc);

  loadScript(contentPrimary, contentFallback)
    .then(() => loadScript(appPrimary, appFallback))
    .catch(err => console.error('[SKAI loader]', err));
})();
