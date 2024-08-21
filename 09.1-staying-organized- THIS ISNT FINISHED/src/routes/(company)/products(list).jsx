export default function ProductsListLayout(
  props
) {
  return (
    <div class="periwinkle-layout">
      <div class="filename">
        <div>file:</div>
        <code>
          routes/(company)/(products)/products(list).jsx
        </code>
      </div>
      <br />
      <div class="component-subtitle">
        I'm a layout component.
      </div>
      {props.children}
    </div>
  )
}
