import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { Grid, Fade, Box, Link, Button } from "@material-ui/core";
import { Formik } from "formik";
import PageView from "../../components/PageView";
import SearchButton from "./components/SearchButton";
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
  setEnterpriseOnDatabase,
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
  const [state, setState] = useState({ cnpj: "", refresh: false });
  const [dataToTable, setDataToTable] = useState();
  const dispatch = useDispatch();
  const enterprise = useSelector((state) => state.enterprise?.enterprise);
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
    btn: (
      <CustomButton
        style={style.btn}
        onClick={() => dispatch(setEnterpriseOnDatabase(dataToTable))}
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
  //#endregion

  const onSubmit = (values) => {
    setState({
      ...state,
      cnpj: values.cnpj,
    });
    setStepTwoVisible(true);
  };

  //#region useEffects
  // useEffect(() => {
  //   if (state.cnpj) {
  //     dispatch(getEnterprise(state.cnpj));
  //   }
  // }, [state.cnpj]);
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
    if (enterprise && enterprise.length > 0) {
      const dataToTableAux = [];
      enterprise?.forEach((item) => {
        dataToTableAux.push({
          id: item?.cnpj?.replace(/[\.\-\/]/g, ""),
          idlocal: item?.cnpj?.replace(/[\.\-\/]/g, ""),
          ativadadePrincipal: { content: item?.cnae_fiscal_descricao },
          name: {
            content: (
              <Button onClick={() => setShowActionConfirmationModal(true)}>
                {item?.nome_fantasia || "N/A"}
              </Button>
            ),
          },
          endereco: {
            content: `${item?.logradouro}, ${item?.bairro}, ${item?.numero}, ${item?.municipio} - ${item?.uf}`,
          },
          razao: { content: item?.razao_social },
        });
      });
      setDataToTable(dataToTableAux);
      setStepThreeVisible(true);
      setActionConfirmation({
        status: "alertFailed",
        statusColor: "#FCDA45",
        statusTitle: "Atenção!",
        statusDescription: "Deseja adicionar essa empresa ao banco de dados?",
        btn: (
          <CustomButton
            style={style.btn}
            variant="outlined"
            onClick={() => {
              (() =>
                new Promise((resolve, reject) => {
                  dispatch(getEnterpriseFromDatabase(resolve, reject));
                })
                  .then(async (result) => {
                    if (
                      !result.some(
                        (item) =>
                          item.idlocal ===
                          enterprise[0]?.cnpj.replace(/[\.\-\/]/g, "")
                      )
                    ) {
                      const result = dispatch(
                        setEnterpriseOnDatabase({
                          id: enterprise[0]?.cnpj?.replace(/[\.\-\/]/g, ""),
                          idlocal: enterprise[0]?.cnpj?.replace(
                            /[\.\-\/]/g,
                            ""
                          ),
                          atividade_primaria:
                            enterprise[0]?.cnae_fiscal_descricao,
                          nome: enterprise[0]?.nome_fantasia || "N/A",
                          endereco: `${enterprise[0]?.logradouro}, ${enterprise[0]?.bairro}, ${enterprise[0]?.numero}, ${enterprise[0]?.municipio} - ${enterprise[0]?.uf}`,
                          razao_social: enterprise[0]?.razao_social,
                        })
                      );
                      if (result) {
                        setTimeout(
                          () => setShowActionConfirmationModal(false),
                          1500
                        );
                      }
                    } else {
                      setTimeout(
                        () => setShowActionConfirmationModal(false),
                        1500
                      );
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  }))();
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
    } else {
      setDataToTable([]);
      setStepThreeVisible(false);
    }
  }, [enterprise, state?.refresh]);
  //#endregion

  return (
    <PageView
      hasHeader
      title="Search Enterprises By CNPJ"
      subHeader={<SubHeader title="IgorBaio" history={history} user={null} />}
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
                  <Section
                    title="Cnpj da Empresa"
                    subTitle="Insira o cnpj da empresa que deseja buscar."
                    minHeight={600}
                    visible={true}
                  >
                    <TextInput
                      autoFocus
                      withMask
                      mask="99.999.999/9999-99"
                      placeholder="Digite..."
                      label={"CNPJ"}
                      form={Form}
                      onChange={Form.handleChange}
                      defaultValue={Form.values.cnpj}
                      // value={Form.values.cnpj}
                      id="cnpj"
                      error={Form.errors.cnpj}
                      onBlur={(e) => {
                        setState({
                          ...state,
                          cnpj: e.target.value.length,
                        });
                        e.persist = () => {};
                        Form.handleChange(e);
                        if (
                          Form.values.cnpj.length === 18 &&
                          !Form.values.cnpj.includes("_")
                        ) {
                          Form.handleSubmit();
                        }
                      }}
                      onKeyUp={(e) => {
                        if (e.keyCode === 13 || e.key === "Enter") {
                          Form.handleSubmit();
                        }
                      }}
                    />
                    {/* <TextInput
                            withMask
                            mask="99.999.999/9999-99"
                            form={Form}
                            key={Form.values.cnpj}
                            defaultValue={Form.values.cnpj}
                            id="cnpj"
                            disabled={true}
                            className={styles.textInput}
                            label={"CNPJ"}
                            onBlur={(e) => {
                              setState({
                                ...state,
                                cnpj: Form.values.cnpj,
                              });
                              e.persist = () => {};
                              Form.handleChange(e);
                            }}
                            error={Form.errors.cnpj}
                            placeholder="Digite..."
                          /> */}
                  </Section>
                  <Box className={styles.boxButtons}>
                    <SearchButton
                      mode={"editing"}
                      dispatch={dispatch}
                      user={state}
                      refresh={state}
                      setRefresh={setState}
                      history={history}
                      stepTwoVisible={stepTwoVisible}
                    />
                  </Box>

                  {stepThreeVisible && (
                    <Fade in={true} timeout={500}>
                      <Grid container item xs={12} style={{ marginTop: 0 }}>
                        <TablesList
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
                          ]}
                          dataRows={dataToTable}
                        />
                        {/* ) : (
                            <span className={styles.noReposMessage}>
                              O usuário não possui repositórios públicos
                            </span> */}
                      </Grid>
                    </Fade>
                  )}
                </BigCard>
              </>
            )}
          </Formik>
          <ModalAlert
            resultTransition={resultTransition}
            isVisible={hasAlert?.show}
            onDismiss={() => dispatch(toggleAlert(false, { message: "" }))}
          />
          <ModalAlert
            resultTransition={actionConfirmation}
            isVisible={showActionConfirmationModal}
            onDismiss={() => setShowActionConfirmationModal(false)}
          />
        </Box>
      }
    />
  );
};

export default ReceivePayment;
