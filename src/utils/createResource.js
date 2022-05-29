const createResource = (url, config) => {
  let error;
  let response;

  const promise = fetch(url, config)
    .then((res) => res.json())
    .then((res) => (response = res))
    .catch((err) => (error = err));

  return {
    read() {
      if (error) throw error;
      if (response) return response;
      throw promise;
    },
  };
};

export default createResource;
