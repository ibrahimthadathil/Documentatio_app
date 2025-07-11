
// "use client";

// import { useRef } from "react";
// import { Maximize } from "lucide-react";
// import { Button } from "@/components/ui/button";

// interface VideoPlayerProps {
//   title: string;
//   description?: string;
//   thumbnail?: string;
// }

// export function VideoPlayer({ title, description }: VideoPlayerProps) {
//   const iframeRef = useRef<HTMLIFrameElement>(null);

//   const toggleFullscreen = () => {
//     if (iframeRef.current) {
//       if (document.fullscreenElement) {
//         document.exitFullscreen();
//       } else {
//         iframeRef.current.requestFullscreen?.();
//       }
//     }
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       {/* Video Wrapper */}
//       <div
//   className="relative overflow-hidden w-full max-w-4xl h-[500px] rounded-lg bg-black"
// >
//     <div className="absolute top-2 left-2 z-10">
//     <Button
//       variant="ghost"
//       size="icon"
//       className="text-white bg-black rounded-full"
//       onClick={toggleFullscreen}
//     >
//       <Maximize className="h-5 w-5" />
//     </Button>
//   </div>
//   <iframe
//     src="https://scribehow.com/embed/Windows_Service_Installation_via_Installer__5Z614v8bTTq2MXU__j-T6A?as=video"
//     allow="fullscreen"
//     allowFullScreen
//     className="w-full h-[600px] -translate-y-10 border-0"
//     style={{ pointerEvents: "auto" }}
//   />
// </div>


//       {/* Video Info */}
//       <div className="mt-4 space-y-2">
//         <h3 className="text-xl font-semibold">{title}</h3>
//         {description && <p className="text-muted-foreground">{description}</p>}
//       </div>
//     </div>
//   );
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
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      wrapperRef.current?.requestFullscreen();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Video Wrapper */}
      <div
        ref={wrapperRef}
        className="relative overflow-hidden w-full md:h-[500px]  rounded-lg bg-black"
      >
        {/* Fullscreen Button */}
        <div className="absolute top-2 left-2 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="text-white bg-black rounded-full"
            onClick={toggleFullscreen}
          >
            <Maximize className="h-5 w-5" />
          </Button>
        </div>

        {/* Cropped Video */}
        <iframe
          src="https://scribehow.com/embed/Windows_Service_Installation_via_Installer__5Z614v8bTTq2MXU__j-T6A?as=video"
          allow="fullscreen"
          allowFullScreen
          className="w-full md:h-[600px] h-full -translate-y-10 border-0"
          style={{ pointerEvents: "auto" }}
        />
      </div>

      {/* Video Info */}
      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
    </div>
  );
}
