var videoEl = $('video')[0],
 playPauseBtn = $('#playPause'),
 vidControls = $('#controls'),
 muteBtn = $('#muteUnmute'),
 timeHolder = $('#timer');



videoEl.removeAttribute("controls");

videoEl.addEventListener('canplaythrough', function () {
    vidControls.removeClass("hidden");
   }, false);


   playPauseBtn.bind('click', function () {
    if (videoEl.paused) {
    videoEl.play();
    } else {
    videoEl.pause();
    }
   });
      
videoEl.addEventListener('play', function () {
    playPauseBtn.addClass("playing");
   }, false);
   videoEl.addEventListener('pause', function () {
    playPauseBtn.removeClass("playing");
   }, false);

   
muteBtn.bind('click', function () {
    if (videoEl.muted) {
    videoEl.muted = false;
    } else {
    videoEl.muted = true;
    }
   });
      

videoEl.addEventListener('volumechange', function () {
    if (videoEl.muted) {
    muteBtn.addClass("muted");
    } else {
    muteBtn.removeClass("muted");
    }
   }, false);
      

videoEl.addEventListener('ended', function () {
    videoEl.currentTime = 0;
    videoEl.pause();
   }, false);

videoEl.addEventListener('timeupdate', function () {
    timeHolder[0].innerHTML = secondsToTime(videoEl.currentTime);
   }, false);

var h = Math.floor(s / (60 * 60)),
   dm = s % (60 * 60),
   m = Math.floor(dm / 60),
   ds = dm % 60,
   secs = Math.ceil(ds);

if (secs === 60) {
    secs = 0;
    m = m + 1;
   }
   if (secs < 10) {
    secs = "0" + secs;
   }
   
   if (m === 60) {
    m = 0;
    h = h + 1;
   }
   if (m < 10) {
    m = "0" + m;
   }

   if (h === 0) {
    fulltime = m + ":" + secs;
   } else {
    fulltime = h + ":" + m + ":" + secs;
   }
  
