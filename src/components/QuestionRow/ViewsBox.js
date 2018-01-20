import React from 'react';
import styled from 'styled-components';
const ViewsBox = ({ views, className }) => {
  return (
    <div className={className}>
      <div class="mini-counts">
        <span>{views}</span>
      </div>
      <div>views</div>
    </div>
  )
};

export default styled(ViewsBox)`
  margin: 5px;
  padding: 5px;
`
