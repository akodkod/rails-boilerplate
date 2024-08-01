import { Application } from "@hotwired/stimulus"
import { registerControllers } from "stimulus-vite-helpers"
import "@hotwired/turbo-rails"
import "../styles/app.css"

const application = Application.start()
application.debug = false
window.Stimulus = application

// Load Stimulus controllers
const controllers = import.meta.glob("~/**/*_controller.ts", { eager: true })
registerControllers(application, controllers)
