import React, { Component } from 'react';
import VotingSideBar from './VotingSideBar';
import QuestionText from './QuestionText';
import FlexRowContainer from '../common/FlexRowContainer';
import FlexColumnContainer from '../common/FlexColumnContainer';
import Button from 'material-ui/Button';
import styled from 'styled-components';

const Question = ({ text, numberOfVotes, className }) => {
  return (
    <FlexRowContainer className={className}>
      <VotingSideBar numberOfVotes={numberOfVotes} />
      <QuestionText text={text} />
    </FlexRowContainer>
  )
};

export default styled(Question)`
  margin: 25px 0px;
`
