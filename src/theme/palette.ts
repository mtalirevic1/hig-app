import {THEME} from './types';
import {PaletteOptions} from '@mui/material';

type ThemePalette = {
    [p in THEME]: PaletteOptions;
};

const palette : ThemePalette = {
    [THEME.DEFAULT]: {
        primary: {
            main: '#880E4FFF',
            contrastText: '#FFF'
        },
        secondary: {
            main: '#283593FF',
            contrastText: '#FFF'
        }
    },
    [THEME.BLUE]: {}
}

export default palette;