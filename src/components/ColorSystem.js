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

const onShadeClick = (state, colorCode) => [state, copyColorCode(state, colorCode)];

const copyColorCode = (state, colorCode) => [state, (() => {
    navigator.clipboard.writeText(colorCode);
    showToast(`${colorCode} copied!`);
    timeout(hideToast, { delay: 3000 });
})()];

const showToast = message => console.log(message);
const hideToast = () => console.log('hide toast');

const ColorSystem = ({ primaryColor, accentColor, grey, red, green, yellow }) => $('div', { class: 'container' }, [
    $('h1', {}, 'Your color pallete'),
    $('p', {}, 'Click on any color to copy the color code'),
    $(ColumnLayout, {
        children: [
            $('div', {}, [
                $('h2', {}, 'Primary color shades'),
                $('div', { class: 'shades-container' }, getColorShades(primaryColor)),
                $('h2', {}, 'Accent color shades'),
                $('div', { class: 'shades-container' }, getColorShades(accentColor)),
                $('h2', {}, 'Grey shades'),
                $('div', { class: 'shades-container' }, getGreyShades(primaryColor, grey))
            ]),
            $('div', {}, [
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