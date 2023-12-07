import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

export const MyVideo = ({ src, autoPlay, width, height, loop, muted, style, className, onPlay, playsInline }) => {

  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      //check if entry.target has the autoPlay attribute and if it is true
      if ( !entry?.target?.autoPlay ) {
        return
      }
      entry?.target?.style.display !== 'none' && entry?.target?.play();
    } else {
      entry?.target?.pause();
    }
  }, [inView]);

  return (
    <video 
      src={src}
      ref={ref}
      autoPlay={autoPlay}
      width={width}
      height={height}
      loop={loop}
      muted={muted}
      style={style}
      className={className}
      onPlay={onPlay}
      playsInline={playsInline || true }
    />
  )
}