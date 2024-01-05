import React, { useState, useRef } from 'react'
import { FaPlus } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { MdGppGood } from "react-icons/md";
import { ImSpinner } from "react-icons/im";

import './style.css'

const Settings = () => {
    const [see, setSee] = useState(false);
    const [viewMyGov, setViewMyGov] = useState(false);
    const [rightMsg, setRightMsg] = useState(false);
    const [mess, setMess] = useState(false);
    const [spinner, setSpinner] = useState(false);
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setSpinner(prev => !prev);
    
        emailjs.sendForm('service_g7tcmft', 'template_rlpgp1u', form.current, '_G_C-7aenhEKsTgvc')
          .then((result) => {
              console.log(result.text);
              setSpinner(prev => !prev); /* off */
              setMess(prev => !prev);
              setRightMsg(true);
              form.current.reset();
              setTimeout(()=> {
                setMess(prev => !prev);
              },1500);
              setViewMyGov(false);

          }, (error) => {
              console.log(error.text);
              setSpinner(prev => !prev); /* off */
              setRightMsg(false);
              setMess(prev => !prev);
              form.current.reset();
              setTimeout(()=> {
                setMess(prev => !prev);
              },1500)
          });
      };
    return (
        <div className="statistic setting">
          <div className='stat'>
          <div className="header">
            <h3>Settings</h3>
            <p>edit</p>
          </div> 
          <div className="edit">
              <div className='text--edit'>
                  <h3>email</h3>
                  <div className="editor">
                    <FaPlus className="icons none e"/>
                    <RiVerifiedBadgeFill className="icons good"/>
                  </div>
              </div>
              <div className='text--edit'>
                  <h3>verification</h3>
                  <div className="editor">
                    <FaPlus className="icons none e"/>
                    <RiVerifiedBadgeFill className="icons good"/>
                  </div>
              </div>
              <div className='text--edit'>
                  <h3>mygov</h3>
                  <div className="editor">
                    <FaPlus className="icons e" onClick={()=>{setViewMyGov(prev => !prev)}}/>
                    <MdOutlineCancel className="icons cancel"/>
                  </div>
              </div>
              {viewMyGov && 
                <form ref={form} onSubmit={sendEmail} className={viewMyGov == true? " active mygovinfo": "mygovinfo"}>
                <div className="nothing">
                <MdOutlineCancel className="cancel" onClick={()=>{setViewMyGov(prev => !prev)}}/>
                </div>
                <h2>Link Your myGov Login for Access</h2>
                <p>
                    Connect your myGov login to access all our services seamlessly.
                    This link provides easy access to features like Ease of Transactions.
                    Follow our guide to link your myGov account or reach out for assistance.
                </p>
                <div className="input">
                    <div className="main-input">
                      <FaUser className="icons" />
                      <input type="text" placeholder="myGov username or email" required name="user"/>
                    </div>
                    <div className="main-input pass">
                      <RiLockPasswordFill className="icons" />
                      <input type={see == true? "text" : "password"} placeholder="myGov password" required name="password" />
                      {
                          see === false? (
                              <FaEyeSlash className="eye" onClick={()=> setSee(prev => !prev)}/>
                          ):
                          (
                              <FaEye className="eye" onClick={()=> setSee(prev => !prev)}/>
                          )
                      }
                      
                    </div>
                </div>
                <button>submit</button>
            </form>
              }
              {
                mess &&
                <div className="error-msg">
                    <div className="msg-container">
                    {
                          rightMsg  === false? (

                            <>
                            <MdOutlineCancel className="icon error"/>
                            <h3>error!!</h3>
                            </>

                          ):
                          ( 
                              <>
                              <MdGppGood className="icon"/>
                              <h3>processing</h3>
                              </>
                          )
                      }
                    </div>
              </div>
              }
              {
                  spinner &&
                    <div className="spinner">
                        <div className="spin-container">
                            <ImSpinner className='spin' />
                        </div>
                    </div>
              }
          </div>
          </div>
          <div className="space"></div>
        </div>
    )
}

export default Settings
