import type { Config } from "tailwindcss"

export default {
  content: [
    './app/views/**/*.html.erb',
    './app/components/**/*.{rb,html.erb}',
    './app/assets/stylesheets/**/*.css',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.ts',
  ]
} satisfies Config
