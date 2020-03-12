import { h as $ } from 'hyperapp';

const DefaultLayout = ({ children }) => $('div', { class: 'default-layout' }, children);

export default DefaultLayout;