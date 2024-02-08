import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#212529',
        },
        red: {
            main: '#a20404'
        },
        green: {
            main: '#249a0d'
        },
        error: {
            main: red.A400,
        },
        background: {
            paper: '#212529'
        }
    },
});
export default theme;