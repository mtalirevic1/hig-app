import {THEME} from './types';
import {PaletteOptions} from '@mui/material';

type ThemeVariant = {
    name: THEME,
    palette: PaletteOptions
}

const defaultVariant: ThemeVariant = {
    name: THEME.DEFAULT,
    palette: {}
}

const blueVariant: ThemeVariant = {
    name: THEME.BLUE,
    palette: {}
}

const variants = [defaultVariant, blueVariant];

export default variants;