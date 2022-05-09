import {PaletteOptions, SimplePaletteColorOptions} from '@mui/material';

export interface DefaultPaletteOptions extends PaletteOptions {
    primary?: SimplePaletteColorOptions;
    secondary?: SimplePaletteColorOptions;
}
