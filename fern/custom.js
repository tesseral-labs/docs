// Clearbit stuffs
var clearbit = document.createElement("script");
clearbit.src =
  "https://tag.clearbitscripts.com/v1/pk_dfcaf9dddbffa957ddf1d2c7a74e9211/tags.js";
clearbit.setAttribute("referrerPolicy", "strict-origin-when-cross-origin");
document.head.appendChild(clearbit);

// Google Tag Manager stuffs
var gtm = document.createElement("script");
gtm.src = "https://www.googletagmanager.com/gtm.js?id=G-HW27FX565S";
gtm.setAttribute("async", "true");
document.head.appendChild(gtm);

(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-MD8NQHB7");

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-HW27FX565S");

// rb2b
!function () {var reb2b = window.reb2b = window.reb2b || []; if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"]; reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments); args.unshift(method);reb2b.push(args);return reb2b;};}; for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);} reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true; script.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/QO92DH7QXLN7.js.gz"; var first = document.getElementsByTagName("script")[0]; first.parentNode.insertBefore(script, first);}; reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("QO92DH7QXLN7");}();
