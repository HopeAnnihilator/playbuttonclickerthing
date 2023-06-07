const checkPause = function (mutationsList) {
    const iframe = document.getElementById('content-frame');
    let innerDoc = "";
    if (iframe) 
        innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    else
        innerDoc = document;
    const btn = innerDoc.getElementsByClassName("playbarBigButton")[0];
    if (btn) {
        if (btn.title == "Play")
            btn.click();
    }
}

const webPage = document.querySelector('body');
const config = {attributes: true, childList: true, subtree: true};
const observer = new MutationObserver(checkPause);
document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'complete') {
        observer.observe(webPage, config);
    }
});
