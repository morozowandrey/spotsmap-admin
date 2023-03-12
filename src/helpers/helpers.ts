//TODO filter non input props
export const getFormInputs = (spot: any) => {
  const inputs = Object.keys(spot);
  return inputs.filter((key) => inputs.includes(key));
};
