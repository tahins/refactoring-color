import { h as $ } from 'hyperapp';
import ColumnLayout from '../layouts/ColumnLayout';
import ColorPicker from '../components/ColorPicker';

import './Component.css';
import './ColorPicker.css';

const changeColor = (state, event) => ({
    ...state,
    accentHue: event.target.value,
    accentColor: { h: event.target.value, s: 100, l: 40 }
});

const AccentColor = ({ accentColor, primaryColor }) => $(ColumnLayout, {
    center: true,
    reverse: true,
    children: [
        $('div', { class: 'color-picker' }, [
            $('h1', { class: 'title' }, 'Pick your accent color'),
            $('div', { class: 'color-input-container' }, [
                $(ColorPicker, {
                    initialHue: accentColor.h,
                    onChangeColor: changeColor
                })
            ])
        ]),
        $('div', { class: 'color-preview' }, [
            $('div', {
                class: 'card-accent-border', style: {
                    borderTopColor: `hsl(${accentColor.h}, ${accentColor.s}%, ${accentColor.l}%)`
                }
            }, [
                'One simple trick that can make a big difference is to add colorful accent borders to parts of your interface that would otherwise feel a bit bland.',
                $('button', {
                    class: 'button-primary-color button-card', style: {
                        backgroundColor: `hsl(${primaryColor.h}, ${primaryColor.s}%, ${primaryColor.l}%)`
                    }
                }, 'Primary Button')
            ]),
            $('div', { class: 'card' }, [
                $('div', { class: 'menu-item' }, [
                    $('div', { class: 'circle-icon' }),
                    $('span', { class: 'menu-label' }, 'Dashboard'),
                ]),
                $('div', { class: 'menu-item' }, [
                    $('div', { class: 'circle-icon' }),
                    $('span', { class: 'menu-label' }, 'Inbox'),
                    $('span', {
                        class: 'badge-accent-color', style: {
                            color: `hsl(${accentColor.h}, ${accentColor.s}%, 20%)`,
                            backgroundColor: `hsl(${accentColor.h}, ${accentColor.s}%, 80%)`
                        }
                    }, 'New')
                ])
            ])
        ])
    ]
});

export default AccentColor;