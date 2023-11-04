import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    if (e.target.nodeName !== 'BUTTON') return;

    const option = e.target.innerHTML.toLowerCase();

    if (option === 'good') {
      setGood(prevState => prevState + 1);
    } else if (option === 'neutral') {
      setNeutral(prevState => prevState + 1);
    } else {
      setBad(prevState => prevState + 1);
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        paddingLeft: 40,
        fontSize: 24,
        color: '#010101',
      }}
    >
      <Section title="Please leave Feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {good || neutral || bad ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
};
