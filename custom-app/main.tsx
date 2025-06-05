import React from 'react';
import {onDOMContentMutate, renderInContainer} from "./utils";

function App() {
    return <h1>FOOTER!</h1>
}

function render() {
    // render custom footer
    renderInContainer(App, document.getElementById('fern-footer'));
}

onDOMContentMutate(render)
