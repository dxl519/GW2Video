const videoElement = document.getElementById("videoPlayer");
const endScreen = document.getElementById("endScreen");
const replayButton = document.getElementById("replayButton");

// 页面加载完成后隐藏重新播放按钮
window.addEventListener("load", function () {
  replayButton.style.display = "none";
  endScreen.style.display = "none";
});

videoElement.onended = function () {
  endScreen.style.display = "flex";
  replayButton.style.display = "block";
};

function playPause() {
  if (videoElement.paused) {
    videoElement.play();
    endScreen.style.display = "none";
  } else {
    videoElement.pause();
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    videoElement.requestFullscreen().catch((error) => {
      alert(`启用全屏模式失败: ${error.message} (${error.name})`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function replayVideo() {
  videoElement.play();
  endScreen.style.display = "none";
  replayButton.style.display = "none";
}

function changeVideo(sourceUrl) {
  const source = videoElement.getElementsByTagName("source")[0];
  source.src = sourceUrl;
  videoElement.load();
  videoElement.play();
  endScreen.style.display = "none";
  //   document.title = title;
}
