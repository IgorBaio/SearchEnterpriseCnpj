import { makeStyles } from "@material-ui/core/styles";
import colors from "../../utils/colors";

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    color: colors.semiWhite,
    fontSize: 18,
    fontWeight: 800,
    marginLeft:'1%',
    fontFamily: "Mulish",
    [theme.breakpoints.down('sm')]: {
      marginTop: 28,
      fontSize:11
    }
  },
  linkPageTitle: {
    color: colors.secondBlue,
    fontSize: 18,
    fontWeight: 800,
    marginLeft:'1%',
    fontFamily: "Mulish",
    [theme.breakpoints.down('sm')]: {
      marginTop: 28,
      fontSize:11
    }
  },
  profileImage:{
      width: 120,
      borderRadius: "20%",
      border: `2px solid ${colors.platinum}`,
      [theme.breakpoints.down('sm')] : {
        alignSelf:'flex-end',
        margin:10,
        marginTop:-80,
      },
      [theme.breakpoints.down('xs')] : {
        alignSelf:'flex-end',
        margin:10,
        marginTop:-100,
        width: 80,
      }
    },
  
  iconUser: {
    color: colors.platinum,
    marginLeft: 15,
    [theme.breakpoints.down('sm')] : {
      margin: 0,
      marginTop: 40,
      marginBottom: 20
    }
  },
  userData:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down('sm')] : {
      flexDirection: "column",
    }
  }
}));

export default useStyles;
