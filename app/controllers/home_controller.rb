# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    render Home::IndexView.new
  end
end
