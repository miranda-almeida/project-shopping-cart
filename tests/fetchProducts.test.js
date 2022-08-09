require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })
  it('Verifica se fetch foi chamada com fetchProducts(computador)', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  it('Verifica se fetch utiliza o endpoint indicado', () => {
    const ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(ENDPOINT);
  })
  it('Verifica se a estrutura de dados retornada do parâmetro computador está de acordo com computadorSearch', async () => {
    const funcResponse = await fetchProducts('computador');
    expect(funcResponse).toEqual(computadorSearch);
  })
  it('Verifica se um erro é retornado ao não receber argumento na função', async () => {
    const funcResponse = await fetchProducts();
    expect(funcResponse).toEqual(new Error('You must provide an url'));
  })
});
