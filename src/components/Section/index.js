import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";
import { Box, Typography, Fade } from "@material-ui/core";

export default function Section({visible, title, subTitle, children}) {
  const style = useStyles();

  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  return (
    <Fade in={isVisible} timeout={400}>
      <Box className={style.wrapper}>
        {title || subTitle ? (
          <Box className={style.headerBox}>
            <Typography className={style.title}>{title}</Typography>
            <Typography className={style.subTitle}>{subTitle}</Typography>
          </Box>
        ) : null}
        <Box className={style.sectionContent}>{children}</Box>
      </Box>
    </Fade>
  );
}

Section.defaultProps = {
  visible: true,
};

Section.propTypes = {
  visible: PropTypes.bool,
};
