import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkRegistered = styled(NavLink)`
  &:hover {
    color: #eba834;
  }

  &.active {
    color: #eba834;
    &:hover {
    color: #0d6efd;
  }

  };
  `