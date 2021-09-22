import { makeStyles } from "@material-ui/core/styles";
import colors from "../../utils/colors";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
  },
  headerBox: {
    marginBottom: 40,
  },
  title: {
    fontFamily: "Mulish",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 800,
    lineHeight: "25px",
    letterSpacing: "0em",
    textAlign: "left",
    marginBottom: 10,
    color: colors.darkMode,
  },
  subTitle: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: "20px",

    color: colors.gray,
  },
  sectionContent: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 50,
    paddingRight: "8%",
    paddingLeft: "8%",
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
}));

export default useStyles;
