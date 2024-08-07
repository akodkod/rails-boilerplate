# frozen_string_literal: true

require "capybara/cuprite"

Capybara.server = :thruster
Capybara.javascript_driver = :cuprite

Capybara.register_driver(:cuprite) do |app|
  Capybara::Cuprite::Driver.new(app, window_size: [1200, 800])
end
