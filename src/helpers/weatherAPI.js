// Remova os comentários a medida que for implementando as funções
const TOKEN = import.meta.env.VITE_TOKEN;
const URL = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=`;
const URL2 = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=`;

export const searchCities = async (city) => {
  // seu código aqui
  try {
    const response = await fetch(`${URL}${city}`);
    const data = await response.json();
    if (data.length === 0) {
      throw new Error('Nenhuma cidade encontrada');
    }
    return data[0];
  } catch (error) {
    window.alert(error.message);
    return [];
  }
};

export const getWeatherByCity = async (cityUrl) => {
  //   seu código aqui
  const response = await fetch(`${URL2}${cityUrl}`);
  const { current } = await response.json();
  return ({
    temp: current.temp_c,
    condition: current.condition.text,
    icon: current.condition.icon,
  });
};
