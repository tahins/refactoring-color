import { h as $ } from 'hyperapp';

let pickerUndoStack;
let pickerRedoStack;
let pickerColorKey;
const pushInStack = colorHue => {
    if (pickerUndoStack.peek() !== colorHue) pickerUndoStack.push(colorHue);
};

const undo = state => {
    pickerRedoStack.push(pickerUndoStack.pop());
    return { ...state, [pickerColorKey]: { h: pickerUndoStack.peek(), s: 100, l: 40 } }
};

const redo = state => {
    pickerUndoStack.push(pickerRedoStack.pop());
    return { ...state, [pickerColorKey]: { h: pickerUndoStack.peek(), s: 100, l: 40 } }
};

const changeColorEndHandler = (state, event) => [
    { ...state },
    pushInStack(parseInt(event.target.value))
];

const changeColorHandler = (state, event) => ({
    ...state,
    [pickerColorKey]: { h: parseInt(event.target.value), s: 100, l: 40 }
});

const ColorPicker = ({ initialHue, colorKey, undoColorStack, redoColorStack }) => {
    pickerColorKey = colorKey;
    pickerUndoStack = undoColorStack;
    pickerRedoStack = redoColorStack;

    return $('div', { class: 'hsl-color-picker' }, [
        $('div', { class: 'hsl-color-preview' }),
        $('input', {
            class: 'hsl-hue-input',
            type: 'range',
            value: initialHue, min: 0, max: 360,
            oninput: changeColorHandler,
            onchange: changeColorEndHandler
        }),
        $('div', { class: 'btn-container' }, [
            $('button', { class: 'btn', disabled: pickerUndoStack.count() <= 1, onclick: undo }, [
                $('i', { class: 'fas fa-undo-alt' }),
                $('span', {}, 'Undo')
            ]),
            $('button', { class: 'btn', disabled: pickerRedoStack.count() <= 0, onclick: redo }, [
                $('span', {}, 'Redo'),
                $('i', { class: 'fas fa-redo-alt' })
            ])
        ])
    ]);
}

export default ColorPicker;