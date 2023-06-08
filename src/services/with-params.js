import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

// id required, params optional
export const fetchParams = async (id, requestParams) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/' + id, {
    params: requestParams,
  })

  return data
}

export const useParams = (id, params, options) => {
  return useQuery({
    queryKey: ['a', id, params],
    queryFn: () => fetchParams(id, params),
    enabled: !!id && options?.enabled,
    ...options,
  })
}
