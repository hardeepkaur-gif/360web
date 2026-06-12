export const TAWK_PERFORMANCE_URL = "va.tawk.to/log-performance";

export const TAWK_PERFORMANCE_PATCH = `
(function(){
  if(window.__tawkPerfPatched) return;
  window.__tawkPerfPatched=true;
  function isPerf(u){
    return typeof u==="string"&&u.indexOf("${TAWK_PERFORMANCE_URL}")!==-1;
  }
  function okFetch(){
    return Promise.resolve(new Response('{"success":true}',{
      status:200,
      headers:{"Content-Type":"application/json"}
    }));
  }
  if(window.fetch){
    var of=window.fetch.bind(window);
    window.fetch=function(i,n){
      var u=typeof i==="string"?i:(i&&i.url)||"";
      return isPerf(u)?okFetch():of(i,n);
    };
  }
  if(window.XMLHttpRequest){
    var Ox=window.XMLHttpRequest;
    function Px(){
      var x=new Ox(),u="";
      var oo=x.open;
      x.open=function(m,url){
        u=String(url||"");
        return oo.apply(x,arguments);
      };
      var os=x.send;
      x.send=function(b){
        if(isPerf(u)){
          setTimeout(function(){
            try{
              Object.defineProperty(x,"readyState",{configurable:true,value:4});
              Object.defineProperty(x,"status",{configurable:true,value:200});
              Object.defineProperty(x,"responseText",{configurable:true,value:'{"success":true}'});
              if(typeof x.onreadystatechange==="function") x.onreadystatechange();
              if(typeof x.onload==="function") x.onload();
            }catch(e){}
          },0);
          return;
        }
        return os.call(x,b);
      };
      return x;
    }
    Px.prototype=Ox.prototype;
    window.XMLHttpRequest=Px;
  }
  if(navigator.sendBeacon){
    var ob=navigator.sendBeacon.bind(navigator);
    navigator.sendBeacon=function(u,d){
      return isPerf(String(u||""))?true:ob(u,d);
    };
  }
})();
`.trim();

export function patchTawkPerformanceLogging() {
  if (typeof window === "undefined" || window.__tawkPerfPatched) return;

  const isPerf = (url: string) => url.includes(TAWK_PERFORMANCE_URL);

  const okFetch = () =>
    Promise.resolve(
      new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );

  const originalFetch = window.fetch.bind(window);
  window.fetch = (input, init) => {
    const url =
      typeof input === "string"
        ? input
        : input instanceof Request
          ? input.url
          : "";

    return isPerf(url) ? okFetch() : originalFetch(input, init);
  };

  const OriginalXHR = window.XMLHttpRequest;

  function createPatchedXHR() {
    const xhr = new OriginalXHR();
    let requestUrl = "";

    const originalOpen = xhr.open.bind(xhr);
    xhr.open = (...args: Parameters<XMLHttpRequest["open"]>) => {
      requestUrl = String(args[1] ?? "");
      return originalOpen(...args);
    };

    const originalSend = xhr.send.bind(xhr);
    xhr.send = (...args: Parameters<XMLHttpRequest["send"]>) => {
      if (isPerf(requestUrl)) {
        queueMicrotask(() => {
          Object.defineProperty(xhr, "readyState", {
            configurable: true,
            value: 4,
          });
          Object.defineProperty(xhr, "status", {
            configurable: true,
            value: 200,
          });
          Object.defineProperty(xhr, "responseText", {
            configurable: true,
            value: '{"success":true}',
          });
          xhr.onreadystatechange?.call(xhr, new Event("readystatechange"));
          xhr.onload?.call(xhr, new Event("load"));
        });
        return;
      }

      return originalSend(...args);
    };

    return xhr;
  }

  window.XMLHttpRequest = function XMLHttpRequest() {
    return createPatchedXHR();
  } as typeof XMLHttpRequest;
  window.XMLHttpRequest.prototype = OriginalXHR.prototype;

  if (navigator.sendBeacon) {
    const originalBeacon = navigator.sendBeacon.bind(navigator);
    navigator.sendBeacon = (url, data) =>
      isPerf(String(url)) ? true : originalBeacon(url, data);
  }

  window.__tawkPerfPatched = true;
}

declare global {
  interface Window {
    __tawkPerfPatched?: boolean;
  }
}
