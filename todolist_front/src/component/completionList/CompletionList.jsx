import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router'; 
import './CompletionList_style.scss';




function CompletionList(props){

    console.log("완료 할일 오픈");
    console.log(props.completionTodoList);


    let [tbodyList , setTbodyList] = useState([]);
    useEffect(()=>{
        setTbodyList(props.completionTodoList);
    },[])
    console.log(tbodyList);

    return(
        <div className="completionList_Div">
            <table className="completionList_Table">
                <thead>
                    <tr>
                        <th className="th_L">Content</th>
                        <th className="th_R">Done</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        tbodyList.map((compleList , i)=>{
                            <tr>
                                <td>{compleList.content}</td>
                                <td>{compleList.completionDate}</td>
                            </tr>
                        })
                         
                    }
                    {/* <tr>
                        <td>내용11111</td>
                        <td>2021/09/16</td>
                    </tr>
                    <tr>
                        <td>222</td>
                        <td>2021/09/16</td>
                    </tr>
                    <tr>
                        <td>내용3333</td>
                        <td>2021/09/16</td>
                    </tr>
                    <tr>
                        <td className="td_L">내용4444</td>
                        <td className="td_R">2021/09/16</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default CompletionList;