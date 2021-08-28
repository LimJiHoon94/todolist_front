/* eslint-disable */
import React from 'react';
import './login_style.scss';






function Login(){
    return(
        <div className="login_area">
           
            <div className="login_form">
                <div>
                    
                </div>
                <div className="id_area flex_div">
                    <p>ID</p>
                    <input />
                </div>
                <div className="pw_area flex_div">
                    <p>PW</p>
                    <input />
                </div>
                <div className="btn_area flex_div">
                    <button>로그인</button>
                    <button>회원가입</button>
                </div>
                <div className="sns_area flex_div">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>
    )
}

export default Login;

