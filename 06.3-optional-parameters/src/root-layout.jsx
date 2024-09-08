import { Suspense } from 'solid-js'
import Nav from './nav.jsx'

export default function Layout(props) {
  return (
    <main class="component root-layout">
      <div class="filename-lg">
        root-layout.jsx
      </div>
      <Nav />
      <Suspense>{props.children}</Suspense>
    </main>
  )
}
