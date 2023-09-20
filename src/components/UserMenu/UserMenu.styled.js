import styled from 'styled-components';
import { ImExit } from 'react-icons/im';


export const UserContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
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
    fill: #d9cb04;
  }
`;
