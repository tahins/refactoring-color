import { h as $ } from 'hyperapp';
import { timeout } from "@hyperapp/time";
import ColumnLayout from '../layouts/ColumnLayout';
import ColorService from '../services/ColorService';

import './ColorSystem.css';

const colorService = new ColorService();
let greyColorShades;

const getColorShades = color => {
    const colorShades = colorService.getColorShades(color);
    return colorShades.map((colorCode, index) => getShade(colorCode, index));
};
const getGreyShades = (color, grey) => {
    greyColorShades = colorService.getGreyShades(color, grey);
    return greyColorShades.map((colorCode, index) => getShade(colorCode, index));
};
const getShade = (colorCode, index) => $('div', {}, [
    $('div', {
        class: 'color-container', title: 'Click to copy color code',
        onclick: [onShadeClick, colorCode],
        style: {
            backgroundColor: colorCode
        }
    }),
    $('p', { class: 'shade-index', style: { color: greyColorShades[3] } }, index + 1)
]);

const onShadeClick = (state, colorCode) => {
    copyText(colorCode);
    return showToast(state, colorCode)
};

const copyText = text => navigator.clipboard.writeText(text);

const showToast = (state, colorCode) => [{
    ...state,
    toast: { show: true, message: `${colorCode} copied!` }
}, timeout(hideToast, { delay: 3000 })];

const hideToast = state => ({
    ...state,
    toast: { show: false, message: '' }
});

const ColorSystem = ({ primaryColor, accentColor, grey, red, green, yellow }) => {
    const greyShades = getGreyShades(primaryColor, grey);
    return $('div', { class: 'container' }, [
        $('div', { class: 'section' }, [
            $('h1', {}, 'Your color palette'),
            $('p', {}, 'Click on any color to copy the color code'),
        ]),
        $(ColumnLayout, {
            children: [
                $('div', { class: 'section' }, [
                    $('h2', {}, 'Primary color shades'),
                    $('div', { class: 'shades-container' }, getColorShades(primaryColor)),
                    $('h2', {}, 'Accent color shades'),
                    $('div', { class: 'shades-container' }, getColorShades(accentColor)),
                    $('h2', {}, 'Grey shades'),
                    $('div', { class: 'shades-container' }, greyShades)
                ]),
                $('div', { class: 'section' }, [
                    $('h2', {}, 'Green shades'),
                    $('div', { class: 'shades-container' }, getColorShades(green)),
                    $('h2', {}, 'Red shades'),
                    $('div', { class: 'shades-container' }, getColorShades(red)),
                    $('h2', {}, 'Yellow shades'),
                    $('div', { class: 'shades-container' }, getColorShades(yellow))
                ])
            ]
        })
    ]);
}

export default ColorSystem;