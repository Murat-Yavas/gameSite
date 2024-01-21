import { gameActions } from "./game-slice";

export const fetchGames = async (dispatch) => {
  const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "26cd5745e3msh2a08355e88f2c4fp1b7146jsndc8f6df4179c",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    dispatch(gameActions.getGames(result));
  } catch (error) {
    console.error(error);
  }
};
