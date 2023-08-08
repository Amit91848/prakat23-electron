/* eslint-disable camelcase */
import { Stack, Input, Button, Box } from '@chakra-ui/react';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import ParticlesContainer from 'renderer/components/particles/particles';
import storage from 'renderer/lib/storage';
import Layout from '../component/Layout';
import { loginWithEmailAndPassword } from '../api/login';

export function LoginForm() {
  const navigate = useNavigate();
  return (
    <Box justifyContent="center" alignItems="center">
      <ParticlesContainer />
      <Box p="6rem" className="glass-bg">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={async (values) => {
            const { data } = await loginWithEmailAndPassword(values);
            const { access_token, user_id } = data;
            storage.setToken(access_token);
            storage.setUser(user_id);

            navigate('/app');
          }}
        >
          {({ handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit} action="">
              <Stack color="blackAlpha.700" spacing="5">
                <Input
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
                <Input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                />
                <Button
                  type="submit"
                  justifySelf="end"
                  mt={2}
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(226,53,48,1) 0%, rgba(237,70,54,1) 100%)',
                    color: 'white',
                  }}
                >
                  Log In
                </Button>
                <Link to="/">
                  <Button type="button">Landing Page</Button>
                </Link>
              </Stack>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

function Login() {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
}

export default Login;
