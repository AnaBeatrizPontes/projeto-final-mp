import React from 'react';

import './Pergunta.css'

const RespostaCurta = ({ mostrarResposta, dadosPergunta, id }) => {
    return (
        <>
            Resposta Curta
        </>
    );
};

const Paragrafo = ({ mostrarResposta, dadosPergunta, id }) => {
    return (
        <>
            Paragrafo
        </>
    );
};

const MultiplaEscolha = ({ mostrarResposta, dadosPergunta, id }) => {
    return (
        <>
            MultiplaEscolha
        </>
    );
};

const CaixasDeSelecao = ({ mostrarResposta, dadosPergunta, id }) => {
    return (
        <>
            CaixasDeSelecao
        </>
    );
};

const PerguntaSelect = ({ mostrarResposta, dadosPergunta, id }) => {
    return (
        <>
            PerguntaSelect
        </>
    );
};

const Horario = ({ mostrarResposta, dadosPergunta, id }) => {
    return (
        <>
            Horario
        </>
    );
};

const Data = ({ mostrarResposta, dadosPergunta, id }) => {
    return (
        <>
            Data
        </>
    );
};

const Pergunta = ({ tipo, mostrarResposta, dadosPergunta, id }) => {

    const switchTiposDePerguntas = (tipo) => {
        switch (tipo) {
            case "respostaCurta":
                return (
                    <RespostaCurta
                        mostrarResposta={mostrarResposta}
                        dadosPergunta={dadosPergunta}
                        id={id}
                    />
                )
                break;
            case "paragrafo":
                return (
                    <Paragrafo
                        mostrarResposta={mostrarResposta}
                        dadosPergunta={dadosPergunta}
                        id={id}
                    />
                )
                break;
            case "multiplaEscolha":
                return (
                    <MultiplaEscolha
                        mostrarResposta={mostrarResposta}
                        dadosPergunta={dadosPergunta}
                        id={id}
                    />
                )
                break;
            case "caixasDeSelecao":
                return (
                    <CaixasDeSelecao
                        mostrarResposta={mostrarResposta}
                        dadosPergunta={dadosPergunta}
                        id={id}
                    />
                )
                break;
            case "perguntaSelect":
                return (
                    <PerguntaSelect
                        mostrarResposta={mostrarResposta}
                        dadosPergunta={dadosPergunta}
                        id={id}
                    />
                )
                break;
            case "horario":
                return (
                    <Horario
                        mostrarResposta={mostrarResposta}
                        dadosPergunta={dadosPergunta}
                        id={id}
                    />
                )
                break;
            case "data":
                return (
                    <Data
                        mostrarResposta={mostrarResposta}
                        dadosPergunta={dadosPergunta}
                        id={id}
                    />
                )
                break;
            default:
                return "Teste pergunta!"
        }
    }

    return (
        <div
            className="perguntaContainer"
        >
            {switchTiposDePerguntas(tipo)}
        </div>
    );
}

export default Pergunta;