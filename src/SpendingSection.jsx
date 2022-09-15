import React from "react";
import Graph from "./Spending Section/Graph";
import Summery from "./Spending Section/Summery";

function SpendingSection(){

    return<div className="SpendingSection">
        <h3>Spending - Last 7 days</h3>
        <Graph />
        <hr />
        <Summery />
    </div>

}

export default SpendingSection;