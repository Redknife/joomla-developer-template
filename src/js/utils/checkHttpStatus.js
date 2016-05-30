export default (resp) => {
  if (!resp.ok) {
    const error = new Error(resp.statusText);
    error.response = resp;
    throw error;
  } else {
    return resp;
  }
};
