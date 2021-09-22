import React from "react";
import {
  Input,
  InputLabel,
  Box,
  Typography,
} from "@material-ui/core";
import useStyles, { style } from "./styles";
import InputMask from "react-input-mask";
export default function TextInput({
  id,
  label,
  styleInput,
  error,
  startAdornment,
  endAdornment,
  inputRef,
  placeholder,
  withMask,
  mask,
  alwaysShowMask,
  ...other
}) {
  const styles = useStyles();

  return (
    <Box className={styles.inputWrapper}>
      <InputLabel htmlFor={id} style={style.label}>
        {label}
      </InputLabel>
      {withMask ? (
        <InputMask mask="99.999.999/9999-99"
        alwaysShowMask={alwaysShowMask || false}
         {...other}>
           {(other)=>
          <Input
          inputProps={{
            className: styles.input,
            style: styleInput,
          }}
          className={styles.input}
          style={styleInput}
          placeholder={placeholder}
          startAdornment={startAdornment || null}
          endAdornment={endAdornment || null}
          id={id}
          inputRef={inputRef || null}
        />
        }
        </InputMask>

      ) :
        <Input
          inputProps={{
            className: styles.input,
            style: styleInput,
          }}
          placeholder={placeholder}
          id={id}
          startAdornment={startAdornment || null}
          endAdornment={endAdornment || null}
          inputRef={inputRef || null}
          onBlur={other.onBlur || null}
          {...other}
        />
      }
      {error && (
        <Typography className={styles.labelError}>
          {error.toUpperCase()}
        </Typography>
      )}
    </Box>
  );
}
