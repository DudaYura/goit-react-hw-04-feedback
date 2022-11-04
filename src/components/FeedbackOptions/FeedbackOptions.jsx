import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Wrapper, OptionButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <OptionButton
          key={nanoid()}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </OptionButton>
      ))}
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
