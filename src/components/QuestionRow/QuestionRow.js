import React, { Component } from 'react';
import CounterBox from './CounterBox';
import QuestionTitle from './QuestionTitle';
import FlexRowContainer from '../common/FlexRowContainer';
import FlexColumnContainer from '../common/FlexColumnContainer';
import Button from 'material-ui/Button';
import styled from 'styled-components';

const QuestionRow = ({ question, className }) => {
  return (
    <FlexRowContainer className={className}>
      <FlexRowContainer>
        <CounterBox count={0} name="votes" />
        <CounterBox count={0} name="answers" />
        <CounterBox count={0} name="views" />
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

export default styled(QuestionRow)`
  margin: 25px 0px;
`
