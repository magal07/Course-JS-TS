import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleCLick(e) {
    e.preventDefault();
    // searching method clickedButton of actions.js
    dispatch(exampleActions.clickedButtonRequest());
  }

  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragraph>Lorem Ipsum</Paragraph>
      <button type="button" onClick={handleCLick}>
        Send
      </button>
    </Container>
  );
}
