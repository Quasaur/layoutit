// Script to build History of the World SIMILE Timeline


var d = Timeline.DateTime.parseGregorianDateTime("-1000");

var theme = Timeline.ClassicTheme.create(); // create the theme
theme.event.bubble.width = 360;
theme.event.bubble.height = 300;


var tl;
function onLoad() {
  var eventSource = new Timeline.DefaultEventSource(0);
  var bandInfos = [
    Timeline.createBandInfo({
	 eventSource: eventSource,
      width: "80%",
      intervalUnit: Timeline.DateTime.DECADE,
      intervalPixels: 200,
      theme: theme
    }),
    Timeline.createBandInfo({
	 eventSource: eventSource,
      overview: true,
      width: "10%",
      intervalUnit: Timeline.DateTime.CENTURY,
      intervalPixels: 100,
      theme: theme
    }),
    Timeline.createBandInfo({
	 eventSource: eventSource,
      overview: true,
      trackHeight: 0.5,
      trackGap: 0.2,
      width: "10%",
      intervalUnit: Timeline.DateTime.MILLENNIUM,
      intervalPixels: 50,
      theme: theme
    })
  ];
  //synchronize the 2 bands
  bandInfos[1].syncWith = 0;
  bandInfos[1].highlight = true;
  bandInfos[2].syncWith = 0;
  bandInfos[2].highlight = true;

  // draw the timeline
  tl = Timeline.create(document.getElementById("tl"), bandInfos, Timeline.HORIZONTAL);
  // stop browser caching of data during testing...
  tl.loadJSON("_oldjs/live.js?"+ (new Date().getTime()), function(json, url) {eventSource.loadJSON(json, url);});
  
  setupFilterHighlightControls(document.getElementById("controls"), tl, [0,1], theme);
}

var resizeTimerID = null;

function onResize() {
  if (resizeTimerID == null) {
    resizeTimerID = window.setTimeout(function() {resizeTimerID = null;tl.layout();}, 500);
  }
}


function centerTimeline(year) {
        tl.getBand(0).setCenterVisibleDate(new Date(year, 0, 1));
}
