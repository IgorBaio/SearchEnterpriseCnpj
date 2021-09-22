import { makeStyles } from "@material-ui/core/styles";
import colors from "../../utils/colors";

const useStyles = makeStyles((theme)=>({

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
  button:{
    '&:hover': {
      backgroundColor: colors.platinum
    },
  }
})
);

export default useStyles;
