import React from 'react';
import ReactDOM from 'react-dom';
import ScrollToProduct from './ScrollToProduct';

import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { ExpansionPanelActions } from '@material-ui/core';

const handleBackToTopIconSpy = jest.fn();
const handleBackToTopIcon = handleBackToTopIconSpy;

const handleScrollSpy = jest.fn();
const handleScroll = handleScrollSpy;

const mockScrollPosition = 0;

afterEach(cleanup);


it("render ScrollToProduct componen", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<ScrollToProduct></ScrollToProduct>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("render ScrollToProduct componen", ()=> {
    const {getByTestId} = render(<ScrollToProduct scrollPosition= {mockScrollPosition} handleScroll={handleScroll} handleBackToTopIcon={handleBackToTopIcon}
        ></ScrollToProduct>);
    expect(getByTestId("B-1")).toHaveTextContent("B");
});