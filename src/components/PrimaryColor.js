import { h as $ } from 'hyperapp';
import ColumnLayout from '../layouts/ColumnLayout';
import ColorPicker from '../components/ColorPicker';
import ColorService from '../services/ColorService';

import './Component.css';
import './ColorPicker.css';

const colorService = new ColorService();

const PrimaryColor = ({ primaryColor, primaryColorUndoStack, primaryColorRedoStack }) => {
    const primaryColorShades = colorService.getColorShades(primaryColor);

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
                }, 'Primary Button')
            ])
        ]
    });
}

export default PrimaryColor;