import React from 'react';
import {Button, ThemeProvider} from '@mui/material';
import createTheme from './theme';
import {THEME} from './theme/types';

const App = () => {
    const theme = createTheme(THEME.DEFAULT);
    return (
        <ThemeProvider theme={theme}>
        <div className="App" style={{backgroundColor: 'black'}}>
            <h1>Text</h1>
            <Button variant='contained'>Test</Button>
        </div>
        </ThemeProvider>
    );
}

export default App;
