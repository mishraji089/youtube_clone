import React from 'react'; 
import './Recommended.css';
import './VideoCard.css'
import VideoCard from './VideoCard';
function Recommended() {
  return (
    <div className="recommend">
        <h2>Recommended</h2>
        <div className="recommendedVideos">
          <VideoCard 
          Title="How Canada Became Anti-India and Pro-Khalistan! "
          Veiws="33K"
          Timestamp="2 hours ago"
          ChannelImage="https://yt3.googleusercontent.com/ytc/AOPolaRAhsxQCTDb4oJ7L4etPJMIs_mnllxOFoDMoieFCw=s176-c-k-c0x00ffffff-no-rj"
          Channel="Sham Sharma Show"
          Image="https://i.ytimg.com/vi/vSvqawfklyQ/maxresdefault.jpg?v=64ae329c"
          />
          <VideoCard/>
          <VideoCard/>
          
        </div>

    </div>
  )
}

export default Recommended



// // How Canada Became Anti-India and Pro-Khalistan ￼
// The Sham Sharma Show
// 33K views
// 2 hours ago