import { h as $, app } from "hyperapp";
import { SCREENS } from "./src/constants/AppConstant";
import Stack from './src/utils/Stack';

import './index.css';
import './toast.css';

const init = {
    currentScreen: 0,
    primaryColor: { h: 207, s: 70, l: 50 },
    accentColor: { h: 155, s: 70, l: 50 },
    grey: { h: 207, s: 10, l: 40 },
    red: { h: 0, s: 70, l: 40 },
    green: { h: 145, s: 55, l: 40 },
    yellow: { h: 50, s: 90, l: 40 },
    toast: { show: false, message: '' }
};

const primaryColorUndoStack = new Stack();
const accentColorUndoStack = new Stack();
const primaryColorRedoStack = new Stack();
const accentColorRedoStack = new Stack();
const initializeStack = () => {
    primaryColorUndoStack.push(init.primaryColor.h);
    accentColorUndoStack.push(init.accentColor.h);
}

const gotoNextStep = state => ({ ...state, currentScreen: Math.min(++state.currentScreen, SCREENS.length - 1) });
const gotoPreviousStep = state => ({ ...state, currentScreen: Math.max(--state.currentScreen, 0) });

app({
    init: [init, initializeStack()],
    view: state => $('div', {}, [
        $(SCREENS[state.currentScreen], {
            ...state,
            primaryColorUndoStack, accentColorUndoStack,
            primaryColorRedoStack, accentColorRedoStack
        }),
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