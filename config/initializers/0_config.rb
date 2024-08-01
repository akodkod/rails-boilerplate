# frozen_string_literal: true

require "types"

module Config
  def self.env(env, type) = type[ENV.fetch(env, nil)]

  SENTRY_DSN = env("SENTRY_DSN", Types::String.optional)
  MAILER_FROM = env("MAILER_FROM", Types::String.fallback("from@example.com"))
end
