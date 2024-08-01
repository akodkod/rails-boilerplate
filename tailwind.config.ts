import type { Config } from "tailwindcss"

export default {
  content: [
    "./app/views/**/*.{rb,html.erb}",
    './app/helpers/**/*.rb',
    "./app/javascript/**/*.{ts,css}",
  ]
} satisfies Config
