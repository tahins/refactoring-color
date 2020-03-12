import { h as $ } from 'hyperapp';
import DefaultLayout from '../layouts/DefaultLayout';

const colorLightness = [10, 20, 30, 40, 50, 60, 70, 80, 90]

const ColorSystem = ({ primaryColor, accentColor, grey, red, green, yellow }) => $(DefaultLayout, {
    children: [
        $('h2', {}, 'Primary color shades'),
        $('div', { class: 'shades-container' }, colorLightness.map(lightness => $('div', {
            class: 'color-container', style: {
                backgroundColor: `hsl(${primaryColor.h}, ${primaryColor.s}%, ${lightness}%)`
            }
        }))),
        $('h2', {}, 'Accent color shades'),
        $('div', { class: 'shades-container' }, colorLightness.map(lightness => $('div', {
            class: 'color-container', style: {
                backgroundColor: `hsl(${accentColor.h}, ${accentColor.s}%, ${lightness}%)`
            }
        }))),
        $('h2', {}, 'Grey shades'),
        $('div', { class: 'shades-container' }, colorLightness.map(lightness => $('div', {
            class: 'color-container', style: {
                backgroundColor: `hsl(${primaryColor.h}, ${grey.s}%, ${lightness}%)`
            }
        }))),
        $('h2', {}, 'Green shades'),
        $('div', { class: 'shades-container' }, colorLightness.map(lightness => $('div', {
            class: 'color-container', style: {
                backgroundColor: `hsl(${green.h}, ${green.s}%, ${lightness}%)`
            }
        }))),
        $('h2', {}, 'Red shades'),
        $('div', { class: 'shades-container' }, colorLightness.map(lightness => $('div', {
            class: 'color-container', style: {
                backgroundColor: `hsl(${red.h}, ${red.s}%, ${lightness}%)`
            }
        }))),
        $('h2', {}, 'Yellow shades'),
        $('div', { class: 'shades-container' }, colorLightness.map(lightness => $('div', {
            class: 'color-container', style: {
                backgroundColor: `hsl(${yellow.h}, ${yellow.s}%, ${lightness}%)`
            }
        })))
    ]
});

export default ColorSystem;