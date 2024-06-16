export const updateCache = (cache, query, addedBook) => {
  const uniqueByName = (items) => {
    let seen = new Set();
    return items.filter((item) => {
      let itemName = item.name;
      return seen.has(itemName) ? false : seen.add(itemName);
    });
  };
  cache.updateQuery(query, ({ allBooks }) => {
    return {
      allBooks: uniqueByName(allBooks.concat(addedBook)),
    };
  });
};