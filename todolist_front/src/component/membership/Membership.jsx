import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Membership.scss';


function Membership(){

    
    let [createId , setCreateId] = useState('');
    let [createName , setCreateName] = useState('');
    let [createPw , setCreatePw] = useState('');
    let [createPwChk , setCreatePwChk] = useState('');
    let [createEmail , setCreateEmail] = useState('');
    let [createEmailCom , setCreateEmailCom] = useState('');

    function membershipJoin(){
        console.log("createId : " + createId);
        console.log("createName : " + createName);
        console.log("createPw : " + createPw);
        console.log("createPwChk : " + createPwChk);
        console.log("createEmail : " + createEmail);
        console.log("createEmailCom : " + createEmailCom);
        //비밀번호 확인 체크
        if(!(createPw === createPwChk)){
            alert("비밀번호를 확인해 주시기 바랍니다.");
        }
        //이메일 통합
        let e_mail = createEmail+"@"+createEmailCom;
        console.log("e_Mail : " + e_mail);

        

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