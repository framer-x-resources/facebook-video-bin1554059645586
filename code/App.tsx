import { Data, animate, Override, Animatable } from 'framer'

const data = Data({
  bgScale: Animatable(1),
  bgOpacity: Animatable(1),
  popVideoTop: Animatable(-500),
  videoPlayerWidth: Animatable(350),
})

export const BG1: Override = () => {
  return {
    scale: data.bgScale,
    opacity: data.bgOpacity,
  }
}

var videoOrigin

export const PopVideo1: Override = () => {
  return {
    top: data.popVideoTop,
    async onTap() {
      animate.ease(data.videoPlayerWidth, 350)
      await animate.ease(data.popVideoTop, videoOrigin).finished
      data.popVideoTop.set(-500)

      animate.ease(data.bgScale, 1, {
        duration: 0.4,
      })
      animate.ease(data.bgOpacity, 1, {
        duration: 0.4,
      })
    },
  }
}
export const VideoPlayer: Override = () => {
  return {
    width: data.videoPlayerWidth,
  }
}

export const Video1: Override = () => {
  return {
    onTap(event) {
      animate.ease(data.bgScale, 0.9, {
        duration: 0.4,
      })
      animate.ease(data.bgOpacity, 0, {
        duration: 0.4,
      })

      // Popvideo move
      console.log('event', event)
      videoOrigin = event.devicePoint.y - event.point.y

      data.popVideoTop.set(videoOrigin)
      animate.ease(data.popVideoTop, 308)
      animate.ease(data.videoPlayerWidth, 375)
    },
  }
}
