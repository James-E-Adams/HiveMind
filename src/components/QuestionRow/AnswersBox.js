import React from 'react';
import styled from 'styled-components';
const AnswersBox = ({ answers, className }) => {
  return (
    <div className={className}>
      <div class="mini-counts">
        <span>{answers}</span>
      </div>
      <div>answers</div>
    </div>
  )
};

export default styled(AnswersBox)`
  margin: 5px;
  padding: 5px;
`
