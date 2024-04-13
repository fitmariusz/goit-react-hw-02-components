import { useState } from "react";
import css from "./Widget.module.css"

 

export const Widget = () => { 
    const [valueGood, setGoodValue] = useState(0);
    const [valueNeutral, setNeutralValue] = useState(0);
    const [valueBad, setBadValue] = useState(0);

    const onClickGood = () => {
        setGoodValue(prevValue => prevValue += 1)
        console.log("good" );
    }

    const onClickNeutral = () => {
        setNeutralValue(prevValue => prevValue += 1)
        console.log("neutral");
    }

    const onClickBad = () => {
        setBadValue(prevValue => prevValue += 1)
        console.log("bad");
    }


return (
    <>
        <div>
            <h2>Please leave feedback</h2>
            <div className={css.feedback}> 
                <button type="button" className={css.buttonFeedback} onClick={onClickGood}>Good</button>
                <button type="button" className={css.buttonFeedback} onClick={(onClickNeutral)}>Neutral</button>
                <button type="button" className={css.buttonFeedback} onClick={onClickBad}>Bad</button>
            </div>
            <h2>Statistics</h2>
            <div className={css.statistic}>
                <li className={css.liStatistic}>Good: <span>{valueGood}</span></li>
                <li className={css.liStatistic}>Neutral: <span>{valueNeutral}</span></li>
                <li className={css.liStatistic}>Bad: <span>{valueBad}</span></li>
            </div>
        </div>
    </>
    );

};
