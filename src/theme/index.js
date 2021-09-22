import { createMuiTheme } from '@material-ui/core/styles';

import colors from '../utils/colors';

const defaultTheme = createMuiTheme()

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Montserrat',
    },
    palette: {
        primary: {
            main: colors.oldBurgundy,
        },
        error: {
            main: colors.perfectRed,
        },
    },
    overrides: {
  
        MuiInput: {
            input: {
                color: colors.gray,
                border:0,
                [defaultTheme.breakpoints.down('xs')]:{
                    lineHeight: '14px'
                },
                '&::placeholder': {
                    color: colors.gray,
                    fontStyle: 'italic',
                    [defaultTheme.breakpoints.down('xs')]: {
                        fontSize: '14px'
                    }
                    
                },
            },
        },
        MuiButtonBase: {
            root: {
                textTransform: 'capitalize'
            }
        },

        MuiFormLabel: {
            root: {
                color: colors.gray,
                "&$error": {
                    color: colors.perfectRed,
                },
            },
         
        },

        MuiInputLabel: {
            root: {
                color: colors.gray,
                "&$error": {
                    color: colors.perfectRed,
                },
            },
        
        },
      
        MuiSelect : {
            root: {
                select: {
                    [defaultTheme.breakpoints.down('xs')]:{
                        lineHeight: '14px'
                    },
                    '&::placeholder': {
                        color: colors.gray,
                        fontStyle: 'italic',
                        [defaultTheme.breakpoints.down('xs')]: {
                            fontSize: '14px'
                        }                        
                    }
                }
             
            }
        },
        MuiPaper : {
            rounded : {
                borderRadius: 10
            }
        }
    },
});

export default theme;
