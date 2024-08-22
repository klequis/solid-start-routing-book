import FileDetails from "~/file-details.jsx"

export default function NotFound() {
  return (
    <div class="component">
      <FileDetails file="routes/[...notfound].jsx" />
    </div>
  )
}
