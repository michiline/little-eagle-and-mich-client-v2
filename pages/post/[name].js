import { useRouter } from 'next/router'

const Post = () => {
	const router = useRouter()
	const { name } = router.query
	return (
    <div>
      {name}
    </div>
  )
}

export default Post