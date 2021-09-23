import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import {
  Container,
  Box,
  Typography,
  LinearProgress,
  Fade,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import {} from "../../store/actions";
import { makeStyles } from "@material-ui/core/styles";
import ROUTES from "../../utils/routes";

const useStyless = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
  },
});

export default function PageView({
  hasHeader = true,
  subHeader = null,
  pageContent = null,
  title,
  history,
}) {
  const styles = useStyles();
  const [progress, setProgress] = React.useState(0);
  const classes = useStyless();
  const [showLoading, setShowLoading] = useState(false);
  const globalState = useSelector((state) => state);

  useEffect(() => {
    const isLoading =
      globalState.form?.loading || globalState.enterprise?.loading;

    if (isLoading) {
      setProgress(0);
      setShowLoading(true);
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);

      return () => {
        clearInterval(timer);
      };
    } else {
      setProgress(100);
      setShowLoading(false);
      setTimeout(() => {
        setProgress(0);
      }, 1000);
    }
  }, [globalState]);

  return (
    <Box id="wrapper" className={styles.container}>
      <div className={classes.root}>
        <Fade in={showLoading} timeout={1000}>
          <LinearProgress variant="determinate" value={progress} />
        </Fade>
      </div>
      {hasHeader && (
        <>
          <Box className={styles.bgHeader}></Box>
          <Box className={styles.header}>
            <Container maxWidth="lg">
              <Box className={styles.headerTop}>
                <Box className={styles.infoUserWrapper}>
                  <Box
                    onClick={() => history.push(ROUTES.home)}
                    className={styles.infoUser}
                  >
                    <Typography align="center" className={styles.pageTitle}>
                      {title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.subHeader}>
                <Box>{subHeader}</Box>
              </Box>
            </Container>
          </Box>
        </>
      )}
      <Box className={styles.page}>
        <Container maxWidth="lg">
          <Box>{pageContent}</Box>
        </Container>
      </Box>
    </Box>
  );
}
