/* eslint-disable */
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './login_style.scss';






function Login(){

    let history = useHistory();

    const api = axios.create({
        baseURL : 'http://localhost:8080/api/user',
        headers : {
            'Content-Type' : 'application/json'
        }
    });

    let [id , setId] = useState('');
    let [pw , setPw] = useState('');

    function loginRun(){

        if(id === ""){
            alert("아이디가 입력되지 않았습니다.");
            return;
        }else if(pw === ""){
            alert("비밀번호가 입력되지 않았습니다.");
            return;
        }

        console.log('id : ' + id);
        console.log('pw : ' + pw);

        api.post('/loginRun' , null , {params : {
            id : id,
            pw : pw
        }}).then((res) => {
            console.log(res)
            console.log(res.data);
            if(res.data === 1){
                alert("로그인 성공");
                
            }else{
                alert("로그인에 실패하였습니다.");
            }
        }).catch((error)=>{
            console.log(error)
        })

    }

    return(
        <div className="login_area">
            <div className="login_form">
                <div className="login_logo flex_div">
                    <p>LOGIN</p>
                </div>
                <div className="id_area flex_div">
                    <p>ID</p>
                    <input type="text" onChange={(e)=>{setId(e.target.value)}} />
                </div>
                <div className="pw_area flex_div">
                    <p>PW</p>
                    <input type="password" onChange={(e)=>{setPw(e.target.value)}}/>
                </div>
                <div className="btn_area flex_div">
                    <button className="btn login_btn" onClick={loginRun} >로그인</button>
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

