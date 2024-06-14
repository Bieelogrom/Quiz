import { useState } from 'react'
import { MainWrapper, DivQuiz, PerguntasResposta, PerguntaTitulo, RespostaAlternativa, AlternativaResposta } from './Style'



function App() {
  const perguntas = [
    {
      pergunta: 'Qual inseto você escolheria para comer se fosse necessário?',
      opcoes: ['Besouro', 'Barata', 'Escorpião', 'Borboleta'],
      resposta: 'Borboleta'
    },
    {
      pergunta: 'Você já tentou lamber os dedos dos pés?',
      opcoes: ['Sim', 'Não', 'Talvez', 'Pretendo bastante'],
      resposta: 'Pretendo bastante'
    },
    {
      pergunta: 'Se sua família fosse um programa de TV, qual melhor programa de tv representaria?',
      opcoes: ['Chiquititas', 'De férias com ex', 'Programa do Ratinho', 'Todos os anteriores'],
      resposta: 'Todos os anteriores'
    }
  ]

  const [indicePergunta, setIndicePergunta] = useState(0)
  const [respostas, setRespostas] = useState([])
  const [resultado, setResultado] = useState(null)

  const responderPergunta = (respostaSelecionada) => {
    setRespostas([...respostas, respostaSelecionada]);
    if (indicePergunta + 1 < perguntas.length) {
      setIndicePergunta(indicePergunta + 1);
    } else {
      calcularResultado()
    }
  }

  const calcularResultado = () => {
    let pontuacao = 0;
    for (let i = 0; i < perguntas.length; i++) {
      if (respostas[i] === perguntas[i].resposta) {
        pontuacao++
        console.log(pontuacao)
      }
    }
    setResultado(pontuacao)
  }

  const reiniciarQuiz = () => {
    setIndicePergunta(0);
    setRespostas([]);
    setResultado(null);
  }

  return (
    <>
      <MainWrapper>
        <DivQuiz>
          <PerguntasResposta>
            <PerguntaTitulo>{`${indicePergunta + 1}. ${perguntas[indicePergunta].pergunta}`}</PerguntaTitulo>
          </PerguntasResposta>
            {resultado !== null ? (
              <PerguntasResposta>
                <PerguntaTitulo>Sua pontuação: {`${resultado} Pontos de ${perguntas.length} Perguntas!`}</PerguntaTitulo>
                <AlternativaResposta onClick={reiniciarQuiz}>Resetar quiz</AlternativaResposta>
              </PerguntasResposta>
            ) : (
              <PerguntasResposta Alternativas>
                {perguntas[indicePergunta].opcoes.map((opcao, index) => (
                  <AlternativaResposta key={index} onClick={() => responderPergunta(opcao)}>
                    {`${opcao}`}
                  </AlternativaResposta>
                ))}
              </PerguntasResposta>
            )}
        </DivQuiz>
      </MainWrapper>
    </>
  )
}

export default App
