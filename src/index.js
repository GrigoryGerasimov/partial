import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store/store.js";
import withPreLoader from "./app/hoc/withPreLoader.jsx";
import App from "./app/App.jsx";
import { FormProvider } from "./app/hooks/useForm.jsx";
import { MockapiServiceProvider } from "./app/hooks/useMockapiService.jsx";
import { loggingService } from "./app/services/loggingService.js";
import "./index.css";

loggingService.init();

const PreloadedApp = withPreLoader(App);

ReactDOM.createRoot(document.querySelector("#root")).render(
    <BrowserRouter>
        <Provider store={store}>
            <MockapiServiceProvider>
                <FormProvider>
                    <React.StrictMode>
                        <PreloadedApp/>
                    </React.StrictMode>
                </FormProvider>
            </MockapiServiceProvider>
        </Provider>
    </BrowserRouter>
);
