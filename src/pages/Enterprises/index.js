import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import {
  Grid,
  Fade,
  Box,
  Link,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { Formik } from "formik";
import PageView from "../../components/PageView";
import BigCard from "../../components/BigCard";
import Section from "../../components/Section";
import TablesList from "../../components/TablesList";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import SubHeader from "../../components/SubHeader";
import ModalAlert from "../../components/ModalAlert";
import TextInput from "../../components/TextInput";
import {
  getEnterprise,
  toggleAlert,
  deleteEnterpriseOnDatabase,
  getEnterpriseFromDatabase,
} from "../../store/actions";
import { style } from "../../utils/commonStyles";
import CustomButton from "../../components/Button";
import DATA from "../../utils/Data";
const FormValues = {
  initialValues: {
    cnpj: "",
  },
  schema: Yup.object().shape({
    cnpj: Yup.string().min(1, "Muito curto").required("Obrigatório"),
  }),
};

const ReceivePayment = ({ history }) => {
  //#region Declarações
  const styles = useStyles();
  const [stepTwoVisible, setStepTwoVisible] = useState(false);
  const [stepThreeVisible, setStepThreeVisible] = useState(false);
  const [state, setState] = useState({ result: [], refresh: false });
  const [dataToTable, setDataToTable] = useState();
  const dispatch = useDispatch();
  const enterprise = useSelector((state) => state.enterprise?.enterprise);
  const enterprises = useSelector((state) => state.enterprise?.enterprises);
  const hasAlert = useSelector((state) => state.alert);
  const [resultTransition, setResultTransition] = useState({
    status: "alertFailed",
    statusColor: "#BE1E1E",
    statusTitle: "Atenção!",
    statusDescription: hasAlert?.settings?.message || "Aconteceu um erro !",
    btn: (
      <CustomButton
        style={style.btn}
        onClick={() => dispatch(toggleAlert(false, { message: "" }))}
        textButton="OK"
      />
    ),
  });
  const [showActionConfirmationModal, setShowActionConfirmationModal] =
    useState(false);
  const [actionConfirmation, setActionConfirmation] = useState({
    status: "alertFailed",
    statusColor: "#FCDA45",
    statusTitle: "Atenção!",
    statusDescription: "Deseja adicionar essa empresa ao banco de dados?",
    btn: <CustomButton style={style.btn} textButton="APAGAR" />,
    revisar: (
      <CustomButton
        style={style.btn}
        onClick={() => dispatch(toggleAlert(false, { message: "" }))}
        textButton="OK"
      />
    ),
  });
  //#endregion

  const onSubmit = (values) => {
    setState({
      ...state,
      cnpj: values.cnpj,
    });
    setStepTwoVisible(true);
  };

  const removeItem = (idlocal) => {
    setShowActionConfirmationModal(true);
    setActionConfirmation({
      status: "alertFailed",
      statusColor: "#FCDA45",
      statusTitle: "Atenção!",
      statusDescription: "Deseja remover esta empresa do banco de dados?",
      btn: (
        <CustomButton
          style={style.btn}
          variant="outlined"
          onClick={() => {
            const result = dispatch(deleteEnterpriseOnDatabase([{ idlocal }]));

            if (result) {
              setTimeout(()=>{

                setShowActionConfirmationModal(false);
                dispatch(getEnterpriseFromDatabase());
              },2000)
            }
          }}
          textButton="SIM"
        />
      ),
      revisar: (
        <CustomButton
          style={style.btn}
          onClick={() => setShowActionConfirmationModal(false)}
          textButton="NÃO"
        />
      ),
    });
  };

  //#region useEffects

  useEffect(() => {
    if (hasAlert?.show) {
      setResultTransition({
        status: "alertFailed",
        statusColor: "#BE1E1E",
        statusTitle: "Atenção!",
        statusDescription: hasAlert?.settings?.message || "Aconteceu um erro !",
        btn: (
          <CustomButton
            style={style.btn}
            onClick={() => dispatch(toggleAlert(false, { message: "" }))}
            textButton="OK"
          />
        ),
      });
    }
  }, [hasAlert]);

  useEffect(() => {
    dispatch(getEnterpriseFromDatabase());
  }, []);
  useEffect(() => {
    if (enterprises) {
      const dataToTableAux = [];
      enterprises?.forEach((item) => {
        dataToTableAux.push({
          id: item.idlocal.replace(/[\.\-\/]/g, ""),
          idlocal: item.idlocal.replace(/[\.\-\/]/g, ""),
          ativadadePrincipal: { content: item.atividade_primaria },
          name: {
            content: (
              <Button
                className={styles.button}
                onClick={() =>
                  removeItem(item.idlocal.replace(/[\.\-\/]/g, ""))
                }
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <CancelIcon
                    style={{
                      color: "red",
                      "&:hover": {
                        color: "darkred",
                      },
                      marginRight: 5,
                      alignSelf: "center",
                    }}
                  />
                  <Typography style={{ textDecorationLine: "underline" }}>
                    {item.nome}
                  </Typography>
                </Box>
              </Button>
            ),
          },
          endereco: {
            content: item.endereco,
          },
          razao: { content: item.razao_social },
          cnpj: {
            content: item.idlocal.replace(
              /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
              "$1.$2.$3/$4-$5"
            ),
          },
        });
      });
      setDataToTable(dataToTableAux);
      setStepThreeVisible(true);
    } else {
      setDataToTable([]);
      setStepThreeVisible(false);
    }
  }, [enterprises, state?.refresh, state?.result]);
  //#endregion

  return (
    <PageView
      hasHeader
      history={history}
      title="Search Enterprises By CNPJ"
      subHeader={
        <SubHeader title="IgorBaio" history={history} user={null} />
      }
      stylePage={{ display: "flex" }}
      pageContent={
        <Box>
          <Formik
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={FormValues.initialValues}
            validationSchema={FormValues.schema}
            onSubmit={(values) => onSubmit(values)}
          >
            {(Form) => (
              <>
                <BigCard minHeight={600}>
                  <Fade in={true} timeout={500}>
                    <Grid container item xs={12} style={{ marginTop: 0 }}>
                      {
                        dataToTable && dataToTable.length > 0 ? (

                          <TablesList
                            key={enterprises}
                            dataHeader={[
                              {
                                id: "name",
                                label: "Nome",
                                align: "left",
                                width: "5%",
                              },
                              {
                                id: "ativadadePrincipal",
                                label: "Atividade Principal",
                                align: "left",
                                width: "5%",
                              },
                              {
                                id: "endereco",
                                label: "Endereço",
                                align: "left",
                                width: "20%",
                              },
                              {
                                id: "razao",
                                label: "Razão social",
                                align: "left",
                                width: "10%",
                              },
                              {
                                id: "cnpj",
                                label: "CNPJ",
                                align: "left",
                                width: "10%",
                              },
                            ]}
                            dataRows={dataToTable}
                          />
                        ) :
                         (
                            <span className={styles.noReposMessage}>
                              Não possui empresas cadastradas
                            </span> 
                         )
                      }
                    </Grid>
                  </Fade>
                </BigCard>
              </>
            )}
          </Formik>
          <ModalAlert
            resultTransition={resultTransition}
            isVisible={hasAlert?.show}
          />
          <ModalAlert
            resultTransition={actionConfirmation}
            isVisible={showActionConfirmationModal}
          />
        </Box>
      }
    />
  );
};

export default ReceivePayment;
