import ServiceInstance from '../ServiceInstance';
import { GET_PRODUCTS } from './endpoints';

export const getProductService = async (id = 2) => {
  return await new Promise((resolve, reject) => {
    ServiceInstance.request({ url: GET_PRODUCTS, params: { id }, method: 'POST' })
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