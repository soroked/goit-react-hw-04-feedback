import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good / (good + neutral + bad)) * 100);
  };

  return (
    <>
      <ul className={css.statisticsList}>
        <li>
          <p className={css.statisticsText}>Good: {good}</p>
        </li>
        <li>
          <p className={css.statisticsText}>Neutral: {neutral}</p>
        </li>
        <li>
          <p className={css.statisticsText}>Bad: {bad}</p>
        </li>
        <li>
          <p className={css.statisticsText}>Total: {countTotalFeedback()}</p>
        </li>
        <li>
          <p className={css.statisticsText}>
            Positive feedback: {countPositiveFeedbackPercentage()}%
          </p>
        </li>
      </ul>
    </>
  );
};
