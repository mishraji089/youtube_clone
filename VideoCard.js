import { Avatar } from '@mui/material'
import React from 'react'

function VideoCard({Image,Title,Channel,Veiws,Timestamp,ChannelImage}) {

  return (
    <div className='videoCard'>
          <img className="videoCard_thumbnail "src={Image} alt="" />
          <div className="videoCard_info">
            <Avatar className='videoCard_avatar' alt={Channel} src={ChannelImage}
            />
            <div className="video_text">
                <h4>{Title}</h4>
                <p>{Channel}</p>
                <p>
                    {Veiws} . {Timestamp}
                    
                </p>
            </div>

          </div>
    </div>
  )
}

export default VideoCard