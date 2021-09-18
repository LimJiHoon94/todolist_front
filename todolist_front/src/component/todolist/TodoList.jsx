/* eslit-disable */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './TodoList_style.scss';
import {useLocation} from 'react-router';
import TodoContent from '../todoContent/TodoContent';
import CompletionList from '../completionList/CompletionList';




function TodoList(props){

    let [todoList , setTodoList] = useState([]);
    let [addContent , setAddContent] = useState('');
    let [todoListLoad , setTodoListLoad] = useState('N');
    let [completionTodoListLoad , setCompletionTodoListLoad] = useState('N');
    let [completionTodoList , setCompletionTodoList] = useState([]);
    let today = new Date();   

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜

    


    const api = axios.create({
        baseURL : 'http://localhost:8080/api/todoList',
        headers : {
            'Content-Type' : 'application/json'
        }
    });

    //Menu 선택화면으로 돌아가기
    function goMenu(){
        setTodoListLoad('N');
        setCompletionTodoListLoad('N');
    }

    //완료한 TODO LIST
    function getCompletionList(){
        api.post('/getAllCompletionList' , null , {params :{
            userSeq : props.user.userSeq
        }}).then((res)=>{
            console.log(res);
            setCompletionTodoList(res.data);
        }).catch((error)=>{
            alert(error)
        });
        setCompletionTodoListLoad('Y');
    }


    //T_TODO_CONTENT 조회
    function getAllTodoList(){
        api.post('/getAllTodoContent' , null , {params : {
            userSeq : props.user.userSeq
         }}).then((res)=>{
             console.log(res);
             setTodoList(res.data);
         }).catch((error)=>{
             alert(error);
         }); 
         setTodoListLoad('Y');
    }

    //T_TODO_CONTENT 추가
    function addTodoList(e){
        if(e.key === 'Enter'){
            console.log("add");
            console.log(addContent);
            api.post('/AddTodoContent' , null , {params : {
                userSeq : props.user.userSeq,
                content : addContent
             }}).then((res)=>{
                console.log(res.data);
                setTodoList(res.data);
             }).catch((error)=>{
                 alert(error);
             }); 
            setAddContent('');
        }
    }

    //T_TODO_CONTENT 전체 삭제
    function TodoListDeleteAll(){
        console.log(props.user.userSeq);
        api.post('/DeleteTodoContentAll' , null , {params : {
            userSeq : props.user.userSeq
         }}).then((res)=>{
             setTodoList([]);
         }).catch((error)=>{
             alert(error);
         }); 
    }



    return(
        <div className="todoList_area">
            <div className="time_area">
                <div className="time">
                    <h2>{year}</h2>
                    <h2>{month}</h2>
                    <h2>{date}</h2>
                </div>
            </div>
            <div className="todoList">
                {
                    //TODO LIST 추가 input
                    todoListLoad === 'Y' 
                    ? (
                        <>
                        <div className="Todo_Add">
                            <input type="text" 
                                   className="Todo_Add_Input" 
                                   value={addContent} 
                                   onKeyPress={addTodoList} 
                                   onChange={(e)=>{setAddContent(e.target.value)}} />
                        </div>
                        <hr  className="add_Line"/>
                        </>
                    ) : null
                }
                
                
                <br />
                {
                    //TODO LIST 버튼
                    todoListLoad === 'N' && completionTodoListLoad === 'N'
                    ? (
                        <div className="Todo_Get_Div">
                            <button onClick={getAllTodoList} 
                                    className="getTodoBtn"
                            >TODO - LIST</button>
                        </div>
                    )  : null
                }
                {
                    //완료한 TODO LIST 버튼
                    completionTodoListLoad === 'N' && todoListLoad === 'N'
                    ?(
                        <>
                        <br />
                        <div className="Todo_Get_Div">
                            <button onClick={getCompletionList} 
                                    className="getTodoBtn"
                            >COMPLETION</button>
                        </div>
                        </>
                    ) : null
                }
                {
                    //TODO LIST 컨텐츠
                    todoListLoad === 'Y'
                    ? (
                        
                        todoList.map((todoList , i)=>{
                            return  <TodoContent todoList={todoList} key={i}  setTodoList={setTodoList} user={props.user}/>
                        })
                    ) : null
                }
                {
                    completionTodoListLoad === 'Y'
                    ?(
                        <CompletionList completionTodoList={completionTodoList}/>
                    ):null
                }
            </div>
            <div className="add_area">
                <div className="menu_area">
                    <button className="menuBtn" onClick={goMenu}><b>menu</b></button>
                </div>
                {
                    //전체삭제 버튼 
                    todoListLoad === 'Y' 
                    ?(
                        <div className="menu_area">
                            <button className="allDelete" onClick={TodoListDeleteAll}><b>All<br />remove</b></button>
                        </div>        
                    ) : null
                }
                
            </div>
        </div>
    )
}


export default TodoList;




