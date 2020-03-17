import { h as $, app } from "hyperapp";
import { SCREENS } from "./src/constants/AppConstant";
import Stack from './src/utils/Stack';

import './index.css';
import './toast.css';

const init = {
    darkMode: false,
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

const toggleDarkMode = (state) => ({ ...state, darkMode: !state.darkMode });
const gotoNextStep = state => ({ ...state, currentScreen: Math.min(++state.currentScreen, SCREENS.length - 1) });
const gotoPreviousStep = state => ({ ...state, currentScreen: Math.max(--state.currentScreen, 0) });

app({
    init: [init, initializeStack()],
    view: state => $('div', { class: { dark: state.darkMode } }, [
        $(SCREENS[state.currentScreen], {
            ...state,
            primaryColorUndoStack, accentColorUndoStack,
            primaryColorRedoStack, accentColorRedoStack
        }),
        $('div', { class: 'topbar' }, [
            $('a', { href: '#', title: "Toggle darkness!!!", onclick: toggleDarkMode }, [
                $('i', { class: { fas: true, 'fa-moon': !state.darkMode, 'fa-sun': state.darkMode } })
            ]),
            $('a', { href: 'https://github.com/tahins/refactoring-color', target: '_blank' }, [
                $('i', { class: 'fab fa-github' })
            ]),
            $('a', { href: 'https://twitter.com/tahins', target: '_blank' }, [
                $('i', { class: 'fab fa-twitter' })
            ])
        ]),
        $('div', { class: 'navigation' }, [
            state.currentScreen > 0 && $('a', { href: '#', onclick: gotoPreviousStep }, [
                $('i', { class: 'fas fa-angle-left' })
            ]),
            state.currentScreen < SCREENS.length - 1 && $('a', { href: '#', onclick: gotoNextStep }, [
                $('i', { class: 'fas fa-angle-right' })
            ])
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