import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Membership.scss';
import axios from 'axios';


function Membership(){
    let history = useHistory();

    const api = axios.create({
        baseURL : 'http://localhost:8080/api/user',
        headers : {
            'Content-Type' : 'application/json'
        }
    });
    const Config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }



    let [createId , setCreateId] = useState('');
    let [createName , setCreateName] = useState('');
    let [createPw , setCreatePw] = useState('');
    let [createPwChk , setCreatePwChk] = useState('');
    let [createEmail , setCreateEmail] = useState('');
    let [createEmailCom , setCreateEmailCom] = useState('');

    function membershipJoin(){
        //빈값 체크
        if(createId === ""){
            alert("아이디를 입력해 주시기 바랍니다.");
            return;
        }else if(createName === ""){
            alert("이름을 입력해 주시기 바랍니다.");
            return;
        }else if(createEmail === ""){
            alert("이메일을 입력해 주시기 바랍니다.");
            return;
        }else if(createEmailCom === ""){
            alert("이메일을 입력해 주시기 바랍니다.");
            return;
        }else if(createPw === ""){
            alert("비밀번호를 입력해 주시기 바랍니다.");
            return;
        }
        //비밀번호 확인 체크
        if(!(createPw === createPwChk)){
            alert("비밀번호를 확인해 주시기 바랍니다.");
            return;
        }
        //이메일 통합
        let e_mail = createEmail+"@"+createEmailCom;

        api.post('/membershipJoin', null ,{params :{
            id : createId,
            pw : createPw,
            userName : createName,
            eMail : e_mail
        }}).then((res)=>{
            console.log(res.data);
            if(res.data === 0){
                alert("회원정보가 성공적으로 생성되었습니다.");
                //메인페이지로 이동 
                history.push('/');
            }else if(res.data === 1){
                alert("아이디가 중복되었습니다.");
            }

        }).catch(function(error){
            console.log(error);
        });
    }


//onChange={(e)=>{setNewTitle(e.target.value)}}
    return(
        <div className="membership_area">
            <div className="membership_form">
                <div className="membership_title">
                    <p>회 원 가 입</p>
                </div>
                <div className="member_area">
                    <p>ID</p>
                    <input type="text" onChange={(e)=>{setCreateId(e.target.value)}} />
                    <p>이름</p>
                    <input type="text" onChange={(e)=>{setCreateName(e.target.value)}} />
                </div>
                <div className="member_area">
                    <p>PW</p>
                    <input type="password" onChange={(e)=>{setCreatePw(e.target.value)}} />
                    <p>PW 확인</p>
                    <input type="password" onChange={(e)=>{setCreatePwChk(e.target.value)}} />
                </div>
                <div className="member_area">
                    <p>이메일</p>
                    <input type="text" onChange={(e)=>{setCreateEmail(e.target.value)}}/>
                    <p>@</p>
                    <input type="text" onChange={(e)=>{setCreateEmailCom(e.target.value)}} />
                </div>
                <div className="member_btn_area">
                    <button className="member_btn" onClick={membershipJoin}>회원가입</button>
                    <Link to="/">
                        <button className="member_btn">뒤로가기</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}




export default Membership;