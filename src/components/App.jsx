import './App.css'
// import { Widget } from "./Widget/Widget";
import css from "./Widget/Widget.module.css"
import { useState } from "react";

export const App = () => {
    const [data, setData] = useState({ good: 0, neutral: 0, bad: 0});
  

    const onClickGood = () => {
        setData(prevValue => {
            return { ...prevValue, good: prevValue.good +1}
        })
        
    }

    const onClickNeutral = () => {
        setData(prevValue => {
            return { ...prevValue, neutral: prevValue.neutral +1}
        })
    }

    const onClickBad = () => {
        setData(prevValue => {
            return { ...prevValue, bad: prevValue.bad + 1}
        })
    }

    const countTotalFeedback = () => {
        return data.good+ data.neutral+ data.bad;
    }
    
    const countPositiveFeedbackPercentage = () => {
        if (data.good !== 0) {
            return data.good/countTotalFeedback() * 100;
        }
        return 0;
        
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
                <button type="button" className={css.buttonFeedback} onClick={onClickGood}>Good</button>
                <button type="button" className={css.buttonFeedback} onClick={onClickNeutral}>Neutral</button>
                <button type="button" className={css.buttonFeedback} onClick={onClickBad}>Bad</button>
            </div>
            <h2>Statistics</h2>
            <div className={css.statistic}>
                <li className={css.liStatistic}>Good: <span>{data.good}</span></li>
                <li className={css.liStatistic}>Neutral: <span>{data.neutral}</span></li>
                <li className={css.liStatistic}>Bad: <span>{data.bad}</span></li>
                  <li className={css.liStatistic}>Total: <span>{countTotalFeedback()}</span></li>
                <li className={css.liStatistic}>Positive: <span>{countPositiveFeedbackPercentage()}</span>%</li> 
            </div>
        </div>
    </div>
  );
};
