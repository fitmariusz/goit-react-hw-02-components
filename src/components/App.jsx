import './App.css'
// import { Widget } from "./Widget/Widget";
import { Statistic } from "./Statistics/statistics";
import css from "./Widget/Widget.module.css"
import { useState } from "react";


const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};


export const App = () => {
    const [data, setData] = useState({ ...INITIAL_STATE});
    const [isFeedback, setIsFeedback] = useState(false)

    const onClick = (evt) => {
        setData(prevValue => {
            if(isFeedback===false){setIsFeedback(true)}
            return { ...prevValue, [evt.target.id]: prevValue[evt.target.id]+1}
        })
    }

    const countTotalFeedback = () => {
        return data.good+ data.neutral+ data.bad;
    }
    
    const countPositiveFeedbackPercentage = () => {
        return data.good >0 ? Math.round(data.good/countTotalFeedback() * 100) : 0;
    }


  return (
    <div>
      {/* <Widget
        valueBad={valueBad}
        valueGood={valueGood}
        valueNeutral={valueNeutral}
        valuePositive={valuePositive}
        valueTotal={valueTotal}
        onClickBad={onClickBad}
        onClickGood={onClickGood}
        onClickNeutral={onClickNeutral}
        ></Widget> */}
        <div>
            <h2>Please leave feedback</h2>
            <div className={css.feedback}> 
                <button type="button" id="good" className={css.buttonFeedback} onClick={onClick}>Good</button>
                <button type="button" id="neutral" className={css.buttonFeedback} onClick={onClick}>Neutral</button>
                  <button type="button" id="bad" className={css.buttonFeedback} onClick={onClick}>Bad</button>
                  <p>{ isFeedback===true ? "yes" : "no"}</p>
            </div>
            <h2>Statistics</h2>
            <div className={css.statistic}>
                  <Statistic
                    valueBad={data.bad}
                    valueGood={data.good}
                    valueNeutral={data.neutral}
        valuePositive={countPositiveFeedbackPercentage()}
        valueTotal={countTotalFeedback()}/> 
            </div>
        </div>
    </div>
  );
};
