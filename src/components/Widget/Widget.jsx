import { App } from "components/App";
import React from "react";


export const Widget = ({ step=1 }) => { 

    const onClickGood = ({ }) => {
        console.log("good");
    }

    const onClickNeutral = ({ }) => {
        console.log("neutral");
    }

    const onClickBad = ({ }) => {
        console.log("bad");
    }


return (
    <>
        <div>    
        
            <button type="button" onClick={onClickGood}>Good {step}</button>
            <button type="button" onClick={(onClickNeutral)}>Neutral {step}</button>
            <button type="button" onClick={onClickBad}>Bad {step}</button>
        
            <div>
                <span>Good: </span><span>0</span>
                <span>Neutral: </span><span>0</span>
                <span>Bad: </span><span>0</span>
            </div>
        </div>
    </>
    );

};
