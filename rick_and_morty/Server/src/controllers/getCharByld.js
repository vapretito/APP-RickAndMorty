const axios = require("axios");
// Crea una constante llamada URL y guarda lo siguiente: "https://rickandmortyapi.com/api/character/".
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  const { idChar } = req.params; 
  try {
    const apiRequest = await axios(`${URL}${idChar}`);
    const { data } = apiRequest;

    if (data.error) {
      return res.status(404).send(data.error);
    }

    const { id, name, status, species, origin, image, gender } = data;
    const character = {
      id: Number(id),
      name,
      status,
      species,
      origin, 
      gender,
    };
    return res.status(200).json(character);
  } catch (axiosError) {
    return res.status(500).send(axiosError.message);
  }
}

module.exports = { getCharById };
