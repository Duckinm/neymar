import { useParams } from '../services/with-params'

export default function WithParams() {
  const { data, isLoading, isError } = useParams(5, {
    postId: 30,
  })

  console.log('data: ', data)

  return (
    <>
      <h1>A</h1>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </>
  )
}
