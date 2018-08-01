// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  //Set the volume of the player
  player.setVolume(75);
  changeTitle();
}

function onPlayerStateChange(){
  changeTitle();
}

//Change the title of the video
function changeTitle() {
  /***
  The code below may be a little more difficult. I was not able to find
  the getVideoData() in the documentation page.
  Look at the load video functions for another way of the changing the video title
  ***/

  //Get the element in the HTML that will display the title of the video
  var titleElement = document.getElementById("video-title");
  // Get the data of the current video
  var data = player.getVideoData();
  // Get the title from the data
  var videoTitle = data.title;
  // Set the text inside of the the titleElement to be the video title
  titleElement.innerHTML = videoTitle;
}

//play function
function play(){
  player.playVideo();
}
//pause function
function pause(){
  player.pauseVideo();
}

//stop function
function stop(){
  player.stopVideo();
}


/* LOADING VIDEOS */
function loadVideo1(){
  player.loadVideoById('M7lc1UVf-VE', 0, "large"); //Loads in the new video
  player.seekTo(0, true); //Starts the video at the beginning

  /***
  Here is where you can put an alternative to changing the title.
  This only works when the video names are display on their corresponding button.
  Notice how it doesn't set the title at the very beginning, so
  they would need to add that work around that somehow
  ***/
  // var videoTitle = document.getElementById("video1").innerHTML
  // document.getElementById("video-title").innerHTML = videoTitle;
}
function loadVideo2() {
  player.loadVideoById("bHQqvYy5KYo", 0, "large");
  player.seekTo(0, true);

  /***
  Here is where you can put an alternative to changing the title.
  This only works when the video names are display on their corresponding button.
  Notice how it doesn't set the title at the very beginning, so
  they would need to add that work around that somehow
  ***/
  // var videoTitle = document.getElementById("video1").innerHTML
  // document.getElementById("video-title").innerHTML = videoTitle;
}
