import './App.css'
// import { Widget } from "./Widget/Widget";
import css from "./Widget/Widget.module.css"
import { useState } from "react";

  

export const App = () => {
    const [data, setdata] = useState({ first: 5, secend: 10 });
    const [valueGood, setGoodValue] = useState(0);
    const [valueNeutral, setNeutralValue] = useState(0);
    const [valueBad, setBadValue] = useState(0);
    const [valueTotal, setTotalValue] = useState(0);
    const [valuePositive, setPositiveValue] = useState(0);

    // setdata(prevValue => ({
    //         ...prevValue}));
    console.log('test', data.first);

    const onClickGood = () => {
        setGoodValue(prevValue => {
            return prevValue += 1
        })
        data.first += 1;
        // console.log(data.first);
        
    }

    const onClickNeutral = () => {
        setNeutralValue(prevValue => prevValue += 1);
        countTotalFeedback(valueGood, valueNeutral, valueBad);
        countPositiveFeedbackPercentage(valueGood, valueTotal);
    }

    const onClickBad = () => {
        setBadValue(prevValue => prevValue += 1);
        countTotalFeedback(valueGood, valueNeutral, valueBad);
        countPositiveFeedbackPercentage(valueGood, valueTotal);
    }

    const countTotalFeedback = () => {
        setTotalValue(valueGood+ valueNeutral + valueBad);
    }

    const countPositiveFeedbackPercentage = () => {
        if (valueGood !== 0) {
            setPositiveValue(valueGood/valueTotal * 100);
        }
        
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
                <button type="button" className={css.buttonFeedback} onClick={(onClickNeutral)}>Neutral</button>
                <button type="button" className={css.buttonFeedback} onClick={onClickBad}>Bad</button>
            </div>
            <h2>Statistics</h2>
            <div className={css.statistic}>
                <li className={css.liStatistic}>Good: <span>{valueGood}</span></li>
                <li className={css.liStatistic}>Neutral: <span>{data.first}</span></li>
                <li className={css.liStatistic}>Bad: <span>{valueBad}</span></li>
                <li className={css.liStatistic}>Total: <span>{valueTotal}</span></li>
                <li className={css.liStatistic}>Positive: <span>{valuePositive}</span>%</li> 
            </div>
        </div>


    </div>
  );
};
