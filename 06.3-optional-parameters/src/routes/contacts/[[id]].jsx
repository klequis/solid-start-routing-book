import { useParams } from '@solidjs/router'
import FileDetails from '~/file-details.jsx'

export default function Contact() {
  const params = useParams()
  return (
    <div class="component">
      <FileDetails 
        file="routes/contacts/[[id]].jsx" 
      />
      <div class="component-subtitle">
        The contact id is: {params.id}
      </div>
    </div>
  )
}