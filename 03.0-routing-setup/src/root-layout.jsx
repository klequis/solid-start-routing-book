import { Suspense } from 'solid-js'

export default function RootLayout(props) {
  return (
    <main class="component root-layout">
      <div class="filename-lg">
        root-layout.jsx
      </div>
      <Suspense>{props.children}</Suspense>
    </main>
  )
}
