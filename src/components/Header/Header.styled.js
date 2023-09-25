import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export const Navigate = styled(Navbar)`
  justify-content: space-between;
  padding: 5px 20px;
  margin-bottom: 15px;
`;
export const LinkHome = styled(NavLink)`
  &:hover {
    color: #eba834;
  }

  &.active {
    color: #eba834;
    &:hover {
    color: #0d6efd;
  }

  }

  /* &:hover{
            fill: #d9cb04;
        } */
`;
