var simulateClick = function (elem) {
  var evt = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  var canceled = !elem.dispatchEvent(evt);
};

function loadVideo(element, videoId, width, height, autoplay = false, controls = false) {
  var container = element.parentElement;
  var autoplayParam = autoplay ? "1": "0";
  var muteParam = autoplay ? "1": "0";
  var controlsParam = controls ? "1": "0";
  container.innerHTML = '<iframe width="'+width+'" height="'+height+'" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src="https://www.youtube.com/embed/'+videoId+'?rel=0&amp;autoplay='+autoplayParam+'&amp;loop=0&amp;showinfo=0&amp;controls='+controlsParam+'&amp;mute='+muteParam+'&amp;enablejsapi=1&amp;widgetid=1"></iframe>';
}

// Starts main video automatically
// setTimeout(function () { simulateClick(document.querySelector('#linkMainVideo')); }, 500)