import { Stack, Input, Button, Box } from '@chakra-ui/react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import ParticlesContainer from 'renderer/components/particles/particles';
import Layout from '../component/Layout';

export function LoginForm() {
  return (
    <Box justifyContent="center" alignItems="center">
      <ParticlesContainer />
      <Box p="6rem" className="glass-bg">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => {
            // console.log(values);
            alert(JSON.stringify(values));
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} action="">
              <Stack spacing="5">
                <Input placeholder="Email" />
                <Input placeholder="Password" />
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
