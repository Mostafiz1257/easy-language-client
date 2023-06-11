import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import useAxiosSecure from './useAxiosSecure'

const useMyClass = () => {
    const { user } = useContext(AuthContext)
    const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();
    const { data: myClass = [], refetch } = useQuery({
        queryKey: ['myClass', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/myClass?email=${user?.email}`)
            console.log('res from axious', res);
            return res.data
        },
        // queryFn: async () => {
        //     const res = await fetch(`https://easy-language-server.vercel.app/myClass?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json()
        // },
    })
    return [myClass, refetch]

}
export default useMyClass;