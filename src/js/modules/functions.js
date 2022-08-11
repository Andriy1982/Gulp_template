// import { web } from "webpack";

export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = 'http://www.gstatic.com/webp/gallery/1.webp';
        console.log(webP.onload)
        console.log(webP.height )
    }
    testWebP(function(support) {
        let classNamme = support === true ?  'webp' : "no-webp";
        document.documentElement.classList.add(classNamme);
    })
}