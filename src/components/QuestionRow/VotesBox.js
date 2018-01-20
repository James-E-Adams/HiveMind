import React from 'react';
import styled from 'styled-components';

const VotesBox = ({ votes, className }) => (
  <div className={className}>
    <div class="mini-counts">
      <span>{votes}</span>
    </div>
    <div>votes</div>
  </div>
)

export default styled(VotesBox)`
  padding: 5px;
  margin: 5px;
`
