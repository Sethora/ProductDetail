import ServiceInstance from '../ServiceInstance';
import { GET_PRODUCTS } from './endpoints';

export const getProductService = async () => {
  return await new Promise((resolve, reject) => {
    ServiceInstance.request({ url: GET_PRODUCTS, method: 'GET' })
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