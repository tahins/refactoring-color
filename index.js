import { h as $, app } from "hyperapp";
import { SCREENS } from "./src/constants/AppConstant";

import './index.css';
import './toast.css';

const init = {
    currentScreen: 0,
    primaryColor: { h: 207, s: 90, l: 40 },
    accentColor: { h: 155, s: 90, l: 40 },
    grey: { h: 207, s: 10, l: 40 },
    red: { h: 0, s: 70, l: 40 },
    green: { h: 145, s: 55, l: 40 },
    yellow: { h: 50, s: 90, l: 40 },
    toast: { show: false, message: '' }
};

const gotoNextStep = state => ({ ...state, currentScreen: Math.min(++state.currentScreen, SCREENS.length - 1) });
const gotoPreviousStep = state => ({ ...state, currentScreen: Math.max(--state.currentScreen, 0) });

app({
    init,
    view: state => $('div', {}, [
        $(SCREENS[state.currentScreen], state),
        $('div', { class: 'navigation' }, [
            state.currentScreen > 0 && $('a', { href: '#', onclick: gotoPreviousStep }, '<'),
            state.currentScreen < SCREENS.length - 1 && $('a', { href: '#', onclick: gotoNextStep }, '>')
        ]),
        $('div', {
            class: {
                toast: true,
                show: state.toast.show
            }
        }, state.toast.message)
    ]),
    node: document.getElementById("app")
});