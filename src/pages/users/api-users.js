import axios from 'axios'
import { apiUrl } from '../../config/apiUrl'




const listUsers = async () => {
    try {
        let response = await axios.get(`${apiUrl}/users/all`)
        // console.log(response.data.message)
        
        console.log(response.data)
        return await response.data
    }   catch(err){
        return await err.message
    }
}

//2.createRegion, gunakan variable data untuk di send ke backend
// di backend, jangan lupa pake req.body.data, agar bisa di extract ke tiap attribute
const create = async (users) => {
    try {
        let response = await axios.post(`${apiUrl}/users/`,{
          data : users
        })
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  
  const deleteUsers = async (usersId) => {
    try {
        let response = await axios.delete(`${apiUrl}/users/${usersId}`)
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  
  const updateUsers = async (users) => {
    try {
        let response = await axios.put(`${apiUrl}/users/${users.user_id}`,{
          data : users
        })
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  

export {listUsers, create, deleteUsers, updateUsers}