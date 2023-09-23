import { Container } from 'Layout/Layout.styled';
import Alert from 'react-bootstrap/Alert';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container>
      {' '}
      <Alert variant="warning">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>Oh, no, unfortunately the page you want to go to does not exist</p>
        <hr />
        <p className="mb-0">
          Try to go to an <NavLink to="/contacts">existing</NavLink> page
        </p>
      </Alert>
    </Container>
  );
}
