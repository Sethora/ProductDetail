import axios from 'axios';

export default class ServiceInstance {
  static request({ url, params = {}, method = 'POST' }) {
    console.log('the url ', url)
    console.log('the params ', params)
    return axios.request({
      method,
      url: `/api${url}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: params
    })
      .then(
        response => { return response.data },
        error => console.log('Error coming from, (ServiceInstance), ', error)
      )
      .catch(error => console.log('This failed (ServiceInstance), ', error));
  }
}