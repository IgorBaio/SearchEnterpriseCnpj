import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Loading from "./components/Loading";
import ROUTES from "./utils/routes";
import theme from "./theme";
import { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
const Home = lazy(() => import("./pages/Home"));
const Enterprises = lazy(() => import("./pages/Enterprises"));

const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename={ROUTES.home}>
          <Suspense fallback={<Loading />}>
            <Switch>
               <Route
                path={ROUTES.home}
                exact={true}
                component={Home}
              />
               <Route
                path={ROUTES.enterprises}
                exact={true}
                component={Enterprises}
              />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  );
};
export default App;
