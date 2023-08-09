/* eslint-disable camelcase */
import { Stack, Input, Button, Box, useToast } from '@chakra-ui/react';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import ParticlesContainer from 'renderer/components/particles/particles';
import storage from 'renderer/lib/storage';
import Layout from '../component/Layout';
import { loginWithEmailAndPassword } from '../api/login';
import { useLocales } from 'locales';

export function LoginForm() {
  const navigate = useNavigate();
  const toast = useToast();
  const { t } = useLocales();
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
            const response = await loginWithEmailAndPassword(values);
            if (response.status !== 200) {
              toast({
                title: 'Wrong Credentials',
                description: 'Incorrect credentials.',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
              });
            }
            const { access_token, user_id } = response.data;
            storage.setToken(access_token);
            storage.setUser(user_id);

            navigate('/app/search');
          }}
        >
          {({ handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit} action="">
              <Stack color="white" spacing="5">
                <Input
                  name="email"
                  onChange={handleChange}
                  placeholder={t('email')}
                />
                <Input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder={t('password')}
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
