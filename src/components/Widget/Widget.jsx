
import css from "./Widget.module.css"

 

export const Widget = (props) => {
    const { onClickBad, onClickGood, onClickNeutral, valueBad, valueGood, valueNeutral, valuePositive, valueTotal } = props;
 
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
                <li className={css.liStatistic}>Total: <span>{valueTotal}</span></li>
                <li className={css.liStatistic}>Positive: <span>{valuePositive}</span>%</li> 
            </div>
        </div>
    </>
    );

};
