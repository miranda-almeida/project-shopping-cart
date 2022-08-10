const fetchItem = async (id) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const { results } = await response.json();
  return results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
