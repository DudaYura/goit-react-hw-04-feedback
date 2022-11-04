import PropTypes from 'prop-types';

import { StatsList, StatsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <StatsList>
      <StatsItem>Good: {good}</StatsItem>
      <StatsItem>Neutral: {neutral}</StatsItem>
      <StatsItem>Bad: {bad}</StatsItem>
      <StatsItem>Total: {totalFeedback}</StatsItem>
      <StatsItem>Positive feedback: {positiveFeedbackPercentage}%</StatsItem>
    </StatsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
