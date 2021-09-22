import React from "react";
import useStyles from "./styles";
import { Typography, Box, Link } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

export default function SubHeader({ history, title, children, user }) {
  const styles = useStyles();
  return (
    <Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box className={styles.userData}>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <PersonOutlineIcon className={styles.iconUser} />
            <Typography align="center" className={styles.pageTitle}>
              {title}
            </Typography>
          </Box>
          <img
            className={styles.profileImage}
            src={"https://avatars.githubusercontent.com/u/37658514?v=4"}
          />
        </Box>
        <Box className={styles.userData}>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Typography align="center" className={styles.pageTitle}>
              Link repositório api:
            </Typography>
            <Link
              href={"https://github.com/IgorBaio/apiEnterpriseCnpj"}
              align="center"
              className={styles.linkPageTitle}
            >
              https://github.com/IgorBaio/apiEnterpriseCnpj
            </Link>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Typography align="center" className={styles.pageTitle}>
              Link repositório site:
            </Typography>

            <Link
              href={"https://github.com/IgorBaio"}
              align="center"
              className={styles.linkPageTitle}
            >
              https://github.com/IgorBaio/apiEnterpriseCnpj
            </Link>
          </Box>
        </Box>
      </Box>
      {children}
    </Box>
  );
}
