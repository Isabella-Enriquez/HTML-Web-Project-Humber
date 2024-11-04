document.addEventListener("DOMContentLoaded", () => {
    //its drawing time
filter("#pyramidcanvas","#pyramid",280,240);
filter("#artcanvas","#art",480,240);
filter("#hotelcanvas","#hotel",280,240);
image_fxpreset_cinemascope($("#artcanvas").id);
image_fxpreset_retro($("#hotelcanvas").id);
image_fxpreset_bnw($("#pyramidcanvas").id);
}); //ft the extension
const $ = function(selector) {
    return document.querySelector(selector);
}
const filter = function(canvas,image,width,height) {
    var c = $(canvas);
    var ctx = c.getContext("2d");
    var img = $(image);
    ctx.drawImage(img, 5, 5, width, height);
}