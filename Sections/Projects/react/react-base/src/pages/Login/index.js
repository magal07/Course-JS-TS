import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';

export default function Login() {
  const dispatch = useDispatch();

  function handleCLick(e) {
    e.preventDefault();
    // dispara action
    dispatch({
      type: 'CLICKED_BUTTON',
    });
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
