var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay=false;
	video.loop=false;
	console.log ("the autoplay feature is set to " + video.autoplay)
	console.log ("the loop feature is set to " + video.loop)

});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("play video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("pause video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.90;
	console.log("the video speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.90;
	console.log("the video speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 < video.duration){
		video.currentTime += 10;
		console.log("the current time location is" + video.currentTime);
	}
	else {
		video.currentTime = 0;
		console.log("the video has restarted");
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "mute";
		console.log("unmuted");
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "unmute";
		console.log("muted");
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log(this.value);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("the volume is now " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {		
	video.classList.add("oldSchool");
	console.log("vintage mode ACTIVATED");
});

document.querySelector("#orig").addEventListener("click", function() {	
	video.classList.remove("oldSchool");
	console.log("normal mode ACTIVATED");
});