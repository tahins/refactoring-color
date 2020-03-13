import { h as $ } from 'hyperapp';

const ColumnLayout = ({ children }) => $('div', { class: 'column-layout' }, children.map(child => $('div', {
    class: 'column'
}, [child])));

export default ColumnLayout;