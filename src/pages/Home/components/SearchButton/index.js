import React from "react";
import { Button, Box, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { getEnterprise } from "../../../../store/actions";
import ROUTES from "../../../../utils/routes";

export default function SearchButton({ stepTwoVisible, dispatch, user, refresh, setRefresh, history}) {
  const styles = useStyles();

  return (
    <Box className={styles.buttonsContainer}>
      <Button
        variant="contained"
        className={styles.repos}
        disabled={!stepTwoVisible}
        onClick={() => {
          setRefresh({...refresh,refresh:!refresh.refresh})
          dispatch(getEnterprise(user.cnpj));
        }}
      >
        <Typography className={styles.textRepos}>Buscar</Typography>
      </Button>
      <Button
        variant="contained"
        className={styles.starred}
        onClick={() => {
          history.push(ROUTES.enterprises)
        }}
      >
        <Typography className={styles.text}>Empresas cadastradas</Typography>
      </Button>
    </Box>
  );
}
