import {Components} from '@mui/material';
import {DefaultPaletteOptions} from './defaultPaletteInterface';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        gradient: true;
    }
}


const createThemedComponents = (palette: DefaultPaletteOptions) => {

    const borderStyle = {
        borderRadius: 12.5,
        border: `2px solid ${palette.primary?.contrastText}`
    }

    const components: Components = {
        MuiButton: {
            variants: [
                {
                    props: {
                        variant: 'gradient',
                    },
                    style: {
                        background: `linear-gradient(90deg, ${palette.primary?.main} 30%, ${palette.secondary?.main} 90%)`,
                        color: palette.primary?.contrastText
                    }
                }
            ],
            styleOverrides: {
                root: {
                    ...borderStyle
                }
            }
        }
    }
    return components;
}

export default createThemedComponents;