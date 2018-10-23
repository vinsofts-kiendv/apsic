// JavaScript Document
var ns = (navigator.appName.indexOf("Netscape") != -1);
var d = document;
var px = document.layers ? "" : "px";
function JSFX_FloatDiv(id, sx, sy, is_left, top) {
    var el = d.getElementById ? d.getElementById(id) : d.all ? d.all[id] : d.layers[id];
    window[id + "_obj"] = el;
    if (d.layers) el.style = el;
    el.cx = el.sx = sx; el.cy = el.sy = sy;
    el.sP = function (x, y) {
        var cWidth = ns ? innerWidth :
document.documentElement && document.documentElement.clientWidth ?
document.documentElement.clientWidth : document.body.clientWidth;
        if (cWidth < 1275) {
            this.style.display = "none";
        } else {
            this.style.display = '';
            if (!is_left) x += cWidth - 180;
            this.style.left = x + px;
            this.style.top = y + px;
        }
    };
    el.flt = function () {
        var cWidth = ns ? innerWidth :
document.documentElement && document.documentElement.clientWidth ?
document.documentElement.clientWidth : document.body.clientWidth;
        if (cWidth < 1275) {
            this.style.display = "none";
        } else {
            var pX, pY;
            pX = (this.sx >= 0) ? 0 : cWidth;
            pY = ns ? pageYOffset : document.documentElement && document.documentElement.scrollTop ?
document.documentElement.scrollTop : document.body.scrollTop;
            if (this.sy < 0)
                pY += ns ? innerHeight : document.documentElement && document.documentElement.clientHeight ?
document.documentElement.clientHeight : document.body.clientHeight;
            if (pY < top) pY = top;
            this.cx += (pX + this.sx - this.cx) / 8; this.cy += (pY + this.sy - this.cy) / 8;
        }
        this.sP(this.cx, this.cy);
        setTimeout(this.id + "_obj.flt()", 40);
    }
    return el;
}
function loadSlideBanner(top) {
    JSFX_FloatDiv("advSideSlideLeft", 0, 0, true, top).flt();
    JSFX_FloatDiv("advSideSlideRight", 42, 0, false, top).flt();
}
function unloadSlideBanner_left() {
    JSFX_unloadPopupBanner("advSideSlideLeft").flt();
}
function unloadSlideBanner_right() {
    JSFX_unloadPopupBanner("advSideSlideRight").flt();
}
// $(document).ready(function(){
// JSFX_FloatDiv("float_adv", 0, 0).flt();
// });
// POP up ads
function JSFX_PopupDiv(id) {
    var el = d.getElementById ? d.getElementById(id) : d.all ? d.all[id] : d.layers[id];
    window[id + "_obj"] = el;
    sx = 0;
    cHeight = ns ? innerHeight : document.documentElement && document.documentElement.clientHeight ?
document.documentElement.clientHeight : document.body.clientHeight;
    sy = cHeight - 265;
    if (d.layers) el.style = el;
    el.cx = el.sx = sx; el.cy = el.sy = sy;
    el.sP = function (x, y) {
        var cWidth = ns ? innerWidth :
document.documentElement && document.documentElement.clientWidth ?
document.documentElement.clientWidth : document.body.clientWidth;
        if (cWidth < 1275) {
            this.style.display = "none";
        } else {
            this.style.display = '';
            x += cWidth - 320;
            this.style.left = x + px;
            this.style.top = y + px;
        }
    };
    el.flt = function () {
        var cWidth = ns ? innerWidth :
document.documentElement && document.documentElement.clientWidth ?
document.documentElement.clientWidth : document.body.clientWidth;
        if (cWidth < 1275) {
            this.style.display = "none"
        } else {
            var pX, pY;
            pX = (this.sx >= 0) ? 0 : cWidth;
            pY = ns ? pageYOffset : document.documentElement && document.documentElement.scrollTop ?
document.documentElement.scrollTop : document.body.scrollTop;
            if (this.sy < 0)
                pY += ns ? innerHeight : document.documentElement && document.documentElement.clientHeight ?
document.documentElement.clientHeight : document.body.clientHeight;
            if (pY < top) pY = top;
            this.cx += (pX + this.sx - this.cx) / 8;
            this.cy += (pY + this.sy - this.cy) / 8;
            //this.cy += pY;
        }
        this.sP(this.cx, this.cy);
        setTimeout(this.id + "_obj.flt()", 40);
    }
    return el;
}
function JSFX_unloadPopupBanner(id) {
    var el = d.getElementById ? d.getElementById(id) : d.all ? d.all[id] : d.layers[id];
    window[id + "_obj"] = el;
    el.flt = function () {
        this.style.display = "none";
    }
}
function loadPopupBanner() {
    JSFX_PopupDiv("advPopup").flt();
}
function unloadPopupBanner() {
    JSFX_unloadPopupBanner("advPopup").flt();
}
