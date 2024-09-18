export default function ProductsLayout(props) {
  return (
    <div class="purple-layout">
      <div class="filename">
        <div>file:</div>
        <code>
          routes/(company)/products.jsx
        </code>
      </div>
      <br />
      <div class="component-subtitle">
        I'm a layout for <code>/products</code>
      </div>
      {props.children}
    </div>
  )
}