import React from "react";
import useStyles from "./styles";
import { Box } from "@material-ui/core";

export default function BigCard(props) {
  const styles = useStyles();
  return (
    <Box
      className={styles.box}
      style={props.minHeight ? { minHeight: props.minHeight } : {}}
    >
      {props.children}
    </Box>
  );
}
