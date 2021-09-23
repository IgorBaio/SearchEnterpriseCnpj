import { makeStyles } from "@material-ui/core/styles";
import colors from "../../utils/colors";

const useStyles = makeStyles(
    {
    noReposMessage: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.darkMode,
      alignSelf: "center",
      textAlign: "center",
      margin: "5%",
    },
    link: { color: colors.oldBurgundy, fontWeight: "bold" },
    author: { color: colors.darkModeSecondary, fontWeight: "700" },
    boxButtons:{
      marginTop: "-2%",
      marginBottom: "5%",
      alignSelf: "center",
    },
    registerSucess: {
      color: colors.green,
      marginLeft: 5,
      fontSize: 16,
      fontWeight: "800",
    },
    checkIcon: {
      color: colors.green,
    },
    registerSucessArea: {
      display: "flex",
      flex: 1,
      marginBottom: 30,
      justifyContent: "center",
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
  }
);

export default useStyles;
