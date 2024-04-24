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

function changeVideo(sourceUrl, title) {
  const videoElement = document.getElementById("videoPlayer");
  const source = videoElement.getElementsByTagName("source")[0];
  source.src = sourceUrl;
  videoElement.load();
  videoElement.play();
  endScreen.style.display = "none";

  // 更新列表项的样式
  const playlistItems = document.querySelectorAll("#playlist li");
  playlistItems.forEach((item) => {
    item.classList.remove("text-white", "bg-blue-500", "shadow-xl"); // 移除所有活跃状态
    if (item.getAttribute("onclick").includes(sourceUrl)) {
      item.classList.add("text-white", "bg-blue-500", "shadow-xl"); // 添加活跃状态到当前视频
    }
  });
}
