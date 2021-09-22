import { makeStyles } from "@material-ui/core/styles";
import colors from "../../../../utils/colors";

const useStyles = makeStyles((theme) => ({
  buttonsContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  starred: {
    margin: 20,
    backgroundColor: colors.darkMode,
    borderRadius: 24,
    width: 235,
    height: 48,
    "&:hover": {
      backgroundColor: colors.darkModeSecondary,
    },
  },
  repos: {
    margin: 20,
    backgroundColor: colors.white,
    border: `1px solid ${colors.darkMode}`,
    borderRadius: 24,
    width: 235,
    height: 48,
    "&:hover": {
      backgroundColor: colors.semiWhite,
      borderColor: colors.darkModeSecondary,
    },
  },
  text: {
    paddingLeft: 20,
    paddingRight: 20,
    color: colors.white,
    fontWeight: "800",
    textTransform: "none",
    fontFamily: "mulish",
    size: 16,
  },
  textRepos: {
    paddingLeft: 20,
    paddingRight: 20,
    color: colors.darkMode,
    fontWeight: "800",
    textTransform: "none",
    fontFamily: "mulish",
    size: 16,
    "&:hover": {
      color: colors.darkModeSecondary,
    },
  },
}));

export default useStyles;
