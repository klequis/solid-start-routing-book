import { useParams } from '@solidjs/router'
import FileDetails from '~/file-details.jsx'

export default function Player() {
  const params = useParams()
  return (
    <div class="component">
      <FileDetails 
        file="routes/teams/[[team]]/[[player]].jsx"
        />
      <div class="component-subtitle">
        team: {params.team}
      </div>
      <div class="component-subtitle">
        player: {params.player}
      </div>
    </div>
  )
}