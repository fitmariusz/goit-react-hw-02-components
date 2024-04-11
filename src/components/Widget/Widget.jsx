import { App } from "components/App";
import React from "react";


export const Widget = ({ step=1 }) => { 

return (
    <>
        <div>    
        
            <button type="button">Good {step}</button>
            <button type="button">Neutral {step}</button>
            <button type="button">Bad {step}</button>
        
            <div>
                <span>Good: </span><span>0</span>
                <span>Neutral: </span><span>0</span>
                <span>Bad: </span><span>0</span>
            </div>
        </div>
    </>
    );

};
