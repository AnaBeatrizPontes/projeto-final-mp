import React, { useState } from 'react';

import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

import './Pergunta.css'

const RespostaCurta = ({ mostrarResposta, resposta, dadosPergunta, id, descricao }) => {
    return (
        <>
            <TextField
                className="textFieldPergunta"
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
            <TextField
                className="textFieldPergunta"
                id={id}
                label={descricao}
                value={mostrarResposta ? resposta : ""}
                multiline
                rows={5}
                variant="outlined"
                disabled={mostrarResposta}
                onChange={(e) => { }}
            />
        </>
    );
};

const MultiplaEscolha = ({ mostrarResposta, resposta, dadosPergunta, id, descricao }) => {

    const [selecionado, setSelecionado] = useState(null);

    const handleChange = (event) => {
        setSelecionado(event.target.value);
        //TODO - manda selects valor para o componente pai
    }

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">{descricao}</FormLabel>
                <RadioGroup row aria-label={id} name={id} value={selecionado} onChange={handleChange}>
                    {
                        dadosPergunta.map(itemRadio => (
                            <FormControlLabel
                                value={itemRadio.valor}
                                control={<Radio />}
                                label={itemRadio.opcao}
                            />
                        ))
                    }
                    {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                </RadioGroup>
            </FormControl>
        </div>
    );
};

const CaixasDeSelecao = ({ mostrarResposta, resposta, dadosPergunta, id, descricao }) => {

    const [selectsLigados, setSelects] = useState([]);

    const handleChange = (event) => {
        const valorAtual = event.target.name;
        if (selectsLigados.includes(valorAtual, 0)) {
            const newSelectsLigados = selectsLigados.filter(select => (select != valorAtual));
            setSelects(newSelectsLigados);
        } else {
            setSelects([...selectsLigados, valorAtual]);
        }
        //TODO - manda selects valor para o componente pai
    }

    return (
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend">{descricao}</FormLabel>
                <FormGroup row>
                    {
                        dadosPergunta.map(itemCheckbox => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={selectsLigados.includes(itemCheckbox.valor, 0)}
                                        onChange={handleChange}
                                        name={itemCheckbox.valor}
                                    />
                                }
                                label={itemCheckbox.opcao}
                            />
                        ))
                    }
                </FormGroup>
            </FormControl>
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