import { h as $ } from 'hyperapp';
import './Layout.css';

const ColumnLayout = ({ children, reverse, center }) => $('div', {
    class: {
        'column-layout': true,
        reverse
    }
}, children.map(child => $('div', {
    class: {
        column: true,
        center
    }
}, [child])));

export default ColumnLayout;