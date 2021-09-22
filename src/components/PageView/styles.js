import { makeStyles } from "@material-ui/core/styles";
import colors from "../../utils/colors";

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    color: colors.semiWhite,
    fontSize: 26,
    fontWeight: 800,
    fontFamily: "Mulish",
    [theme.breakpoints.down('sm')]: {
      marginTop: 25
    }
  },
  container: {
    backgroundColor: colors.line,
    width: "100%",
    height: "100%",
    maxWidth: "100vw",
  },
  header: {
    position: "relative",
    zIndex: 10,
  },
  bgHeader: {
    top: 0,
    left: 0,
    zIndex: 1,
    backgroundImage:
      "linear-gradient(170.12deg, #1C0C1C -27.01%, #1c0c0c 34.82%, #0c0c0c 68.01%, #1c1c1c 95.92%)",
    maxHeight: 400,
    height: "40vh",
    position: "absolute",
    width: "100vw",
    minHeight: 350,
  },
  headerTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 35,
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 10,
      height: "20%",
    },
  },
  infoUserWrapper: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')] : {
      marginTop: 30
    },    
  },
  infoUser: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    cursor: 'pointer',
    [theme.breakpoints.down('sm')] : {
      flexDirection: 'column'
    }
  },
  subHeader: {
    height: 200,
    display: "flex",
    alignItems: "center",
    "& div": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 3,
        height: 50,
      },
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 3,
        height: 30,
      },
    },
  },
  page: {
    position: "relative",
    height: "100vh",
    zIndex: 100,
    [theme.breakpoints.down("sm")]: {
      marginTop: '10%',
    },
  },
}));

export default useStyles;
