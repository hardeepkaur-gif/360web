/** Site CSS: home bundle on /, inner bundle elsewhere — injected in <head> before paint. */
export const DEFERRED_STYLES_LOADER = `
(function(){
  var p=(location.pathname||'/').replace(/\\/$/,'')||'/';
  var href=(p===''||p==='/')?'/css/home.css':'/css/inner.css';
  var link=document.createElement('link');
  link.rel='stylesheet';
  link.href=href+'?v=20260721ao';
  document.head.appendChild(link);
})();
`.trim();
