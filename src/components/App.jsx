import React, { useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

import { Container } from './App.styled';

export const App = () => {
  const [counterGood, setCounterGood] = useState(0);
  const [counterNeutral, setCounterNeutral] = useState(0);
  const [counterBad, setCounterBad] = useState(0);

   const leaveFeedback = (typeCounter) => {    
    switch (typeCounter) {
      case "good":
        setCounterGood(prevState => prevState + 1);
        break;
      case "neutral":
        setCounterNeutral(prevState => prevState + 1);
        break;
      case "bad":
        setCounterBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }

  const countTotalFeedback = () => {
    return counterGood + counterNeutral + counterBad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((counterGood * 100) / countTotalFeedback());
  };

  
    const options = ['good', 'neutral', 'bad'];
    let totalFeedback = countTotalFeedback();
    let positiveFeedbackPercentage = 0;

    if (countPositiveFeedbackPercentage()) {
      positiveFeedbackPercentage = countPositiveFeedbackPercentage();
    }

    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={leaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={counterGood}
              neutral={counterNeutral}
              bad={counterNeutral}
              totalFeedback={totalFeedback}
              positiveFeedbackPercentage={positiveFeedbackPercentage}
            />
          )}
        </Section>
      </Container>
    );
  }

