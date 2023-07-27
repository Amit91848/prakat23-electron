import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="main">
        Protected Routes
        <Link to="/">
          <Button> Back to Landing</Button>
        </Link>{' '}
      </div>{' '}
    </>
  );
}

const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
  },
];

export default protectedRoutes;
