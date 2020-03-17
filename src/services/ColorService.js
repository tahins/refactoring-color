import { COLOR } from '../constants/AppConstant';

class ColorService {
    getColorShades(color) { return this.__getShades(this.__getColorShade(color)) };
    getGreyShades(color, grey) { return this.__getShades(this.__getGreyShade(color, grey)); }

    __getShades(getShade) {
        return COLOR.lightness.map((lightness, index) => {
            const hueOffset = COLOR.hueOffset[index];
            const saturation = COLOR.saturation[index];
            return getShade({ hueOffset, lightness, saturation });
        });
    }
    __getColorShade(color) {
        return ({ hueOffset, lightness, saturation }) => `hsl(${color.h + hueOffset}, ${saturation}%, ${lightness}%)`;
    }
    __getGreyShade(color, grey) { return ({ lightness }) => `hsl(${color.h}, ${grey.s}%, ${lightness}%)`; }
}

export default ColorService;