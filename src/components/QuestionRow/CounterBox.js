import React from 'react';
import styled from 'styled-components';
const CounterBox = ({ name, count, className }) => {
  return (
    <div className={className}>
      <div class="mini-counts">
        <span>{count}</span>
      </div>
      <div>{name}</div>
    </div>
  )
};

export default styled(CounterBox)`
  margin: 5px;
  padding: 5px;
  border: 2px solid;
`
