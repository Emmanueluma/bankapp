import React from 'react'
import './style.css'

const Profile = () => {
    return (
        <div className="statistic profile">
          <div className='stat'>
          <div className="header">
            <h3>profile</h3>
            <p>me</p>
          </div> 
          <div className="profile">
              <div className="person">
                <h2 className="name">personal infomation</h2>
                <div className="item">
                    <h3>Name:</h3>
                    <p>todd nieslen</p>
                </div>
                <div className="item">
                    <h3>username:</h3>
                    <p className="lower">todd_nieslen</p>
                </div>
                
                <div className="item">
                    <h3>D.O.B:</h3>
                    <p>22 . aug . 1980</p>
                </div>
                <div className="item">
                    <h3>bio:</h3>
                    <p>at your service </p>
                </div>
                </div>
              <div className="person">
                <h2 className="name">private infomation</h2>
                <div className="item">
                    <h3>email:</h3>
                    <p className="lower">toddnielsen30@gmail.com</p>
                </div>
                <div className="item">
                    <h3>phone:</h3>
                    <p className="lower">(+1) 52******15</p>
                </div>
                <div className="item">
                    <h3>gender:</h3>
                    <p>male</p>
                </div>
                </div>
              
          <div className="space"></div>
          </div>
          </div>
        </div>
    )
}

export default Profile
