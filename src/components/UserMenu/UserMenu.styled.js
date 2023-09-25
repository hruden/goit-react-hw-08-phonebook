import styled from 'styled-components';
import { ImExit } from 'react-icons/im';
import { RiUserAddFill } from 'react-icons/ri';
import { MdFavorite } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export const UserContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
`;
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;
export const UserTitle = styled.p`
  display: block;
  justify-content: center;
  margin: 0;
`;
// export const UserOut = styled(Button)`
//   border: none;
//   background-color: transparent;
// `;
export const ExitIcon = styled(ImExit)`
  width: 30px;
  height: 25px;
  &:hover {
    fill: #dc143c;
  }
`;
export const AddContact = styled(RiUserAddFill)`
  width: 30px;
  height: 25px;
  &:hover {
    fill: #d9cb04;
  }
`;
export const FavoriteIcon = styled(MdFavorite)`
  width: 30px;
  height: 25px;
  &:hover {
    fill: #d9cb04;
  }
`;
export const FavoriteLink = styled(NavLink)`
  &.active {
    color: #d9cb04;
    &:hover {
      color: #0d6efd;
    }
  }
`
