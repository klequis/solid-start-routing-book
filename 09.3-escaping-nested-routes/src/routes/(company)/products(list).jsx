export default function ProductsListLayout(
  props
) {
  return (
    <div class="periwinkle-layout">
      <div class="filename">
        <div>file:</div>
        <code>
          routes/(company)/products(list).jsx
        </code>
      </div>
      <br />
      <div class="component-subtitle">
        I'm a layout for the <code>/products(list)`</code> directory, but my route path is <code>`/products`</code>.
      </div>
      {props.children}
    </div>
  )
}