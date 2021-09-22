import React from "react";
import PropTypes from "prop-types";
import { Box, Fade, Typography, Modal, Backdrop } from "@material-ui/core";
import useStyles, { styles } from "./styles";

const ModalAlert = ({ isVisible, onDismiss, resultTransition }) => {
  const classes = useStyles();
  let styleSubTitle = styles.subtitleCardModal;
  styleSubTitle = resultTransition.statusColor
    ? { ...styleSubTitle, marginLeft: 30, marginRight: 30 }
    :  styleSubTitle ;

  styleSubTitle =
    resultTransition.statusColor && !resultTransition.btn
      ? { ...styleSubTitle, marginBottom: 20 }
      : { styleSubTitle };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isVisible}
      onClose={onDismiss}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isVisible}>
        <Box className={classes.paper}>
          <Typography style={styles.titleBold}>
            {resultTransition.statusTitle}
          </Typography>
          <Typography style={styleSubTitle}>
            {resultTransition.statusDescription}
          </Typography>
          <Box className={classes.boxButtons}>
            {resultTransition.btn}
            {resultTransition.revisar || false}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

ModalAlert.propTypes = {
  isVisible: PropTypes.bool,
  animated: PropTypes.bool,
};

ModalAlert.defaultProps = {
  animated: true,
  isVisible: false,
};

export default ModalAlert;
