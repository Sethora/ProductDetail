import ServiceInstance from '../ServiceInstance';
import { GET_PRODUCTS } from './endpoints';

export const getProductService = async () => {
  const url = window.location.href.split('/');
  const id = typeof url[url.length - 1] === 'number' ? url[url.length - 1] : 2;
  return await new Promise((resolve, reject) => {
    ServiceInstance.request({ url: `${GET_PRODUCTS}/${id}`, method: 'GET' })
      .then(response => {
        if (response === undefined) {
          reject('Connection error or configuration');
        } else {
          resolve(response);
        }
      })
      .catch(error => {
        console.log('this error comes from (getProductsService), ', error);
        reject(error);
      });
  });
};