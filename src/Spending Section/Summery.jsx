import React from "react";

function Summery(){

    return <div className="Summery">
        <p className="title">Total this month</p>
        <div className="currentMonth">
            <h2>$478.33</h2>
        </div>
        <div className="compare">
            <p className="precent">+2.4%</p>
            <p>from last month</p>
        </div>
    </div>

}

export default Summery;