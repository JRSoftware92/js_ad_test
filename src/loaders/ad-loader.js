var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var adId = document.currentScript.getAttribute('adId');
googletag.cmd.push(() => {
    if (adId) {
        googletag.display(adId);
    }
});
