import { makeStyles } from "@material-ui/core/styles";
import colors from "../../utils/colors";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: colors.white,
    border: "1px solid #F2F2F2",
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.15)",
    borderRadius: "20px",
    padding: theme.spacing(2, 4, 3),
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  boxIcon: {
    marginTop:30,
    width: "100%",
    textAlign: "center",
  },
  boxButtons: {
    display: "flex",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const styles = {
  titleBold: {
    fontFamily: "Mulish",
    fontWeight: "bold",
    fontSize: 20,
    color: colors.darkMode,
    marginTop: 30,
    marginBottom: 30,
  },
  subtitleCard: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 16,
    color: colors.gray,
    marginLeft: 20,
    marginRight: 20,
    flexWrap: "wrap",
    textAlign: "center"
  },
};

export default useStyles;
