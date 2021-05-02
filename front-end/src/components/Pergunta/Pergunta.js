import React from 'react';

import TextField from "@material-ui/core/TextField";

import './Pergunta.css'

const RespostaCurta = ({ mostrarResposta, resposta, dadosPergunta, id, descricao }) => {
    return (
        <>
            <TextField
                className="respostaCurta"
                id={id}
                label={descricao}
                value={mostrarResposta ? resposta : ""}
                variant="outlined"
                disabled={mostrarResposta}
                onChange={(e) => { }}
            />
        </>
    );
};

const Paragrafo = ({ mostrarResposta, resposta, dadosPergunta, id, descricao }) => {
    return (
        <>
            Paragrafo
        </>
    );
};

const MultiplaEscolha = ({ mostrarResposta, resposta, dadosPergunta, id, descricao }) => {
    return (
        <>
            MultiplaEscolha
        </>
    );
};

const CaixasDeSelecao = ({ mostrarResposta, resposta, dadosPergunta, id, descricao }) => {
    return (
        <>
            CaixasDeSelecao
        </>
    );
};

const PerguntaSelect = ({ mostrarResposta, resposta, dadosPergunta, id, descricao }) => {
    return (
        <>
            PerguntaSelect
        </>
    );
};

const Horario = ({ mostrarResposta, resposta, dadosPergunta, id, descricao }) => {
    return (
        <>
            Horario
        </>
    );
};

const Data = ({ mostrarResposta, resposta, dadosPergunta, id, descricao }) => {
    return (
        <>
            Data
        </>
    );
};

const Pergunta = ({ tipo, resposta, mostrarResposta, dadosPergunta, id, descricao }) => {

    const switchTiposDePerguntas = (tipo) => {
        switch (tipo) {
            case "respostaCurta":
                return (
                    <RespostaCurta
                        descricao={descricao}
                        resposta={resposta}
                        mostrarResposta={mostrarResposta}
                        dadosPergunta={dadosPergunta}
                        id={id}
                    />
                )
                break;
            case "paragrafo":
                return (
                    <Paragrafo
                        descricao={descricao}
                        resposta={resposta}
                        mostrarResposta={mostrarResposta}
                        dadosPergunta={dadosPergunta}
                        id={id}
                    />
                )
                break;
            case "multiplaEscolha":
                return (
                    <MultiplaEscolha
                        descricao={descricao}
                        mostrarResposta={mostrarResposta}
                        dadosPergunta={dadosPergunta}
                        id={id}
                    />
                )
                break;
            case "caixasDeSelecao":
                return (
                    <CaixasDeSelecao
                        descricao={descricao}
                        resposta={resposta}
                        mostrarResposta={mostrarResposta}
                        dadosPergunta={dadosPergunta}
                        id={id}
                    />
                )
                break;
            case "perguntaSelect":
                return (
                    <PerguntaSelect
                        descricao={descricao}
                        resposta={resposta}
                        mostrarResposta={mostrarResposta}
                        dadosPergunta={dadosPergunta}
                        id={id}
                    />
                )
                break;
            case "horario":
                return (
                    <Horario
                        descricao={descricao}
                        resposta={resposta}
                        mostrarResposta={mostrarResposta}
                        dadosPergunta={dadosPergunta}
                        id={id}
                    />
                )
                break;
            case "data":
                return (
                    <Data
                        descricao={descricao}
                        resposta={resposta}
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