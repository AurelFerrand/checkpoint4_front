import axios from "axios";

const apiData = async (path, keyChar) => {
  if (path && keyChar) {
    try {
      const data = await axios.get(
        `https://api.rawg.io/api/${path}${keyChar}key=`
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
