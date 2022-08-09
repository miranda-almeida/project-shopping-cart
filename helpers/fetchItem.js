const fetchItem = async () => {
  // const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  // const { results } = response.json();
  // return results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
