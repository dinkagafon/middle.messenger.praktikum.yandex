import sinon from 'sinon';
import { expect } from 'chai';
import AuthAPI from './auth-api';
import LoginRequest from '../types/LoginRequest';
import { RegUser } from '../types/User';

describe('AuthAPI', () => {
  const requestsArr: Array<sinon.SinonFakeXMLHttpRequest> = [];

  beforeEach(() => {
    const fakeXHR: sinon.SinonFakeXMLHttpRequestStatic = sinon.useFakeXMLHttpRequest();
    const globalAny = global as any;
    globalAny.XMLHttpRequest = fakeXHR;

    fakeXHR.onCreate = (request: sinon.SinonFakeXMLHttpRequest) => {
      requestsArr.push(request);
    };
  });

  afterEach(() => {
    const globalAny = global as any;
    globalAny.XMLHttpRequest.restore();
    requestsArr.length = 0;
  });

  it('should send post request /auth/signin', () => {
    const api = new AuthAPI();
    const user: LoginRequest = {
      login: '',
      password: '',
    };
    api.login(user);

    expect(requestsArr.length).to.eq(1);
    expect(requestsArr[0].method).to.eq('POST');
    expect(requestsArr[0].requestBody).to.eq(JSON.stringify(user));
    expect(requestsArr[0].url).to.eq('https://ya-praktikum.tech/api/v2/auth/signin');
  });

  it('should send post request /auth/signup', () => {
    const api = new AuthAPI();
    const user: RegUser = {
      first_name: '',
      second_name: '',
      phone: '',
      login: '',
      email: '',
      password: '',
    };
    api.create(user);

    expect(requestsArr.length).to.eq(1);
    expect(requestsArr[0].method).to.eq('POST');
    expect(requestsArr[0].requestBody).to.eq(JSON.stringify(user));
    expect(requestsArr[0].url).to.eq('https://ya-praktikum.tech/api/v2/auth/signup');
  });

  it('should send post request /auth/logout', () => {
    const api = new AuthAPI();
    api.logout();

    expect(requestsArr.length).to.eq(1);
    expect(requestsArr[0].method).to.eq('POST');
    expect(requestsArr[0].url).to.eq('https://ya-praktikum.tech/api/v2/auth/logout');
  });

  it('should send post request /auth/user', () => {
    const api = new AuthAPI();
    api.request();

    expect(requestsArr.length).to.eq(1);
    expect(requestsArr[0].method).to.eq('GET');
    expect(requestsArr[0].url).to.eq('https://ya-praktikum.tech/api/v2/auth/user');
  });
});
