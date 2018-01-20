import React, { Component } from 'react';
import FlexColumnContainer from '../common/FlexColumnContainer';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.css';

const VotingSideBar = ({ numberOfVotes, className }) => {
  return (
    <FlexColumnContainer className={className}>
      <div className="fa fa-thumbs-up" />
      <div> {numberOfVotes} </div>
      <div className="fa fa-thumbs-down" />
    </FlexColumnContainer>
  )
};

export default styled(VotingSideBar)`
  margin-right: 10px;
`
