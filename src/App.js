import React, {useState} from 'react';
import {Header} from './MyComponents/Header'; 
import {Dates} from './MyComponents/Dates';
import {Footer} from './MyComponents/Footer'
import moment from 'moment'  
import './MyComponents/Stylesheets/containerstyle.css'
function App(){
  const weeks = ['S','M','T','W','T','F','S'];
  var currentTime = moment();
  var firstyear = currentTime.clone().startOf("year").startOf("month").startOf("week");
  var startMonth = currentTime.clone().startOf('month').startOf('week');
  var month  = currentTime.clone().startOf("year").startOf("month");
  var comparator1 = firstyear.clone();
  var comparator2 = month.clone().add(1, "month").startOf("week");
  var difference = startMonth.diff(firstyear, "days")/7;

  var scrolls = [];
 const [Calendar, setCalendar] = useState("");

 

  for (let i = 0; i <12; i++) {
     var scrollLengthTop = (comparator1.diff(firstyear, "days")/7)*154.25-250;
     var scrollLengthBottom = (comparator2.diff(firstyear,"days")/7)*154.25-250;

     var comparator = {
      a:scrollLengthTop,
      b:scrollLengthBottom,
      c:month.format("MMM YYYY")
    }
    scrolls.push(comparator);
    month.add(1, "month");
    comparator1 = month.clone().startOf("week");
    comparator2 = month.clone().add(1, "month").startOf("week");
  }
 
  function scrolling(e){
    scrolls.forEach(object => {
      if (e.target.scrollTop>= object.a && e.target.scrollTop <= object.b) {
        setCalendar(object.c);
      }
    });
  }

  return (
    <div className= "container">
    <Header weeks={weeks} data = {Calendar}/>
    <Dates difference = {difference} scrolling = {scrolling} />
    <Footer/>
    </div>
  );
}

export default App;
