import { h as $ } from 'hyperapp';
import ColumnLayout from '../layouts/ColumnLayout';
import ColorPicker from '../components/ColorPicker';

const changeColor = (state, event) => ({
    ...state,
    primaryColor: { h: event.target.value, s: 100, l: 40 }
});

const PrimaryColor = ({ primaryColor }) => $(ColumnLayout, {
    children: [
        $('div', { class: 'color-picker' }, [
            $('h1', { class: 'title' }, 'Pick your primary color'),
            $('div', { class: 'color-input-container' }, [
                $(ColorPicker, {
                    initialHue: primaryColor.h,
                    onChangeColor: changeColor
                })
            ])
        ]),
        $('div', { class: 'color-preview' }, [
            $('button', {
                class: 'button-primary-color', style: {
                    backgroundColor: `hsl(${primaryColor.h}, ${primaryColor.s}%, ${primaryColor.l}%)`
                }
            }, 'Primary Button')
        ])
    ]
});

export default PrimaryColor;