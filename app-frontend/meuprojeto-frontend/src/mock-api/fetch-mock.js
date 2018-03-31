export class FetchMock{

  static _apis = [];

  static loadApis(...apis){
    FetchMock._apis =  FetchMock._apis.concat(apis);
  }

  static _findApi = url => {
    if(!FetchMock._apis)
      return null;
    const firstBarIndex = url.indexOf('/');
    const host = firstBarIndex >= 0 ? url.substring(0, firstBarIndex) : url;
    return FetchMock._apis.find(x => x.baseUrl === host);
  }

  static _getResource = url => url.indexOf('/') >= 0 ? url.substring(url.indexOf('/')) : '';

  static get(url, queryString, forcedResult=null){
    const api = FetchMock._findApi(url);
    if(!api)
      return Promise.reject(new Response(null, {"status": 404}));
    const resource = FetchMock._getResource(url);
    return api.get(resource, queryString, forcedResult);
  }

  static post(url, bodyObj, forcedResult=null){
    const api = FetchMock._findApi(url);
    if(!api)
      return Promise.reject(new Response(null, {"status": 404}));
    const resource = FetchMock._getResource(url);
    return api.post(resource, bodyObj, forcedResult);
  }

  static put(url, id, bodyObj, forcedResult=null){
    const api = FetchMock._findApi(url);
    if(!api)
      return Promise.reject(new Response(null, {"status": 404}));
    const resource = FetchMock._getResource(url);
    return api.put(resource, id, bodyObj, forcedResult);
  }

  static delete(url, id, forcedResult=null){
    const api = FetchMock._findApi(url);
    if(!api)
      return Promise.reject(new Response(null, {"status": 404}));
    const resource = FetchMock._getResource(url);
    return api.delete(resource, id, forcedResult);
  }
}

