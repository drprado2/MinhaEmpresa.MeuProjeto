export class ApiBase{
  constructor(baseUrl, crud, timeToResponse=1500){
    this.baseUrl = baseUrl;
    this.crud = crud;
    this.timeToResponse=timeToResponse;
  }

  get = (filter, forcedResult) =>
    new Promise(resolve =>
      setTimeout(() => {
        if(forcedResult)
          resolve(this.createResponse(forcedResult.body, forcedResult.statusCode));

        try{
          const data = this.crud.get(filter);
          resolve(this.createResponse(data, 200));
        }catch (e) {
          resolve(this.createResponse(e, 500));
        }
      }, this.timeToResponse)
    )

  post = (obj, forcedResult) =>
    new Promise(resolve =>
      setTimeout(() =>{
        if(forcedResult)
          resolve(this.createResponse(forcedResult.body, forcedResult.statusCode));

        try{
          this.crud.add(obj);
          this.crud.commit();
          resolve(this.createResponse(null, 200));
        }catch (e) {
          resolve(this.createResponse(e, 500));
        }
      }, this.timeToResponse)
    );

  put = (id, obj, forcedResult) =>
    new Promise(resolve =>
      setTimeout(() =>{
        if(forcedResult)
          resolve(this.createResponse(forcedResult.body, forcedResult.statusCode));

        try {
          var ok = this.crud.update(id, obj);
          if(!ok)
            resolve(this.createResponse(null, 400));

          this.crud.commit();
          resolve(this.createResponse(null, 200));
        }catch(e){
          resolve(this.createResponse(e, 500));
        }
      }, this.timeToResponse)
    );

  delete = (id, forcedResult) =>
    new Promise(resolve =>
      setTimeout(() =>{
        if(forcedResult)
          resolve(this.createResponse(forcedResult.body, forcedResult.statusCode));

        try {
          var ok = this.crud.remove(id);
          if(!ok)
            resolve(this.createResponse(null, 400));

          this.crud.commit();
          resolve(this.createResponse(null, 200));
        }catch (e) {
          resolve(this.createResponse(e, 500));
        }
      }, this.timeToResponse)
    );

  createResponse = (obj, statusCode) => {
    if(!obj)
      return new Response({"status": statusCode})

    const blobJson = new Blob([JSON.stringify(obj)], {type: 'application/json'});
    return new Response(blobJson, {"status": statusCode})
  }

}
