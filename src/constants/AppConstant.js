import PrimaryColor from '../components/PrimaryColor';
import AccentColor from '../components/AccentColor';
import ColorSystem from '../components/ColorSystem';

const SCREENS = [
    PrimaryColor,
    AccentColor,
    ColorSystem,
];

const hueOffset = [-18, -14, -10, -6, -2, 0, 0, 0, 0];
const saturation = [90, 90, 90, 70, 80, 90, 90, 90, 90];
const lightness = [20, 30, 40, 50, 60, 70, 80, 90, 95];
const COLOR = {
    hueOffset, saturation, lightness
}

export { SCREENS, COLOR };