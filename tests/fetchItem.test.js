require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  })
  it('Verifica se fetch foi chamada com fetchItem(MLB1615760527)', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })
  it('Verifica se fetch utiliza o endpoint indicado', () => {
    const ENDPOINT = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(ENDPOINT);
  })
  it('Verifica se a estrutura de dados retornada do parâmetro computador está de acordo com item', async () => {
    const funcResponse = await fetchItem('MLB1615760527');
    expect(funcResponse).toEqual(item);
  })
  it('Verifica se um erro é retornado ao não receber argumento na função', async () => {
    const funcResponse = await fetchItem();
    expect(funcResponse).toEqual(new Error('You must provide an url'));
  });
});
