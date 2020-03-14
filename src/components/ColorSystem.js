import { h as $ } from 'hyperapp';
import { timeout } from "@hyperapp/time";
import ColumnLayout from '../layouts/ColumnLayout';

import './ColorSystem.css';

const colorLightness = [10, 20, 30, 40, 50, 60, 70, 80, 90]

const getColorShades = color => getShades(getColorShade(color));
const getGreyShades = (primaryColor, grey) => getShades(getGreyShade(primaryColor, grey));

const getShades = getShade => colorLightness.map(lightness => {
    const colorCode = getShade(lightness);
    return $('div', {
        class: 'color-container', title: 'Click to copy color code',
        onclick: [onShadeClick, colorCode],
        style: {
            backgroundColor: colorCode
        }
    });
});
const getColorShade = color => lightness => `hsl(${color.h}, ${color.s}%, ${lightness}%)`;
const getGreyShade = (primaryColor, grey) => lightness => `hsl(${primaryColor.h}, ${grey.s}%, ${lightness}%)`;

const onShadeClick = (state, colorCode) => showToast(state, colorCode);

const showToast = (state, colorCode) => [{
    ...state,
    toast: { show: true, message: `${colorCode} copied!` }
}, timeout(hideToast, { delay: 3000 })];

const hideToast = state => ({
    ...state,
    toast: { show: false, message: '' }
});

const ColorSystem = ({ primaryColor, accentColor, grey, red, green, yellow }) => $('div', { class: 'container' }, [
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
                $('div', { class: 'shades-container' }, getGreyShades(primaryColor, grey))
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

export default ColorSystem;