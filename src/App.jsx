import { useQuery } from '@tanstack/react-query'
import WithParams from './components/WithParams'

function App() {
  const { data } = useQuery({
    queryKey: ['todos'],
  })

  return (
    <>
      <WithParams />
    </>
  )
}

export default App
