
import css from "./FeedbackOprions.module.css"

 

export const FeedbackOptions = (props) => {
    const { options, onClick} = props;
 
    return (
        <>
            <div className={css.feedback}>
                {options.map(option => (
                    <button type="button" id={option} className={css.buttonFeedback} onClick={onClick}>{option}</button>
                ))}
            </div>
        </>
    );

};