import { h as $, app } from "hyperapp";
import PrimaryColor from './src/components/PrimaryColor';
import AccentColor from './src/components/AccentColor';
import ColorSystem from './src/components/ColorSystem';

import './index.css';

const init = {
    screens: [
        PrimaryColor,
        AccentColor,
        ColorSystem,
    ],
    currentScreen: 0,
    primaryColor: { h: 207, s: 90, l: 40 },
    accentColor: { h: 155, s: 90, l: 40 },
    grey: { h: 207, s: 10, l: 40 },
    red: { h: 0, s: 70, l: 40 },
    green: { h: 145, s: 55, l: 40 },
    yellow: { h: 50, s: 90, l: 40 }
};

const gotoNextStep = state => ({ ...state, currentScreen: Math.min(++state.currentScreen, state.screens.length - 1) });
const gotoPreviousStep = state => ({ ...state, currentScreen: Math.max(--state.currentScreen, 0) });

app({
    init,
    view: state => $('div', {}, [
        $(state.screens[state.currentScreen], state),
        $('div', { class: 'navigation' }, [
            state.currentScreen > 0 && $('a', { href: '#', onclick: gotoPreviousStep }, '< Previous'),
            state.currentScreen < state.screens.length - 1 && $('a', { href: '#', onclick: gotoNextStep }, 'Next >')
        ])
    ]),
    node: document.getElementById("app")
});