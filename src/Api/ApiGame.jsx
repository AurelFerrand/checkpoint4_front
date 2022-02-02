import axios from "axios";

const apiData = async (path, keyChar) => {
  if (path && keyChar) {
    try {
      const data = await axios.get(
        `https://api.rawg.io/api/${path}${keyChar}key=c551c278782d4f9f909dcba8e99fdf75`
      );
      return data.data;
    } catch (err) {
      console.error(err);
    }
  } else if (path && !keyChar) {
    try {
      const data = await axios.get(path);
      return data.data;
    } catch (err) {
      console.error(err);
    }
  } else {
    console.error("No path or keyChar provided");
  }
};

export default apiData;
