export class FetchMock{

  static _apis = [];

  static loadApis(){
    _apis = arguments;
  }

  static get(url, queryString, forcedResult){
    const api = _apis.map(x => x.baseUrl).filter(x => x === url);

    if(api == null)
      return Promise.reject(new Response({"status": 404}));

    return api.get(queryString, forcedResult);
  }
}