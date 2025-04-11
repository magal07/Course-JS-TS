import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import Loading from '../../components/loading';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error('Name must be between 3 and 255 characters');
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Invalid empty email');
    }
    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Password must be between 6 and 50 characters');
    }
    if (formErrors) return;
    setIsLoading(true);

    try {
      await axios.post('/users/', {
        name,
        email,
        password,
      });
      toast.success('User created successfully');
      setIsLoading(false);

      history.push('/login');
    } catch (err) {
      const errors = get(err, 'response.data.errors');

      errors.map((error) => toast.error(error));
      setIsLoading(false);
    }
  }
  /* eslint-disable */
  return (
    <Container>
          <Loading isLoading={isLoading} />

      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>

        <label htmlFor="name">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password"
          />
        </label>
        <button type="submit">Create </button>
      </Form>
    </Container>
    /* eslint-enable */
  );
}
