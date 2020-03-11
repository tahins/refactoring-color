import { h as $, app } from "hyperapp";
import COLOR from './src/constants/color';
import PrimaryColor from './src/components/PrimaryColor';

import "./node_modules/spectre.css/dist/spectre.min.css";
import "./node_modules/spectre.css/dist/spectre-exp.min.css";
import "./node_modules/spectre.css/dist/spectre-icons.min.css";
import './index.css';

const init = {
    primaryColor: "#6a5bcd",
    accentColor: "",
    grey: "",
    red: COLOR.red,
    green: COLOR.green,
    yellow: COLOR.yellow
};

app({
    init,
    view: state => $('div', {}, [
        $(PrimaryColor, state)
    ]),
    node: document.getElementById("app")
});