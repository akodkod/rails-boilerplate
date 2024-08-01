# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: Config::MAILER_FROM
  layout "mailer"
end
