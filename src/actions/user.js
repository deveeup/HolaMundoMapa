export const addDataUser = (payload) => {
  return {
    type: 'ADD_DATA_USER',
    payload,
  };
};
export const removeDataUser = () => {
  return {
    type: 'REMOVE_DATA_USER',
  };
};
