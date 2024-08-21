import { useNavigate } from '@solidjs/router'

export default function CategoryNotFound() {
  const navigate = useNavigate()
  navigate('/products')
}
