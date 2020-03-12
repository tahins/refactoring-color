import { h as $ } from 'hyperapp';

const ColumnLayout = ({ children }) => $('div', { class: 'column-layout' }, children);

export default ColumnLayout;