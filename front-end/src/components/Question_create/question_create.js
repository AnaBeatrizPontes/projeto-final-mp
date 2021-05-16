/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import 'normalize.css'
import './question_create.css'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#4f4f4f',
        main: '#242424',
        dark: '#191919',
        contrastText: '#fff',
      },
    },
  });
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
  
  const options = [
    'Múltipla escolha',
    'Caixa de seleções',
    'Resposta curta',
    'Paragrafo',
  ];

export default function question_create() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const [value, setValue] = useState(0);
  
    const handleClickListItem = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setValue(index);
      console.log(value);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <>
        <div className="Second">
          <div className="Question_box">
            <div className="Question">
              <input type="text" placeholder="Pergunta sem titulo" className="Question_design" required />
            </div>
    
            <div className="Menu">
              <List component="nav" aria-label="Device settings">
                <ListItem
                  button
                  aria-haspopup="true"
                  aria-controls="lock-menu"
                  aria-label="tipos de resposta"
                  onClick={handleClickListItem}
                >
                  <ListItemText primary="Tipos de resposta" secondary={options[selectedIndex]} />
                </ListItem>
              </List>
              <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {options.map((option, index) => (
                  <MenuItem
                    key={option}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
            {value==0 && (
              <div id="op_selected">
                <input type="radio" id="opçao_1" name="marcar" value="opcao_1"/>
                <label for="opcao_1"><input type="text" className="opcao" placeholder="Opção 1"/></label><br/><br/>
                <input type="radio" id="opçao_2" name="marcar" value="opcao_2"/>
                <label for="opcao_2"><input type="text" className="opcao" placeholder="Opção 2"/></label><br/><br/>
                <input type="radio" id="opçao_3" name="marcar" value="opcao_3"/>
                <label for="opcao_3"><input type="text" className="opcao" placeholder="Opção 3"/></label><br/><br/>
                <input type="radio" id="opçao_4" name="marcar" value="opcao_4"/>
                <label for="opcao_4"><input type="text" className="opcao" placeholder="Opção 4"/></label><br/><br/>
              </div>
            )}
    
            {value==1 && (
              <div id="op_multiple">
                <input type="checkbox" id="opçao_1" name="marcar" value="opcao_1"/>
                <label for="opcao_1"><input type="text" className="opcao" placeholder="Opção 1"/></label><br/><br/>
                <input type="checkbox" id="opçao_2" name="marcar" value="opcao_2"/>
                <label for="opcao_2"><input type="text" className="opcao" placeholder="Opção 2"/></label><br/><br/>
                <input type="checkbox" id="opçao_3" name="marcar" value="opcao_3"/>
                <label for="opcao_3"><input type="text" className="opcao" placeholder="Opção 3"/></label><br/><br/>
                <input type="checkbox" id="opçao_4" name="marcar" value="opcao_4"/>
                <label for="opcao_4"><input type="text" className="opcao" placeholder="Opção 4"/></label><br/><br/>
              </div>
            )}
    
            {value==2 && (
              <div id="op_short">
                <input type="text" className="Resposta_curta" placeholder="Resposta curta"/><br/><br/>
              </div>
            )}
    
            {value==3 &&(
              <div id="op_long">
                <input type="text" className="Resposta_longa" placeholder="Paragrafo"/><br/><br/>
              </div>
            )}
          </div>
        </div>
        </>
      );
}
