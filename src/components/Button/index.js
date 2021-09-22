import React from "react";
import { Button, Box, Typography } from "@material-ui/core";
import useStyles from "./styles";

const CustomButton = (props) => {
  const { textButton, styleText, ...other } = props;
  const classes = useStyles();

  return (
    <Box>
      <Button
        className={
          props.variant && props.variant === "outlined"
            ? classes.buttonOutline
            : classes.buttonDefault
        }
        {...other}
      >
        <Typography
          style={styleText}
          className={
            props.variant && props.variant === "outlined"
              ? classes.textOutline
              : classes.textDefault
          }
        >
          {textButton || props.children}
        </Typography>
      </Button>
    </Box>
  );
};

export default CustomButton;
