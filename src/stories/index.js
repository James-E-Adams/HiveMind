import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import QuestionRow from '../components/QuestionRow/QuestionRow';
import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))
storiesOf('QuestionRow', module).add('basic', () => (
  <QuestionRow question={'What is the question?'} />
))
