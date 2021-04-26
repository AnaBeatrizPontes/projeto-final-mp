import React from 'react'
import { fireEvent, render, getByText } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'

import PagesLogin from '../pages/Login/Login';


describe('Teste da pagina de login', () => {

    test('Apertar num botao sem preencher os inputs', async () => {
        const ComponenteRenderizado = renderer.create(<PagesLogin />).toJSON()
        expect(ComponenteRenderizado).toMatchSnapshot()
    });

    test('Show alert if btn is pressed', async () => {
        const ComponenteRenderizado = render(<PagesLogin />);
        const { getByText } = ComponenteRenderizado;
        const btn = getByText("Entrar");
        fireEvent(
            btn,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );
    });

});
