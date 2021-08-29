/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login_style.scss';






function Login(){






    return(
        <div className="login_area">
            <div className="login_form">
                <div className="login_logo flex_div">
                    <p>LOGIN</p>
                </div>
                <div className="id_area flex_div">
                    <p>ID</p>
                    <input type="text" />
                </div>
                <div className="pw_area flex_div">
                    <p>PW</p>
                    <input type="password" />
                </div>
                <div className="btn_area flex_div">
                    <button className="btn login_btn">로그인</button>
                    <Link to="/membership">
                        <button className="btn pw_btn">회원가입</button>
                    </Link>
                    
                </div>
               {/*  <div className="sns_area flex_div">
                    <button></button>
                    <button></button>
                    <button></button>
                </div> */}
               {/*  <div>

                </div> */}
            </div>
        </div>
    )
}

export default Login;

