import styled from 'styled-components'

export const Form = styled.form`
    max-width: 547px;
    width: 100%;
    font-weight: bold;
    font-size: 14px;
    color: ${({ theme }) => theme.textoInput};

    textarea {
        resize: none;
        height: 182px;
        margin: 16px 0;
    }
`

export const Opcoes = styled.div`
    margin-bottom: 16px;

    p {
        margin-bottom: 6px;
    }
    label {
        margin-right: 8px;
        cursor: pointer;
    }
    input {
        cursor: pointer;
        margin-right: 4px;
    }
`
export const Seletores = styled.div`
    display: inline;
    text-transform: capitalize;
`
