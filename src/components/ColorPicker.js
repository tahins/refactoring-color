import { h as $ } from 'hyperapp';

const ColorPicker = ({ initialHue, onChangeColor }) => $('div', { class: 'hsl-color-picker' }, [
    $('div', { class: 'hsl-color-preview' }),
    $('input', {
        class: 'hsl-hue-input',
        type: 'range',
        value: initialHue, min: 0, max: 360,
        onchange: onChangeColor
    })
]);

export default ColorPicker;