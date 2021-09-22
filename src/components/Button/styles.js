import { makeStyles } from "@material-ui/core/styles";
import colors from "../../utils/colors";

const useStyles = makeStyles((theme) => ({
  buttonDefault: {
    marginRight: 20,
    marginLeft: 20,
    padding: 13,
    borderRadius: 24,
    width: 235,
    height: 48,
    backgroundColor: colors.darkMode,
    borderWidth: 1,
    borderColor: colors.darkMode,
    "&:hover": {
      backgroundColor: colors.darkModeSecondary,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 20,
      paddingRight: 50,
      paddingLeft: 50,
      borderRadius: 80,
    },
  },
  buttonOutline: {
    marginRight: 20,
    marginLeft: 20,
    padding: 13,
    borderRadius: 24,
    width: 235,
    height: 48,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.darkMode,
    "&:hover": {
      backgroundColor: colors.semiWhite,
      borderColor: colors.darkModeSecondary,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 20,
      paddingRight: 50,
      paddingLeft: 50,
      borderRadius: 80,
    },
  },
  textDefault: {
    color: colors.white,
    fontWeight: 800,
  },
  textOutline: {
    color: colors.darkMode,
    fontWeight: 800,
    "&:hover": {
      color: colors.darkModeSecondary,
    },
  },
}));

export default useStyles;
