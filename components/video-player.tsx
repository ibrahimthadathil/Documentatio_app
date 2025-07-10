// "use client"

// import { useState, useRef } from "react"
// import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Slider } from "@/components/ui/slider"

// interface VideoPlayerProps {
//   title: string
//   description?: string
//   thumbnail?: string
// }

// export function VideoPlayer({ title, description, thumbnail }: VideoPlayerProps) {
//   const [isPlaying, setIsPlaying] = useState(false)
//   const [isMuted, setIsMuted] = useState(false)
//   const [progress, setProgress] = useState(0)
//   const [volume, setVolume] = useState(50)
//   const videoRef = useRef<HTMLVideoElement>(null)

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause()
//       } else {
//         videoRef.current.play()
//       }
//       setIsPlaying(!isPlaying)
//     }
//   }

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted
//       setIsMuted(!isMuted)
//     }
//   }

//   const handleProgressChange = (value: number[]) => {
//     const newProgress = value[0]
//     setProgress(newProgress)
//     if (videoRef.current) {
//       videoRef.current.currentTime = (newProgress / 100) * videoRef.current.duration
//     }
//   }

//   const handleVolumeChange = (value: number[]) => {
//     const newVolume = value[0]
//     setVolume(newVolume)
//     if (videoRef.current) {
//       videoRef.current.volume = newVolume / 100
//     }
//   }

//   const toggleFullscreen = () => {
//     if (videoRef.current) {
//       if (document.fullscreenElement) {
//         document.exitFullscreen()
//       } else {
//         videoRef.current.requestFullscreen()
//       }
//     }
//   }

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       <div className="relative group overflow-hidden rounded-lg bg-black shadow-2xl">
//         {/* Video Element */}
//         <video
//           ref={videoRef}
//           className="w-full aspect-video"
//           poster={thumbnail || "/placeholder.svg?height=400&width=800"}
//           onTimeUpdate={() => {
//             if (videoRef.current) {
//               const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
//               setProgress(progress || 0)
//             }
//           }}
//           onEnded={() => setIsPlaying(false)}
//         >
//           <source
//             src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>

//         {/* Play Button Overlay */}
//         {!isPlaying && (
//           <div className="absolute inset-0 flex items-center justify-center bg-black/20">
//             <Button
//               size="icon"
//               className="h-16 w-16 rounded-full bg-white/90 hover:bg-white text-black hover:text-black"
//               onClick={togglePlay}
//             >
//               <Play className="h-8 w-8 ml-1" />
//             </Button>
//           </div>
//         )}

//         {/* Controls */}
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
//           {/* Progress Bar */}
//           <div className="mb-4">
//             <Slider
//               value={[progress]}
//               onValueChange={handleProgressChange}
//               max={100}
//               step={1}
//               className="w-full [&>span:first-child]:h-1 [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-white [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-white"
//             />
//           </div>

//           {/* Control Buttons */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={togglePlay}>
//                 {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
//               </Button>

//               <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleMute}>
//                 {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
//               </Button>

//               <div className="w-24">
//                 <Slider
//                   value={[volume]}
//                   onValueChange={handleVolumeChange}
//                   max={100}
//                   step={1}
//                   className="[&>span:first-child]:h-1 [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-white [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-white"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center space-x-2">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-white hover:bg-white/20"
//                 onClick={() => {
//                   if (videoRef.current) {
//                     videoRef.current.currentTime = 0
//                     setProgress(0)
//                   }
//                 }}
//               >
//                 <RotateCcw className="h-5 w-5" />
//               </Button>

//               <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleFullscreen}>
//                 <Maximize className="h-5 w-5" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Video Info */}
//       <div className="mt-4 space-y-2">
//         <h3 className="text-xl font-semibold">{title}</h3>
//         {description && <p className="text-muted-foreground">{description}</p>}
//       </div>
//     </div>
//   )
// }

"use client";

import { useRef } from "react";
import { Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoPlayerProps {
  title: string;
  description?: string;
  thumbnail?: string;
}

export function VideoPlayer({ title, description }: VideoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleFullscreen = () => {
    if (iframeRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        iframeRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Video Wrapper */}
      <div className="relative group overflow-hidden rounded-lg bg-black shadow-2xl">
        {/* Iframe Video */}
        <div
          style={{
            height: "350px", // visible area height
            overflow: "hidden", // crop outside
            position: "relative",
          }}
          className="rounded-lg shadow-lg"
        >
          <iframe
            src="https://scribehow.com/embed/Windows_Service_Installation_via_Installer__5Z614v8bTTq2MXU__j-T6A?as=video"
            width="100%"
            height="400" // full height including branding/footer
            allowFullScreen
            style={{
              border: 0,
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>

        {/* Fullscreen Control */}
        <div className="absolute bg-indigo-800 bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={toggleFullscreen}
          >
            <Maximize className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Video Info */}
      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
    </div>
  );
}
