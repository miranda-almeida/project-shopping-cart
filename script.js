// captura e reproduz imagens de produtos
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

// cria espaço no html para inserir os elementos dos produtos
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

// captura o identificador único de cada produto (sku)
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// declarando a lista ordenada do carrinho de compras no escopo global para facilitar o uso em múltiplas funções
const orderedList = document.querySelector('.cart__items');

/* remove item clicado do carrinho, onde a tag <li> do item (child) é retirada da tag <ol> que a encapsula (parent)
referência: https://www.w3schools.com/jsref/met_node_removechild.asp
*/
const cartItemClickListener = (event) => {
  orderedList.removeChild(event.target);
};

// configura as informações dos itens selecionados para o carrinho (com identificador, nome e preço)
const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// função para filtrar a seleção do botão e direcionar para o carrinho, recebi ajuda da Isabela Costa para desenvolver a lógica
const createCart = async (event) => {
  const sku = getSkuFromProductItem(event.target.parentElement);
  const results = await fetchItem(sku);
  const { title, price } = results;
  const productCart = { id: sku, title, price };
  orderedList.appendChild(createCartItemElement(productCart));
};

// cria e anexa as informações do elemento do produto com sku, nome e imagem na listagem de produtos
const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button.addEventListener('click', createCart);
  section.appendChild(button);

  return section;
};

// renderiza a listagem de produtos na página anexando os elementos organizados anteriormente
const renderProducts = async () => {
  const { results } = await fetchProducts('computador');
  const section = document.querySelector('.items');
  results.forEach((product) => {
    const generateCards = createProductItemElement(product);
    section.appendChild(generateCards);
  });
};

window.onload = () => {
  renderProducts();
};