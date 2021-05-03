import React, {useRef} from 'react'
import {Display} from './Display'
import moment from 'moment'
import Sky from '../img1.jpg'
import './Stylesheets/dates.css'

export const Dates = ({difference, scrolling}) => {
   var value = moment();
   var key1 =0, key2=0, key3=0,key4=0;
   var firstDayofYear = value.clone().startOf("year").startOf("month").startOf("week");
   var lastDayofYear = value.clone().endOf("year").endOf("month").endOf("week");
   var month = value.clone().startOf("year").startOf("month").subtract(1,"month");
   var day = firstDayofYear.clone().subtract(1, "days");
   var calendar = [];
   var randomarr =[5, 9, 12, 25, 32, 60, 78, 83, 90, 95, 103, 118, 126,143,145];
   
   while (day.isBefore(lastDayofYear, "days")){
       calendar.push(
           Array(7).fill(0).map(()=> day.add(1,"days").clone())
           )
   };
  const refscroll = useRef();
  const refDisplay = useRef();
  const refCard = useRef();
  function Expand(e){
    var imageindex =0;
    refDisplay.current.style.display = "block";
   var reference = Number(e.target.getAttribute("data-key"));
   for (let i = 0; i <15; i++) {
     if(reference === randomarr[i]){
      imageindex =i;
       break;
     }
   }
   var width = refCard.current.children[imageindex].clientWidth;
   refCard.current.scrollLeft = imageindex*(width+30)- 0.4*width;
  }
 return(
   <>
        <div className = "dates" ref = {refscroll} onScroll= {scrolling}>
        {
            calendar.map((week)=> {
                key1++;
                return (<div className = "weekly" key={key1}>
                {
                  week.map((date)=>{
                    key2++;
                    if(date.isSame(firstDayofYear)){
                      month.add(1,"month");
                      firstDayofYear = month.clone().add(1,"month").startOf("week");
                      return(
                        <div key ={key2}> {month.format("MMM")}<br/>{month.format("YYYY")}</div>
                      )
                    }
                      return(
                        <div>
                      <div key={key2}> {date.format("D")} </div>
                      {randomarr.map((integer)=>{
                        key3++;
                        if(key2===integer){
                          return( <section className="thumbnail"><img src={Sky} alt="sky" key={key3} onClick={Expand} data-key={key2}/></section> )
                        }
                        return( <div key={key3}></div> )
                      })}
                      </div>
                  )})
                }
            </div>)})
        }
        </div>
        <div className="containerimage" ref= {refDisplay}>
          <div className= "cancel"> <span className="material-icons" onClick={(e)=>e.target.parentElement.parentElement.style.display = "none"}>close</span></div>
          <div className="containsimages" ref={refCard}>
          {
          randomarr.map((a)=>{
            key4++;
            var tracker = value.clone().startOf("year").startOf("month").startOf("week").add((a-1), "days");
            return( <Display key={key4} tracker = {tracker}/> )
          })}
          </div>
        </div>
        </>
    )
}
