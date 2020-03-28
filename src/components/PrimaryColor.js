import { h as $ } from 'hyperapp';
import ColumnLayout from '../layouts/ColumnLayout';
import ColorPicker from '../components/ColorPicker';
import ColorService from '../services/ColorService';

import './Component.css';
import './ColorPicker.css';

const colorService = new ColorService();

const PrimaryColor = ({ primaryColor, grey, darkMode, primaryColorUndoStack, primaryColorRedoStack }) => {
    const primaryColorShades = colorService.getColorShades(primaryColor);
    const greyShades = colorService.getGreyShades(primaryColor, grey);

    return $(ColumnLayout, {
        center: true,
        reverse: true,
        children: [
            $('div', { class: 'color-picker' }, [
                $('h1', { class: 'title' }, 'Pick your primary color'),
                $('div', { class: 'color-input-container' }, [
                    $(ColorPicker, {
                        initialHue: primaryColor.h,
                        colorKey: 'primaryColor',
                        undoColorStack: primaryColorUndoStack,
                        redoColorStack: primaryColorRedoStack
                    })
                ])
            ]),
            $('div', { class: 'color-preview' }, [
                $('button', {
                    class: 'button-primary-color', style: {
                        backgroundColor: primaryColorShades[3]
                    }
                }, 'Primary Button'),
                $('div', {
                    class: 'alert-primary-color', style: {
                        borderColor: darkMode ? primaryColorShades[1] : primaryColorShades[7],
                        backgroundColor: darkMode ? primaryColorShades[0] : primaryColorShades[8]
                    }
                }, [
                    $('p', {
                        class: 'alert-title', style: {
                            color: darkMode ? primaryColorShades[7] : primaryColorShades[0]
                        }
                    }, 'Our privacy policy has changed'),
                    $('p', {
                        class: 'alert-body', style: {
                            color: darkMode ? primaryColorShades[6] : primaryColorShades[1]
                        }
                    }, 'Make sure you know how these changes affect you.')
                ]),
                $('form', {
                    class: 'form', style: {
                        backgroundColor: darkMode ? greyShades[0] : greyShades[8],
                        borderColor: darkMode ? greyShades[2] : greyShades[6]
                    }
                }, [
                    $('h2', { style: { color: darkMode ? greyShades[7] : greyShades[0] } }, 'Personal information'),
                    $('p', { style: { color: darkMode ? greyShades[4] : greyShades[2] } }, 'This is your personal information. This information will be shown publicly.'),
                    $('h3', { style: { color: darkMode ? greyShades[7] : greyShades[0] } }, 'First Name'),
                    $('input', { type: 'text', style: { borderColor: darkMode ? greyShades[2] : greyShades[6] } }),
                    $('h3', { style: { color: darkMode ? greyShades[7] : greyShades[0] } }, 'Last Name'),
                    $('input', { type: 'text', style: { borderColor: darkMode ? greyShades[2] : greyShades[6] } }),
                    $('h3', { style: { color: darkMode ? greyShades[7] : greyShades[0] } }, 'Email'),
                    $('input', { type: 'email', style: { borderColor: darkMode ? greyShades[2] : greyShades[6] } }),
                    $('div', { class: 'form-buttons' }, [
                        $('button', {
                            type: 'submit', class: 'button-primary-color', style: {
                                backgroundColor: primaryColorShades[3]
                            }
                        }, 'Submit')
                    ])
                ])
            ])
        ]
    });
}

export default PrimaryColor;