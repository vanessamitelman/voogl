const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';
 // type is '/image' '/videos' etc...
 export const searchApi = async (type) => {
    try {
      const response = await fetch(`${baseUrl}${type}`, {
        method: 'GET',
        headers: {
          'X-User-Agent': 'desktop',
          'X-Proxy-Location': 'EU',
          'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
        }
      });
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };