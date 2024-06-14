import styled, {css} from 'styled-components';

export const MainWrapper = styled.main`
    width: 100%;
    height: 100%;
    background: #DC5F00;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DivQuiz = styled.div`
    width: 40%;
    height: fit-content;
    background: #373A40;
    border-radius: 10px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const PerguntasResposta = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
   flex-direction: column;

   ${props => props.Alternativas && css`
        flex-direction: row;
    `}
`

export const PerguntaTitulo = styled.h1`
    font-size: 20px;
    color: #EEEEEE;
    font-weight: bold;
`

export const RespostaAlternativa = styled.p`
    font-size: 18px;
    color: #EEEEEE;
    font-weight: lighter;
`

export const AlternativaResposta = styled.button`
    width: 25%;
    height: 40px;
    background: #EEEEEE;
`