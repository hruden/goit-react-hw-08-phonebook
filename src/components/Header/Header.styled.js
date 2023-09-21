import styled from 'styled-components';
import { RiUserAddFill } from 'react-icons/ri';
// import { MdFavorite } from 'react-icons/md';
import Navbar from 'react-bootstrap/Navbar';

export const Navigate = styled(Navbar)`
    justify-content: space-between;
    padding: 5px 20px;
    margin-bottom: 15px;
`
export const AddContact = styled(RiUserAddFill)`
        width: 30px;
        height: 25px;
        &:hover{
            fill: #d9cb04;
        }
`
// export const FavoriteIcon = styled(MdFavorite)`
//         width: 30px;
//         height: 25px;
//         &:hover{
//             fill: #d9cb04;
//         }
// `