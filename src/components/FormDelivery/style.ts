import styled, { css } from 'styled-components'

export const WrapperForm = styled.div`
  ${({ theme }) => css`
    background-color: ${theme['base-card']};
    margin-bottom: 25px;
    height: 350px;
    border-radius: 8px;
  `}
`
export const TitleForm = styled.div`
  ${({ theme }) => css`
    display: flex;
    vertical-align: baseline;
    margin: 40px;
    gap: 16px;
    h1 {
      font-family: 'Roboto';
      font-size: 1rem;
      font-weight: 400;
      line-height: 28.8px;
      color: ${theme['base-subtitle']};
    }
    p {
      line-height: 18.2px;
      font-family: 'Roboto';
      font-size: 14px;
      color: ${theme['base-text']};
    }
    svg {
      margin-top: 4px;
      color: ${theme['yellow-dark']};
    }
  `}
`

export const WrapperFormInputs = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns:
      'cep cep cep'
      'rua rua rua'
      'numero numero complemento '
      'bairro cidade uf';
    gap: 4px;
    input {
      color: ${theme['base-text']};
      background-color: ${theme['base-input']};
      padding: 10px;
      border-radius: 8px;
      border: 1px solid ${theme['base-button']};
      outline: none;

      ::placeholder {
        color: ${theme['base-label']};
        display: flex;
        justify-content: space-around;
      }
      :focus {
        box-shadow: 0 0 0 0;
        outline: 0;
        border: 1px solid ${theme['yellow-dark']};
      }
    }
    input .rua {
      grid-area: rua;
    }
    input .cep {
      grid-area: cep;
    }
    input .complemento {
      grid-area: complemento;
    }
    input .bairro {
      grid-area: bairro;
    }
    input .cidade {
      grid-area: cidade;
    }
    input .uf {
      grid-area: uf;
    }

    input.cep {
      width: 260px;
    }
    input.numero {
      width: 260px;
      margin-right: 12px;
    }
    input.complemento {
      width: 330px;
    }
    input.rua {
      width: 600px;
    }
    input.bairro {
      width: 260px;
      margin-right: 12px;
    }
    input.cidade {
      width: 260px;
      margin-right: 12px;
    }
    input.uf {
      width: 60px;
      margin-right: 12px;
    }
  `}
`
