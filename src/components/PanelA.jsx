import { usePokemonById } from '../services/fetch-pokemon'

export default function PanelA() {
  const { data, isLoading, isError } = usePokemonById(5)

  return (
    <>
      <h1>A</h1>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </>
  )
}
