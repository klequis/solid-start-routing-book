import { useParams } from '@solidjs/router'
import FileDetails from '~/file-details.jsx'

export default function ProductsIndex() {
  const params = useParams()
  return (
    <div class="component">
      <FileDetails 
        file="routes/(company)/division/[divisionId]/[departmentId].jsx"
      />
      <div class="component-subtitle">
        The division id is: {params.divisionId}
      </div>
      <div class="component-subtitle">
        The department id is:{' '}
        {params.departmentId}
      </div>
    </div>
  )
}