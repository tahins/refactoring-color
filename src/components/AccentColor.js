import { h as $ } from 'hyperapp';
import ColumnLayout from '../layouts/ColumnLayout';
import ColorPicker from '../components/ColorPicker';
import ColorService from '../services/ColorService';

import './Component.css';
import './ColorPicker.css';

const colorService = new ColorService();

const AccentColor = ({ accentColor, primaryColor, accentColorUndoStack, accentColorRedoStack }) => {
    const primaryColorShades = colorService.getColorShades(primaryColor);
    const accentColorShades = colorService.getColorShades(accentColor);

    return $(ColumnLayout, {
        center: true,
        reverse: true,
        children: [
            $('div', { class: 'color-picker' }, [
                $('h1', { class: 'title' }, 'Pick your accent color'),
                $('div', { class: 'color-input-container' }, [
                    $(ColorPicker, {
                        initialHue: accentColor.h,
                        colorKey: 'accentColor',
                        undoColorStack: accentColorUndoStack,
                        redoColorStack: accentColorRedoStack
                    })
                ])
            ]),
            $('div', { class: 'color-preview' }, [
                $('div', {
                    class: 'card-accent-border', style: {
                        borderTopColor: accentColorShades[3]
                    }
                }, [
                    'One simple trick that can make a big difference is to add colorful accent borders to parts of your interface that would otherwise feel a bit bland.',
                    $('button', {
                        class: 'button-primary-color button-card', style: {
                            backgroundColor: primaryColorShades[2]
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
                                color: accentColorShades[0],
                                backgroundColor: accentColorShades[7]
                            }
                        }, 'New')
                    ])
                ])
            ])
        ]
    });
}
export default AccentColor;