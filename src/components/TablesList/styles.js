import { makeStyles } from "@material-ui/core/styles";
import colors from "../../utils/colors";

const useStyles = makeStyles({
  tableContainer: {
    marginBottom: 50,
  },
  table: {
    padding: 0,
    margin: 0,
  },
  textHeader: {
    fontSize: 14,
    color: "#c4c4c4",
    fontWeight: "800",
    fontFamily: "MontSerrat",
    borderBottomWidth: 2.5,
    borderBottomStyle: "solid",
    backgroundColor: colors.white,
    paddingBottom: 15,
    textTransform: "uppercase",
  },
  header: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
    borderBottomWidth: 3,
  },
});

export default useStyles;
