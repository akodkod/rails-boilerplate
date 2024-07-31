# frozen_string_literal: true

class ApplicationComponent < Phlex::HTML
  extend Dry::Initializer
  include Phlex::Rails::Helpers::Routes

  def initialize(*args, **kwargs)
    super(args, kwargs)

    # Remove all the keys that are used by the initializer
    self.class.dry_initializer.attributes(self).each_key do |key|
      kwargs.delete(key)
    end

    @props = kwargs
  end

  if Rails.env.development?
    def before_template
      comment { "Before #{self.class.name}" }
      super
    end
  end

  private

  # Getters
  attr_reader :props

  def tv(variants, **args)
    variants.render(**args)
  end
end
