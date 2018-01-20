import React from 'react';
import { storiesOf } from '@storybook/react';
import QuestionRow from '../components/QuestionRow/QuestionRow';
import Header from '../components/Header/Header';
import Question from '../components/Question/Question';
import VotingSideBar from '../components/Question/VotingSideBar';
import { questions, questionText } from './mockQuestions.json';
storiesOf('QuestionRow', module).add('single', () => (
  <QuestionRow question={'What is the question?'} />
))
storiesOf('QuestionRow', module).add('page', () => (
  <div>{questions.map(question => <QuestionRow question={question} />)}</div>
))
storiesOf('Header', module).add('standard', () => <Header />)
storiesOf('Question', module)
  .add('Complete', () => <Question text={questionText} numberOfVotes={20} />)
  .add('Voting Box', () => <VotingSideBar numberOfVotes={20} />)
