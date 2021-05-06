import React, { useState } from 'react';

import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import './Pergunta.css'

const RespostaCurta = ({ mostrarResposta, resposta, dadosPergunta, id, descricao, handleChangeResposta }) => {

    const [valor, setValor] = useState(mostrarResposta ? resposta : "");

    const handleChange = (e) => {
        setValor(e.target.value);
        handleChangeResposta(id, e.target.value);
    }

    return (
        <>
            <TextField
                className="textFieldPergunta"
                id={id}
                label={descricao}
                value={valor}
                variant="outlined"
                disabled={mostrarResposta}
                onChange={handleChange}
            />
        </>
    );
};

const Paragrafo = ({ mostrarResposta, resposta, dadosPergunta, id, descricao, handleChangeResposta }) => {

    const [valor, setValor] = useState(mostrarResposta ? resposta : "");

    const handleChange = (e) => {
        setValor(e.target.value);
        handleChangeResposta(id, e.target.value);
    }

    return (
        <>
            <TextField
                className="textFieldPergunta"
                id={id}
                label={descricao}
                value={valor}
                multiline
                rows={5}
                variant="outlined"
                disabled={mostrarResposta}
                onChange={handleChange}
            />
        </>
    );
};

const MultiplaEscolha = ({ mostrarResposta, resposta, dadosPergunta, id, descricao, handleChangeResposta }) => {

    const [selecionado, setSelecionado] = useState(null);

    const handleChange = (event) => {
        setSelecionado(event.target.value);
        //TODO - manda valor para o componente pai
    }

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">{descricao}</FormLabel>
                <RadioGroup row aria-label={id} name={id} value={selecionado} onChange={handleChange}>
                    {
                        dadosPergunta.map(itemRadio => (
                            <FormControlLabel
                                key={itemRadio.valor}
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

const CaixasDeSelecao = ({ mostrarResposta, resposta, dadosPergunta, id, descricao, handleChangeResposta }) => {

    const [selectsLigados, setSelects] = useState([]);

    const handleChange = (event) => {
        const valorAtual = event.target.name;
        if (selectsLigados.includes(valorAtual, 0)) {
            const newSelectsLigados = selectsLigados.filter(select => (select != valorAtual));
            setSelects(newSelectsLigados);
        } else {
            setSelects([...selectsLigados, valorAtual]);
        }
        //TODO - manda valor para o componente pai
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
                                        key={itemCheckbox.valor}
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

const PerguntaSelect = ({ mostrarResposta, resposta, dadosPergunta, id, descricao, handleChangeResposta }) => {

    const [selecionado, setSelecionado] = useState(null);

    const handleChange = (event) => {
        setSelecionado(event.target.value);
        //TODO - manda valor para o componente pai
    }

    return (
        <>
            <Select
                native
                className="selectPerguntas"
                onChange={handleChange}
            >
                {dadosPergunta.map(itemSelect => (
                    <option
                        className="optionSelectPerguntas"
                        value={itemSelect.valor}
                        key={itemSelect.valor}
                    >
                        {itemSelect.opcao}
                    </option>
                ))}
            </Select>
        </>
    );
};

const Horario = ({ mostrarResposta, resposta, dadosPergunta, id, descricao, handleChangeResposta }) => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleChange = (date) => {
        setSelectedDate(date);
        //TODO - manda valor para o componente pai
    };

    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                    style={{
                        minWidth: "100%",
                    }}
                    margin="normal"
                    label={descricao}
                    value={selectedDate}
                    onChange={handleChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
            </MuiPickersUtilsProvider>
        </>
    );
};

const Data = ({ mostrarResposta, resposta, dadosPergunta, id, descricao, handleChangeResposta }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleChange = (date) => {
        setSelectedDate(date);
        //TODO - manda valor para o componente pai
    };

    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    style={{
                        width: "100%",
                    }}
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label={descricao}
                    value={selectedDate}
                    onChange={handleChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        </>
    );
};

const Pergunta = ({ tipo, resposta, mostrarResposta, dadosPergunta, id, descricao, handleChangeResposta }) => {

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
                        handleChangeResposta={handleChangeResposta}
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
                        handleChangeResposta={handleChangeResposta}
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
                        handleChangeResposta={handleChangeResposta}
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
                        handleChangeResposta={handleChangeResposta}
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
                        handleChangeResposta={handleChangeResposta}
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
                        handleChangeResposta={handleChangeResposta}
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
                        handleChangeResposta={handleChangeResposta}
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