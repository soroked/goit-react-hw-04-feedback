import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <ul className={css.feedbackList} onClick={onLeaveFeedback}>
        {options.map(option => (
          <li key={option}>
            <button>{option}</button>
          </li>
        ))}
      </ul>
    </>
  );
};
