import {createTheme as createMuiTheme} from '@mui/material';
import breakpoints from './breakpoints';
import typography from './typography';
import createThemedComponents from './components';
import {THEME} from './types';
import palette from './palette';
import {DefaultPaletteOptions} from './defaultPaletteInterface';

const createTheme = (name: THEME) => {
    let themePalette = palette[name];

    if (!themePalette) {
        console.warn(new Error(`The theme ${name} is not valid`));
        themePalette = palette[THEME.DEFAULT];
    }

    return createMuiTheme(
        {
            spacing: 4,
            breakpoints: breakpoints,
            components: createThemedComponents(themePalette as DefaultPaletteOptions),
            typography: typography,
            palette: themePalette,
        },
        {
            name,
        },
    )
}

export default createTheme;