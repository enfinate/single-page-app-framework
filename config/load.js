// Preloader content is a empty template in which you can write HTML that will be displayed when you shift through pages and during the load time it will be displayed
let preloaderContent = ``

function onPageLoad(){
    let viser = window.location.href
    let currentDirr="/"+viser.split(base.host+base.folder)[1]
    // write your page renders below

}