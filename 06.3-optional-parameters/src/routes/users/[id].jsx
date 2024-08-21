import FileDetails from '~/file-details.jsx'
import { useParams } from '@solidjs/router'

export default function UsersId() {
  const params = useParams()
  return (
    <div class="component">
      <FileDetails file="routes/users/[id].jsx" />
      <div class="component-subtitle">
        The user id is: {params.id}
      </div>
    </div>
  )
}