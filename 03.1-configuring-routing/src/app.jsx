import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import './app.css'

export default function App() {
  return (
    <div class="app">
      <div 
        class="filename-lg">
          app.jsx
      </div>
      <Router>
        <FileRoutes />
      </Router>
    </div>
  )
}