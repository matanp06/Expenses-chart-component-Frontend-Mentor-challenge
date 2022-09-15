import React, { useEffect, useState } from "react";
import data from "../data.json";
import Chart from "./Chart";



// getting the amount of money spended from the 
// day that the expenses were the highest
let maxValue=0;
for(let i = 0; i<data.length;i++){
    const amount = data[i].amount;
    maxValue = amount>maxValue ? amount : maxValue;
}

// returns a graph with 7 charts represanting the spending in 
// each day of the last week
function Graph(){

    return<div className="Graph">
        {/* costume chart of expenses depanding on the day */}
        {data.map((detail,index) => {
            return <Chart key={index} index={index} day={detail.day} amount={detail.amount} />
        })}
    </div>
}

export default Graph;
export {maxValue};