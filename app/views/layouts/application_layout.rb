# frozen_string_literal: true

class ApplicationLayout < ApplicationView
  include Phlex::Rails::Layout

  def view_template(&block)
    doctype

    html do
      head do
        title { "You're awesome" }
        meta name: "viewport", content: "width=device-width,initial-scale=1"
        csp_meta_tag
        csrf_meta_tags

        plain helpers.vite_client_tag
        plain helpers.vite_typescript_tag "application", data_turbo_track: "reload"
      end

      body do
        div class: "contents", &block
      end
    end
  end
end
