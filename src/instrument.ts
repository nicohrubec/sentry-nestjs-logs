import * as Sentry from "@sentry/nestjs";

// Ensure to call this before requiring any other modules!
Sentry.init({
  dsn: "https://c2366a90b36c04ff73ec58dc97ee782e@o1.ingest.us.sentry.io/4510442378887168",

  enableLogs: true,
  integrations: [
    Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  // Learn more at
  // https://docs.sentry.io/platforms/javascript/guides/nestjs/configuration/options/#tracesSampleRate
  tracesSampleRate: 1.0,
});
