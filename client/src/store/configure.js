import { createStore, applyMiddleware, compose } from "redux";
import modules from "./modules";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

const logger = createLogger();

const configure = () => {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    modules,
    composeEnhancer(applyMiddleware(logger, ReduxThunk))
  );

  return store;
};

export default configure;
