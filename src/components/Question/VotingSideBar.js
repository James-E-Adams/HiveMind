import React, { Component } from 'react';
import FlexColumnContainer from '../common/FlexColumnContainer';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.css';

const Star = ({ open }) => {
  return open ? (
    <div className="fa fa-star-o" />
  ) : (
    <div className="fa fa-star" />
  )
};

const VotingSideBar = ({ numberOfVotes, className, numberOfStars }) => {
  return (
    <FlexColumnContainer className={className}>
      <div className="fa fa-thumbs-up" />
      <div> {numberOfVotes} </div>
      <div className="fa fa-thumbs-down" />
      <Star />
      <div> {numberOfStars} </div>
    </FlexColumnContainer>
  )
};

export default styled(VotingSideBar)`
  margin-right: 10px;
`
