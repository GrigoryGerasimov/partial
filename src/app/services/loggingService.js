import config from "../../config.json";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

const init = () => {
    Sentry.init({
        dsn: config.sentry_DNS,
        integrations: [new BrowserTracing()],
        tracesSampleRate: 1.0
    });
};

const log = error => {
    Sentry.captureException(error);
};

export const loggingService = {
    init,
    log
};
