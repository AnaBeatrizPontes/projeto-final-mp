import React, { useState } from 'react';

import Typography from "@material-ui/core/Typography";

import Pergunta from '../../components/Pergunta/Pergunta';
import useConstructor from '../../Utils/useConstructor';
import { getQuestionario } from '../../Utils/api';

import './RespostaQuestionario.css';

const RespostaQuestionario = (props) => {

    const [questionario, setQuestionario] = useState({});

    useConstructor(() => {
        const questionarioId = 1; //props.questionarioId;
        const questionario = getQuestionario(questionarioId);
        setQuestionario(questionario);
    });

    const descricao = questionario.descricao || "Descrição++";
    const titulo = questionario.titulo || "Título++";
    const userName = questionario.userName || "Nome++";
    const perguntas = questionario.perguntas || [];

    return (
        <div
            className="containerQuestionario"
        >
            <div
                className="questionario"
            >
                <Typography
                    className="tituloQuestionario"
                    variant="h4"
                >
                    {titulo}
                </Typography>
                <Typography
                    variant="title"
                >
                    Criador: {userName}
                </Typography>
                <br />
                <Typography
                    variant="title"
                >
                    {descricao}
                </Typography>
                <div
                    className="containerPerguntas"
                >
                    {perguntas.map((pergunta) => (
                        <Pergunta
                            mostrarResposta={props.ehResposta}
                            resposta={pergunta.resposta}
                            id={pergunta.id}
                            tipo={pergunta.tipo}
                            dadosPergunta={pergunta.dadosPergunta}
                            descricao={pergunta.descricao}
                        />
                    ))}
                </div>
            </div>
        </div>
    );

};

export default RespostaQuestionario;