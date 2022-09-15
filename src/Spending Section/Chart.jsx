import React, { useEffect, useState } from "react";
import {maxValue} from "./Graph"

function Chart(props){

    const [showDetails, setShowDetails] = useState(false);
    const [amountPLeftShift, setAmountPLeftShift]= useState("0px");

    // caluclating the height of the chart according to the 
    // amount spent on the day as a precentage from the max spent 
    // all the week
    const amount = 100*(props.amount/maxValue);

    // calcualting the left shift for the daily amount details 
    // in order to center it over it's chart
    useEffect(()=>{
        // getting the chart's div width and the p element's width
        const chartDiv = document.querySelector(".Chart");
        const chartWidht = Number.parseFloat(window.getComputedStyle(chartDiv).width);
        const amountPElement = document.querySelectorAll(".amount")[props.index];
        const amountWidth = Number.parseFloat(window.getComputedStyle(amountPElement).width)+10;
        // calculating the shift
        setAmountPLeftShift((chartWidht - amountWidth)/2);
    },[]);

    return <div className="Chart">

        {/* The amount spent in the day, showed only when the div is pressed*/}
        <p 
            className="amount" 
            style={
                {
                    visibility: !showDetails ? "hidden" : "visible",
                    left: amountPLeftShift+"px",
                    opacity:1
                    }
            }>${props.amount}</p>

        {/* the chart element */}
        <div 
            // toggling the amount's detail visabiliy on click
            onMouseDown={()=>{setShowDetails(showed=>!showed)}} 
            className={(amount===100 ? "highest":"")+" "+(showDetails ? "showDetails" : "")} 

            // applying the custom height
            style={{height:amount+"px"}}>
        </div>

        {/* the day name */}
        <p>{props.day}</p>    
    </div>

}

export default Chart;