import styled from 'styled-components';
// import Spinner from 'react-bootstrap/Spinner';
import { IoMdContact } from 'react-icons/io';
import { AiFillDelete } from 'react-icons/ai';
// import { MdFavorite } from 'react-icons/md';
import { FaUserEdit } from 'react-icons/fa';


// export const  ContactsBook = styled.ul`
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//     padding: 15px 5px;
//     width: 400px;
// `
// export const ContactsItem = styled.li`
//     position: relative;
//     display: flex;
//     align-items: center;
//     &::before{
//         content: '';
//         width: 3px;
//         height: 3px;
//         border: 1px solid black;
//         border-radius: 50%;
//         background-color: black;
//         margin-right: 5px;
//     }
// `
export const DeleteContact = styled.button`
    border: none;
    background-color: transparent;
    &:hover{
        color: #DC143C;
    }
`
export const ContactIcon = styled(IoMdContact)`
width: 25px;
height: 25px;
margin-right: 15px;
`
export const ContactName = styled.div`
display: flex;
gap: 15px;
font-size: large;
`
export const Name = styled.p`
display: block;
`
export const DeleteIcon = styled(AiFillDelete)`
width: 25px;
height: 25px;
`
export const MoreDitails = styled.div`
display:flex;
gap: 100px;
padding: 0 40px;
justify-content: center;
`
export const EditBtn = styled.button`
    border: none;
    background-color: transparent;
    &:hover{
        color: #2281f5;
    }
`
export const EditIcon = styled(FaUserEdit)`
width: 25px;
height: 25px;
`
// export const FavoriteBtn = styled.button`
//     border: none;
//     background-color: transparent;
//     &:hover{
//         color: #d9cb04;
//     }
// `
// export const FavoriteIcon = styled(MdFavorite)`
// width: 25px;
// height: 25px;
// `