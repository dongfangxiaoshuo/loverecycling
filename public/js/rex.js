function setRem(){
    var element = document.documentElement;
    console.log(element)
    var w = element.clientWidth;
    element.style.fontSize = w/3.75+"px";
}
setRem();
window.onresize = setRem;