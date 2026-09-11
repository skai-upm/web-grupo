// SKAI remote JavaScript loader.
//
// Production behaviour:
//   * JS source files are still downloaded from the GitHub URLs declared in each HTML page.
//   * raw.githubusercontent.com serves .js as text/plain, so we fetch the source as text and
//     execute it from a Blob with the correct JavaScript MIME type.
//   * Content JS and the common application JS are fetched in parallel.
//   * No Date.now() cache-busting is used on every request. Content files are revalidated with
//     the browser cache; the common application script can be served directly from cache.
//
// Development behaviour:
//   * localhost / 127.0.0.1 / file:// use the packaged local JS copies by default.
//   * ?remote=1 forces the GitHub loader while testing locally.
//   * ?local=1 forces packaged JS.
//   * ?refresh=1 forces a fresh GitHub fetch when you have just pushed a change.
(function () {
  'use strict';

  const tag = document.currentScript;
  const contentSrc = tag && tag.dataset ? tag.dataset.contentSrc || '' : '';
  const appSrc = tag && tag.dataset ? tag.dataset.appSrc || '' : '';
  const params = new URLSearchParams(window.location.search);

  const forceRemote = params.get('remote') === '1';
  const forceLocal = params.get('local') === '1';
  const forceRefresh = params.get('refresh') === '1';
  const localHost = location.protocol === 'file:' ||
    location.hostname === 'localhost' ||
    location.hostname === '127.0.0.1' ||
    location.hostname === '::1';
  const isLocal = forceLocal || (!forceRemote && localHost);

  const remoteBase = 'https://raw.githubusercontent.com/skai-upm/web-grupo/refs/heads/main/';
  window.SKAI_REMOTE_BASE = remoteBase;
  window.SKAI_REMOTE_MODE = !isLocal;

  function localName(src) {
    if (!src) return '';
    return src.split('?')[0].split('/').pop();
  }

  function injectClassicScript(src) {
    return new Promise((resolve, reject) => {
      if (!src) return resolve();
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Could not load ' + src));
      document.body.appendChild(script);
    });
  }

  async function fetchSource(url, cacheMode) {
    const response = await fetch(url, {
      mode: 'cors',
      credentials: 'omit',
      cache: forceRefresh ? 'reload' : cacheMode
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} loading ${url}`);
    }
    return response.text();
  }

  function executeSource(source, sourceUrl) {
    return new Promise((resolve, reject) => {
      // Use a Blob so the browser receives a proper JavaScript MIME type even though
      // raw.githubusercontent.com itself answers with text/plain.
      const labelledSource = source + '\n//# sourceURL=' + sourceUrl.replace(/\s/g, '%20');
      const blob = new Blob([labelledSource], { type: 'text/javascript' });
      const blobUrl = URL.createObjectURL(blob);
      const script = document.createElement('script');
      script.src = blobUrl;
      script.async = false;
      script.onload = () => {
        URL.revokeObjectURL(blobUrl);
        resolve();
      };
      script.onerror = () => {
        URL.revokeObjectURL(blobUrl);
        reject(new Error('Could not execute ' + sourceUrl));
      };
      document.body.appendChild(script);
    });
  }

  function showLoadError(error) {
    console.error('[SKAI loader]', error);
    const target = document.getElementById('projectGrid') ||
      document.getElementById('researchList') ||
      document.getElementById('teamGrid') ||
      document.getElementById('vacancyList');
    if (target && !target.children.length) {
      target.innerHTML = '<div class="dynamic-load-error">No se ha podido cargar el contenido. Recarga la página o inténtalo de nuevo en unos segundos.</div>';
    }
  }

  async function startLocal() {
    // Local mode deliberately uses regular local scripts so file:// testing still works.
    if (contentSrc) await injectClassicScript(localName(contentSrc));
    if (appSrc) await injectClassicScript(localName(appSrc));
  }

  async function startRemote() {
    // Fetch both resources at the same time. The data source is revalidated so GitHub edits
    // propagate quickly; the common app script is allowed to use the normal browser cache.
    const contentPromise = contentSrc
      ? fetchSource(contentSrc, 'no-cache')
      : Promise.resolve(null);
    const appPromise = appSrc
      ? fetchSource(appSrc, 'default')
      : Promise.resolve(null);

    let contentSource;
    let appSource;
    try {
      [contentSource, appSource] = await Promise.all([contentPromise, appPromise]);
    } catch (remoteError) {
      // Keep a local fallback so a temporary GitHub/network failure does not break the site.
      console.warn('[SKAI loader] Remote load failed; trying packaged copies.', remoteError);
      return startLocal();
    }

    // Data must execute before script.js initializes the renderers.
    if (contentSource !== null) await executeSource(contentSource, contentSrc);
    if (appSource !== null) await executeSource(appSource, appSrc);
  }

  (isLocal ? startLocal() : startRemote()).catch(showLoadError);
})();
