import config from './config';

export default class Data {
  api(path, method = 'GET', body = null) {
    //const url configures the URL path using the base URL defined in config.js 
    const url = config.apiBaseUrl + path;
    
    //options is an object that sends a request with the HTTP method (GET, POST, etc.) and request headers as a stringified body.
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }
    //accepts url from above as first arg, options as second arg that is a configuration object that lets you control request settings
    return fetch(url, options);
  }

  //Performs an async operation to GET an existing user using the api method above to the /users endpoint.
  async getUser() {
    const response = await this.api(`/users`, 'GET', null);
    if (response.status === 200) {
      return response.json().then(data => data);
    }
    else if (response.status === 401) {
      return null;
    }
    else {
      throw new Error();
    }
  }
  
  //Performs an async operation to POST/create a user using the api method above to the /users endpoint.
  async createUser(user) {
    const response = await this.api('/users', 'POST', user);
    if (response.status === 201) {
      return [];
    }
    else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      });
    }
    else {
      throw new Error();
    }
  }
}
