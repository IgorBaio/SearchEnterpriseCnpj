import { makeStyles } from '@material-ui/core/styles'
import colors from '../../utils/colors'

const useStyles = makeStyles(theme => ({
    input: {
        color: colors.gray,
        '&::placeholder': {
            color: colors.gray,
            [theme.breakpoints.down('xs')] : {
                fontSize: 14
            }
        },
    },
    inputWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
    },
    labelError: {
        marginBottom: 5,
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        paddingLeft: 5,
        color: colors.perfectRed,
    },
}))

const style = {
    label: {
        color: colors.darkModeSecondary,
        fontFamily: 'Mulish',
        fontWeight: 800,
        textTransform: 'uppercase',
        fontSize: 12,
    },
    '&::placeholder': {
        color: colors.gray,
    },
}

export { style }
export default useStyles
