# frozen_string_literal: true

if Config::SENTRY_DSN
  Sentry.init do |config|
    config.dsn = Config::SENTRY_DSN

    # get breadcrumbs from logs
    config.breadcrumbs_logger = [:active_support_logger, :http_logger]

    # enable tracing
    # we recommend adjusting this value in production
    config.traces_sample_rate = 1.0

    # enable profiling
    # this is relative to traces_sample_rate
    config.profiles_sample_rate = 1.0
  end
end
