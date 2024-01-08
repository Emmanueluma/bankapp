import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import './index.css'
import Logo from './asset/Logo.png'
import {useNavigate} from "react-router-dom"


const Login = ({info}) => {
    const navigator = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const correctCredentials = {
        email: 'toddnieslen30@gmail.com',
        password: '@Passwordfx30'
      };

    const handleForm = (e) => {
            setFormData(prev => {
                return(
                    {
                        ...prev, [e.target.name]: e.target.value
                    
                    }
                )
            }
        )
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(
            formData.email === correctCredentials.email &&
            formData.password === correctCredentials.password 
        ){
            navigator('/dashboard-USR7892XZ');
        }else{
            console.log('incorrect detail')
            setFormData({
                email: "",
                password: ""
            })
            alert('incorrect passwrord')
        }
    }
    return (
        <section className="login">
            <div className="login--container">
                <div className="item one">
                    <div className="logoimg">
                        <img src={Logo} alt="" />
                    </div>
                    <h1>welcome back</h1>
                    <p>sign to continue</p>
                </div>
                <form className="item two">
                    <div className="input--field">
                        <FaUser  className="icons" />
                        <input type="text" placeholder="email" required name="email" value={formData.email} onChange={handleForm} />
                    </div>
                    <div className="input--field">
                        <RiLockPasswordFill className="icons" />
                        <input type="password" placeholder="password" required name="password" value={formData.password} onChange={handleForm}/>
                    </div>
                    <div className="input--field forget">
                        <p>forget Password?</p>
                    </div>
                    <button onClick={handleSubmit} className="btn">submit</button>
                    <p>don't have account? contact the board</p>
                </form>
            </div>
        </section>
    )
}

export default Login
