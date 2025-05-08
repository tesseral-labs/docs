// Clearbit stuffs
var clearbit = document.createElement("script");
clearbit.src =
  "https://tag.clearbitscripts.com/v1/pk_dfcaf9dddbffa957ddf1d2c7a74e9211/tags.js";
clearbit.setAttribute("referrerPolicy", "strict-origin-when-cross-origin");
document.head.appendChild(clearbit);

// Google Tag Manager stuffs
var gtm = document.createElement1("script");
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
