const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Verifica se localStorage.setItem é chamado ao executar saveCartItems', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  })
  it('Verifica se localStorage.setItem é chamado ao executar saveCartItems com os parâmetros cartItems e o valor passado como argumento para saveCartItems', () => {
    const ref = '<ol><li>Item</li></ol>';
    saveCartItems(ref);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', ref);
  })
});
