import React, { Component } from 'react';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import styled from 'styled-components';
import logo from './icon2.png';

const Header = ({ className }) => {
  return (
    <Toolbar className={className}>
      <img src={logo} />
      <Button> Questions </Button>
      <Button> Jobs </Button>
      <Button> Tags </Button>
      <Button> Users </Button>
      <TextField id="search" label="Search field" type="search" margin="none" />
    </Toolbar>
  )
};

export default styled(Header)`
  height: 100px;
`
