import { useLocation } from '@solidjs/router'

export default function Index() {
  const location = useLocation()
  return (
    <div class="component">
      <div class="filename">
        <div>
          file: <code>routes/index.jsx</code>
        </div>
        <div class="filename">
          route: <code>{location.pathname}</code>
        </div>
      </div>
    </div>
  )
}
