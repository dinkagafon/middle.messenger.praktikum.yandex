import sinon from 'sinon';
import { expect } from 'chai';
import HTTP from './HTTP';

describe('HTTP', () => {
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

  it('should send post request', () => {
    const data = {
      test: 'test',
    };
    new HTTP('').post('/testpost', data);

    expect(requestsArr.length).to.eq(1);
    expect(requestsArr[0].method).to.eq('POST');
    expect(requestsArr[0].requestBody).to.eq(JSON.stringify(data));
    expect(requestsArr[0].url).to.eq('/testpost');
  });

  it('should send get request', () => {
    new HTTP('').get('/testget');

    expect(requestsArr.length).to.eq(1);
    expect(requestsArr[0].method).to.eq('GET');
    expect(requestsArr[0].url).to.eq('/testget');
  });

  it('should send put request', () => {
    const data = {
      test: 'test',
    };
    new HTTP('').put('/testput', data);

    expect(requestsArr.length).to.eq(1);
    expect(requestsArr[0].method).to.eq('PUT');
    expect(requestsArr[0].requestBody).to.eq(JSON.stringify(data));
    expect(requestsArr[0].url).to.eq('/testput');
  });

  it('should send delete request', () => {
    const data = {
      test: 'test',
    };
    new HTTP('').delete('/testdelete', data);

    expect(requestsArr.length).to.eq(1);
    expect(requestsArr[0].method).to.eq('DELETE');
    expect(requestsArr[0].requestBody).to.eq(JSON.stringify(data));
    expect(requestsArr[0].url).to.eq('/testdelete');
  });
});
