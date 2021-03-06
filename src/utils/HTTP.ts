import RequestOptions from '../types/RequestOptions';

const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

class HTTP {
  private startUrl: string;

  private timeout: number;

  private formData?: boolean;

  private headers: { [index: string]: string };

  constructor(startUrl: string, options: {
    timeout?: number,
    headers?: { [index: string]: string }
    formData?: boolean
  } = {}) {
    this.startUrl = startUrl;
    this.timeout = options.timeout || 10000;
    this.headers = options.headers || {};
    this.formData = options.formData;
  }

  get<Response>(url: string) {
    const newUrl = this.startUrl + url;
    return this.request<null, Response>(
      newUrl,
      {
        method: METHODS.GET,
      },
    );
  }

  put<Request, Response>(url: string, data: Request) {
    return this.request<Request, Response>(
      this.startUrl + url,
      {
        data,
        method: METHODS.PUT,
      },
    );
  }

  post<Request, Response>(url: string, data?: Request) {
    return this.request<Request, Response>(
      this.startUrl + url,
      {
        data,
        method: METHODS.POST,
      },
    );
  }

  delete<Request, Response>(url: string, data: Request) {
    return this.request<Request, Response>(
      this.startUrl + url,
      {
        data,
        method: METHODS.DELETE,
      },
    );
  }

  // eslint-disable-next-line class-methods-use-this
  request<Request, Response>(url: string, options: RequestOptions<Request>): Promise<Response> {
    const {
      method,
      data,
    } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      Object.entries(this.headers).forEach((v) => xhr.setRequestHeader(...v));

      xhr.responseType = 'json';
      xhr.onload = () => {
        if (xhr.status < 400) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = this.timeout;
      xhr.ontimeout = reject;
      xhr.withCredentials = true;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else if (!this.formData) {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
      } else if (data instanceof FormData) {
        xhr.send(data);
      }
    });
  }
}

export default HTTP;
