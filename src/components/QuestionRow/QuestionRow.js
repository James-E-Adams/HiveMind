import React, { Component } from 'react';
import VotesBox from './VotesBox';
import AnswersBox from './AnswersBox';
import ViewsBox from './ViewsBox';
import QuestionTitle from './QuestionTitle';
import FlexRowContainer from './FlexRowContainer';
import FlexColumnContainer from './FlexColumnContainer';
import Button from 'material-ui/Button';
import styled from 'styled-components';

const QuestionRow = ({ question, className }) => {
  return (
    <FlexRowContainer>
      <FlexRowContainer>
        <VotesBox votes={0}> </VotesBox>
        <AnswersBox answers={0}> </AnswersBox>
        <ViewsBox views={0}> </ViewsBox>
      </FlexRowContainer>
      <FlexColumnContainer>
        <QuestionTitle> {question} </QuestionTitle>
        <div className="second-row">
          <Button color="primary">Tag1</Button>
          <Button color="primary">Tag2</Button>
          <Button color="primary">Tag3</Button>
          <Button color="primary">Tag4</Button>
          <Button color="primary">Tag5</Button>
        </div>
      </FlexColumnContainer>
    </FlexRowContainer>
  )
};

export default QuestionRow
