import React from 'react'
import './Home.css'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
function Home() {
  return (
    <div className='home'>
      <div className='home-left'>
        <div className='address'>
          <h2>Your Business</h2>
          <span>123 Main Street</span>
          <span>Boston, MA 02127</span>
        </div>
        <div className='items-list'>
          <div className='list'>
            <DashboardOutlinedIcon style={{ color: '#303030' }} />
            <span>Home</span>

          </div>
          <div className='list'>
            <LaptopChromebookOutlinedIcon style={{ color: '#303030' }} />
            <span>Posts</span>
          </div>
          <div className='list'>
            <AddBusinessOutlinedIcon style={{ color: '#303030' }} />
            <span>Info</span>
          </div>
          <div className='list'>
            <BarChartOutlinedIcon style={{ color: '#303030' }} />
            <span>Insight</span>
          </div>
          <div className='list'>
            <RateReviewOutlinedIcon style={{ color: '#303030' }} />
            <span>Reviews</span>
          </div>
          <div className='list'>
            <MessageOutlinedIcon style={{ color: '#303030' }} />
            <span>Messageing</span>
          </div>
          <div className='list'>
            <PhotoLibraryOutlinedIcon style={{ color: '#303030' }} />
            <span>Photos</span>
          </div>
          <div className='list'>
            <FormatListBulletedIcon style={{ color: '#303030' }} />
            <span>Services</span>
          </div>
          <div className='list'>
            <WebOutlinedIcon style={{ color: '#303030' }} />
            <span>Website</span>
          </div>
          <div className='list'>
            <PersonAddAltOutlinedIcon style={{ color: '#303030' }} />
            <span >User</span>
          </div>

        </div>
       </div>
      <div className='home-middle'>

      </div>
      <div className='home-right'>
        <div>
          <h3 className='heading'>Your business is live on Google</h3>
          <div className='location'>
            <GoogleIcon style={{ color: '#303030', }} className='Icon'/>
            <span>View on Search</span>

          </div>
          <div className='location'>
            <FmdGoodOutlinedIcon style={{ color: '#303030' }} />
            <span>View on Maps</span>
          </div>
          <div className='location' style={{ borderBottom:"1px solid #606060",paddingBottom:'15px'}}>
            <ShareOutlinedIcon style={{ color: '#303030' }} />
            <span>Share your Business Profile</span>
          </div>
          <div  className='help'>
            <span>Close this business on Google</span>
            <KeyboardArrowDownOutlinedIcon style={{ color: '#303030' }} />
          </div>
          <div  className='help'>
            <span>Google Assistant calls</span>
            <KeyboardArrowDownOutlinedIcon style={{ color: '#303030' }} />
          </div>
          <div className='text'>
            <p>Advanced information</p>
            <div className='information'>
              <span>Store code </span>
              <span>02171</span>
              <EditOutlinedIcon style={{ color: '#303030' }} />

            </div>
          </div>

        </div>
      </div>
 </div>
  )
}

export default Home