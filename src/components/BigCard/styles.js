import { makeStyles } from '@material-ui/core/styles'

import colors from '../../utils/colors'

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 45,
        paddingTop: 20,
        marginRight: '5%',
        '&:last-child': {
            marginRight: 0,
        },
        paddingRight: 40,
        paddingLeft: 40,
        [theme.breakpoints.down('xs')]: {
            paddingRight: 15,
            paddingLeft: 15,
        },
    },
}))

export default useStyles
