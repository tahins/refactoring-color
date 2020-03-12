import { h as $, app } from "hyperapp";
import PrimaryColor from './src/components/PrimaryColor';
import AccentColor from './src/components/AccentColor';
import ColorSystem from './src/components/ColorSystem';

import './index.css';

const init = {
    steps: [
        PrimaryColor,
        AccentColor,
        ColorSystem,
    ],
    currentStep: 0,
    primaryColor: { h: 207, s: 90, l: 40 },
    accentColor: { h: 163, s: 90, l: 40 },
    grey: { h: 207, s: 10, l: 40 },
    red: { h: 0, s: 70, l: 40 },
    green: { h: 145, s: 55, l: 40 },
    yellow: { h: 50, s: 90, l: 40 }
};

const gotoNextStep = state => ({ ...state, currentStep: Math.min(++state.currentStep, state.steps.length - 1) });
const gotoPreviousStep = state => ({ ...state, currentStep: Math.max(--state.currentStep, 0) });

app({
    init,
    view: state => $('div', {}, [
        $(state.steps[state.currentStep], state),
        $('div', { class: 'navigation' }, [
            state.currentStep > 0 && $('a', { href: '#', onclick: gotoPreviousStep }, '< Previous'),
            state.currentStep < state.steps.length - 1 && $('a', { href: '#', onclick: gotoNextStep }, 'Next >')
        ])
    ]),
    node: document.getElementById("app")
});