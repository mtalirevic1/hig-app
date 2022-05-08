import {createTheme as createMuiTheme} from '@mui/material';
import variants from './variants';
import breakpoints from './breakpoints';
import typography from './typography';
import components from './components';
import {THEME} from './types';

const createTheme = (name: THEME) => {
    let themeConfig = variants.find((variant) => variant.name === name)

    if (!themeConfig) {
        console.warn(new Error(`The theme ${name} is not valid`));
        themeConfig = variants[0];
    }

    return createMuiTheme(
        {
            spacing: 4,
            breakpoints: breakpoints,
            components: components,
            typography: typography,
            palette: themeConfig.palette,
        },
        {
            name: themeConfig.name,
        },
    )
}

export default createTheme;