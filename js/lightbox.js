//litebox
const videoContainers = []
videoContainers[0] = document.querySelector(".ros-smi")
videoContainers[1] = document.querySelector(".efir-smi")
videoContainers[2] = document.querySelector(".abd-smi")
videoContainers[3] = document.querySelector(".pyan-smi")
const videoWrap = document.querySelector(".litebox__video")
const videoOut = document.querySelector(".litebox__video-out")

videoContainers.forEach((videoBlock) => {
  console.log(videoBlock)
  videoBlock.addEventListener("click", (evt) => {
    evt.preventDefault()
    let liteboxClose = document.querySelector(".litebox__close")

    if (videoBlock.classList.contains("efir-smi")) {
      var youtube = document.querySelector(".efir_video").cloneNode()
    } else if (videoBlock.classList.contains("ros-smi")) {
      var youtube = document.querySelector(".ros_video").cloneNode()
    } else if (videoBlock.classList.contains("abd-smi")) {
      var youtube = document.querySelector(".abd_video").cloneNode()
    } else if (videoBlock.classList.contains("pyan-smi")) {
      var youtube = document.querySelector(".pyan_video").cloneNode()
    }

    videoWrap.appendChild(youtube)
    console.log(videoWrap)

    liteboxClose.style.display = "block"
    videoWrap.style.display = "block"
    videoOut.style.display = "block"

    function liteboxClear() {
      //закрываем окно и чистим блок
      liteboxClose.style.display = "none"
      videoWrap.style.display = "none"
      videoOut.style.display = "none"
      document.querySelector(".litebox__video .iframe-video").remove()
    }
    liteboxClose.addEventListener("click", (evt) => liteboxClear())
    videoOut.addEventListener("click", (evt) => liteboxClear())
  })
})
