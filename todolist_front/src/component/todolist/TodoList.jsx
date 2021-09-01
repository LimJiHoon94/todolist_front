/* eslit-disable */
import React, { useState } from 'react';
import './TodoList_style.scss'





function TodoList(){
    return(
        <div className="todoList_area">
            <div className="time_area">
                <div className="time">
                    <h2>2021</h2>
                    <h2>08</h2>
                    <h2>31</h2>
                </div>
            </div>
            <div className="todoList">

            </div>
            <div className="add_area">
                <div className="comment">
                    <p>설명 동해물과 백두상이 마르고 닳도록</p>
                    <p>설명 동해물과 백두상이 마르고 닳도록</p>
                    <p>설명 동해물과 백두상이 마르고 닳도록</p>
                </div>
            </div>
        </div>
    )
}




export default TodoList;


