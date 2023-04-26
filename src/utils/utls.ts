const currentDate = (data: string) => {
  return data.split('T')[0];
};

const getRandomNumber = () => {
  const letters = '0123456789';
  let result = '';

  for (let i = 0; i < 6; i++) {
    result += letters[Math.floor(Math.random() * 16)];
  }

  return Number(result);
};

export { currentDate, getRandomNumber };
