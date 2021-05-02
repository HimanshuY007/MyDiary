import React from 'react'
import './Stylesheets/headerstyle.css'


export const Header = ({weeks, data}) => {
    var count=0;
    return (
        <>
        <div className = "header">
            <div className="arrow"><span className="material-icons">west</span></div>
            <div className="title"><span className="My">My </span>Diary</div>
            <div className="month"> {data} </div>
        </div>
        <div className="weeks">
        {weeks.map((week)=>{
        count++;
        return(<div key={count}>{week}</div>
        )})}
        </div>

        </>
    )
}


