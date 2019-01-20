export default (numberOfDaysToAdd) => {
  const date = new Date();
  date.setDate(date.getDate() + numberOfDaysToAdd);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
