import { useEffect, useRef, useState } from 'react';
import { PreviewVideoProps } from './preview-video.prop';

function PreviewVideo({ linkVideo, linkPoster, isPlaying }: PreviewVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handlerLoadedData = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const video = videoRef.current;

    if (video === null) {
      return;
    }

    video.addEventListener('loadeddata', handlerLoadedData);

    return () => {
      video.removeEventListener('loadeddata', handlerLoadedData);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (video === null || !isLoaded) {
      return;
    }

    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }, [isLoaded, isPlaying]);

  return (
    <video
      poster={linkPoster}
      ref={videoRef}
      width="280"
      height="175"
      muted
    >
      <source src={linkVideo} />
    </video>
  );
}

export default PreviewVideo;
