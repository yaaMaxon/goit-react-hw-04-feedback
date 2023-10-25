import css from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
<div className={css.container}>
    {options.map(option => {
    return (
        <button 
        className={css.class_btn}
        type="button" 
        key={option} 
        onClick={() => onLeaveFeedback(option)}>
            {option}
            </button>
    )
})}
</div>
//
    );
}