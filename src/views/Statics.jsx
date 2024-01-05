import React from 'react'
import thread from '../asset/Vector 7.png'
import rectangle from '../asset/Rectangle 86.png'
import cir from '../asset/arrow.png'
import cyc from '../asset/Ellipse 41.png'
import chat from '../asset/Union.png'


const Statics = () => {
    return (
        <div className="statistic">
          <div className='stat'>
          <div className="header">
            <h3>statistic</h3>
            <p>spending</p>
          </div>
          <div className="sta">
            <img className='thread' src={thread} alt="" />
            <article className='rec'>
              <div>
                <img className='rect' src={rectangle} alt="" />
                <div className='arr'>
                  <article className=''>
                    <img src={chat} alt="" />
                    <p>$ 6,870</p>
                  </ article>
                  <img className='' src={cir} alt="" />
                  <img className='' src={cir} alt="" />
                  <img className='' src={cir} alt="" />
                  <img className='' src={cir} alt="" />
                  <img className='' src={cyc} alt="" />
                  <img className='' src={cir} alt="" />
                  <img className='' src={cir} alt="" />
                </div>
              </div>
            </article>
            <div className='grid'>
            <p>sep</p>
            <p>oct</p>
            <p>nov</p>
            <p>dec</p>
            <p>jan</p>
            <p>feb</p>
            </div>
          </div>
          <div className="space"></div>
        </div>
      </div>
    )
}

export default Statics
