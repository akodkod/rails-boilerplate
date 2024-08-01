# frozen_string_literal: true

module Home
  class IndexView < ApplicationView
    def view_template
      h1 { "Home::Index" }
      p { "Find me in app/views/home/index_view.rb" }

      div data_controller: "hello" do
        "Hi"
      end

      render ButtonComponent.new(block: true, data_test: "Hello!") do
        "Click me"
      end
    end
  end
end
