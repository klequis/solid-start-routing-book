import { Suspense } from 'solid-js'
import { A } from '@solidjs/router'

export default function RootLayout(props) {
  return (
    <main class="component root-layout">
      <div class="filename-lg">
        root-layout.jsx
      </div>
      <nav>
        <A
          href="/"
          activeClass="btn-active"
          inactiveClass="btn-inactive"
          end
        >
          /
        </A>
        <A
          href="/contacts"
          activeClass="btn-active"
          inactiveClass="btn-inactive"
          end
        >
          /contacts
        </A>
      </nav>
      <Suspense>{props.children}</Suspense>
    </main>
  )
}
