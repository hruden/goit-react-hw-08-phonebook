import styled from 'styled-components';
import Alert from 'react-bootstrap/Alert';
import { RiUserAddFill } from 'react-icons/ri';
import { MdFavorite } from 'react-icons/md';
import Navbar from 'react-bootstrap/Navbar';




export const Container = styled.div`
    max-width: 700px;
    padding: 30px;
    margin: 5px auto;
`
export const NotFoundAlert = styled(Alert)`
    margin-top: 15px;
    width: 400px;
`
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
export const FavoriteIcon = styled(MdFavorite)`
        width: 30px;
        height: 25px;
        &:hover{
            fill: #d9cb04;
        }
`
export const Title = styled.h2`
    text-align: center;
    margin-bottom: 15px;
`