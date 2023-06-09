import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'

const useMyClass = () => {
    const { user } = useContext(AuthContext)
    const {  data: myClass = [], refetch } = useQuery({
        queryKey: ['myClass', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myClass?email=${user?.email}`)
            return res.json()
        },
    })
    return [myClass,refetch]

}
export default useMyClass;