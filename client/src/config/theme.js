import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#212529',
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