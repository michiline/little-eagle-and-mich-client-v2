import { useRouter } from 'next/router'

const Gallery = () => {
	const router = useRouter()
	const { name } = router.query
	return (
    <div>
      {name}
    </div>
  )
}

export default Gallery