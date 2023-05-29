import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://localhost:3000/`
});

export const getDocObjUrl = (documentId: number) => {
  return HTTP.get(`articledocuments/${documentId}`, {
    responseType: 'blob'
  }).then(res => URL.createObjectURL(res.data as Blob))
  .catch(e => {
    throw e;
  });
}