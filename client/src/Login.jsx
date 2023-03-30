import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { Navbar } from "@nextui-org/react";

function mainPage (){

    return (
        <div className='backGround'>
        <body  className="body">
        <div className="header">
        <nav className='back' >
        <h1 className='back'>Hello</h1>
        <ul className='back'>
            <li> <a href="#" target="_parent" >Home</a></li>
            <li> <a href="#" target="_parent" >About</a></li>
            <li> <a href="#" target="_parent" >Contact</a></li>
            <li> <a href="#" target="_parent" >Home</a></li>
        </ul >
          </nav>

            </div>

            <div className="main">
            <div className='image1' ></div>
            <div className='login'>
                 <input type="text" placeholder="Username" className="field" />
                    <input type="password" placeholder="Password" className="field" />
                    <button className="loginButton"><p className='itext' >Login</p></button>

            </div>

            </div>
            <div className="footer1">
            </div>
            </body>

            </div>
    );
}

export default mainPage;