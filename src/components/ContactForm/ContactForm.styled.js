import styled from 'styled-components';
export const FormFoneBook = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 400px;
    padding: 15px;
    margin-bottom: 15px;
    gap: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    `
export const InputFoneBook = styled.input`
    width: 100%;
    margin-bottom: 15px;
    `
export const AddContactBtn = styled.button`
    width: 200px;
    &:hover{
        background-color: #6495ED;
        border-color: #6495ED;
        color: white;
    }
`
