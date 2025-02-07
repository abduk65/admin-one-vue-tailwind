import axios from 'axios'
import axiosClient from '@/stores/axios'


export const getRequest = async (store, uri, idPassed ) => {
  try{
    const id = idPassed ?? '';
    const url = `/${uri}/${id}`
    console.log(url, 'uri')
    console.log(store, 'STORE')
    const {data} = await axiosClient.get(url);
    store.data.value = data;
  } catch (e) {
    console.error(e);
  }

}

export const postRequest = async ( gebi, uri, ) => {
  try {
    const {data} = axiosClient.post(uri, gebi)
    console.log(data, 'REPORTED BACK DATA')
  } catch (err) {
    console.error('Error creating request request', err)
  }
}
