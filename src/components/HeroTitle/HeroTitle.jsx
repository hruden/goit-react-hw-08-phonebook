import { Title } from './HeroTitle.styled';
import img from '../../img/PhoneBook.jpg';
import Card from 'react-bootstrap/Card';

export const HeroTitle = () => {
  return (
    <Card>
      <Card.Body>
        <Title>Welcome to PhoneBook application. </Title>
      </Card.Body>
      <Card.Img variant="bottom" src={img} />
    </Card>
  );
};
