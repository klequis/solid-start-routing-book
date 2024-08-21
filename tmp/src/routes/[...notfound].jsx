import FileDetails from '~/file-details.jsx'
import { useParams } from "@solidjs/router";

export default function NotFound() {
  const params = useParams();
  return (
    <div class="component">
      <FileDetails file="routes/[...notfound].jsx" />
      <div class="component-subtitle">
        notfound: {params.notfound}
      </div>
    </div>
  )
}