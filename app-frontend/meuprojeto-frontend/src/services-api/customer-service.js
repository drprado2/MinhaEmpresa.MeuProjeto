const get = () => {
  const url = 'http://localhost/api/customer';
  const options = {
    method: 'GET',
    redirect: 'follow',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  };
  let request = new Request(url, options);

  return fetch(request)
    .then(resp => resp.json())
    .catch(error => ({ success: false, error: error}));
}

/*
  *** ESTRATÉGIA PARA CONTRATO API - APP ***
  *
  * Uma possível estratégia que poderia se seguida é mantermos o seguinte padrão de json
  * { success: true/false, errors: [], data: [] }
  * No nosso serviço poderiámos tratar para sempre retornar um objeto nesse padrão
  * utilizando um try catch logo na entrada da request, e garantindo que sempre
  * retornaremos um json nesse padrão.
  * No app sempre verificariámo se success é true para seguir a renderização padrão
  * e false apresentariámos um popup de erro imprimindo a lista de erros algo assim.
 */


