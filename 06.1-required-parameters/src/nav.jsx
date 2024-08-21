import { A } from '@solidjs/router'
import { createSignal, For } from 'solid-js'

// Only edit this file from here
const buttonList = [
  { href: '/', text: '/' },
  { href: '/contacts', text: '/contacts' },
  { href: '/products', text: '/products' },
  {
    href: '/products/categories/keyboards',
    text: '/products/categories/keyboards',
  },
  {
    href: '/products/categories/mice',
    text: '/products/categories/mice',
  },
  { href: "/users/1", text: "/users/1" },
  { href: "/users/abc", text: "/users/abc" },
]
// to here

function Button(props) {
  return (
    <A
      activeClass="btn-active"
      inactiveClass="btn-inactive"
      href={props.href}
      end
    >
      {props.children}
    </A>
  )
}

export default function Nav() {
  const [buttons, setButtons] =
    createSignal(buttonList)
  return (
    <nav>
      <For each={buttons()}>
        {(button) => (
          <Button href={button.href}>
            {button.text}
          </Button>
        )}
      </For>
    </nav>
  )
}