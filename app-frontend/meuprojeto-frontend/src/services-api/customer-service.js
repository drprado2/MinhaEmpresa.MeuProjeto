// Criamos uma função para cada chamada http
// Nesse exemplo utilizamos fetch API mas sinta-se avontade para usar outra bib como axios
const get = () => {
  // A url que iremos requisitar
  const url = 'http://localhost/api/customer';
  // As opções do nosso objeto request
  const options = {
    // método http
    method: 'GET',
    // qual ação tomar em caso de uma ordem de redirect do servidor
    redirect: 'follow',
    // Cabeçalhos, por exemplo aqui colocariámos o token de autenticação
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  };
  // Nosso objeto request
  let request = new Request(url, options);

  // Aqui usamos a fetch API para fazer a chamada, note que
  // fetch() retorna uma Promise, Fetch não retorna a resposta já convertida
  // para JSON como axios, outra coisa fetch não dará reject na promise caso
  // o servidor retorne um 4xx ou 5xx assim como axios faz
  // apenas teremos um Reject em caso de não acharmos o HOST ou de problemas
  // de rede que impeçam nós de fazermos a request
  return fetch(request)
    // O método then é um método de Promise e ele também retorna uma Promise
    // Aqui usamos o método json do objeto Response para convertermos a resposta em json
    .then(resp => resp.json())
    // Aqui retornamos uma promise resolvida com um json de resposta
    // Essa promise será enviada para a ACTION-CREATOR e adicionada a ACTION
    .then(json => ({ success: true, data: json }))
    // O método catch é um método de Promise e ele será executado em caso
    // de um Reject da promise, que no caso de fetch só ocorre com erros de rede

    // .then(resp => resp.ok) temos essa opção para verificarmos se a resposta é diferente de 2xx
    // .then(resp => resp.status e resp.statusText) podemos verificar o http statusCode e o texto
    .catch(erro => ({ success: false, erro: erro}));
}

// Por fim acabamos por exportar um objeto contendo todas as possíveis chamadas
// para nossa API REST
export default {
  get: get
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


