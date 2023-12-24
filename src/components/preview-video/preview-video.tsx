import { useEffect, useRef, useState } from 'react';
import { PreviewVideoProps } from './preview-video.prop';

function PreviewVideo({ film, isPlaying }: PreviewVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const video = videoRef.current;

    if (video === null) {
      return;
    }

    video.addEventListener('loadeddata', handleLoadedData);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
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
      poster={film.previewImage}
      ref={videoRef}
      width="280"
      height="175"
      muted
      data-testid='preview-player'
    >
      <source src={film.previewVideoLink} />
    </video>
  );
}

export default PreviewVideo;
