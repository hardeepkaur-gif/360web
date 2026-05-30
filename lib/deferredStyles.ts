/** Non-render-blocking site CSS: home bundle on /, inner bundle elsewhere. */
export const DEFERRED_STYLES_LOADER = `
(function(){
  var p=(location.pathname||'/').replace(/\\/$/,'')||'/';
  var href=(p===''||p==='/')?'/css/home.css':'/css/inner.css';
  var preload=document.createElement('link');
  preload.rel='preload';
  preload.as='style';
  preload.href=href;
  document.head.appendChild(preload);
  function attach(){
    var link=document.createElement('link');
    link.rel='stylesheet';
    link.href=href;
    link.media='print';
    link.onload=function(){this.media='all'};
    document.head.appendChild(link);
  }
  if(window.matchMedia('(max-width:820px)').matches){
    if('requestIdleCallback' in window){
      requestIdleCallback(attach,{timeout:2500});
    }else{
      setTimeout(attach,1);
    }
  }else if('requestIdleCallback' in window){
    requestIdleCallback(attach,{timeout:800});
  }else{
    attach();
  }
})();
`.trim();
