export default function CategoriesLayout(props) {
  return (
    <div class="blue-layout">
      <div class="filename">
        <div>file:</div>
        <code>
          routes/(company)/products/categories.jsx
        </code>
      </div>
      <br />
      <div>
        <div class="component-subtitle">
          I'm a layout for <code>/categories</code>.
        </div>
        {props.children}
      </div>
    </div>
  )
}