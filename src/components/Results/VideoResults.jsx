import React from 'react'
import ReactPlayer from'react-player';

const VideoResults = ({results}) => {
  return (
    <div className='flex flex-wrap justify-center'>
    {results?.map((video, i) => {
      if (
        !(
          video.additional_links?.[0].href.includes('channel') ||
          video.additional_links?.[0].href.includes('playlist')
        )
      ) {
        return (
          <div key={i} className='p-2'>
            <ReactPlayer
              url={video.additional_links?.[0].href}
              controls
              width='100%'
              height='100%'
            />
          </div>
        );
      }
    })}
  </div>
  )
}

export default VideoResults
