import axios from 'axios';

function imageApi(query = '', page = '1') {
  const keyAPI = '19777596-ee9495d04e68c58a9c6bc9d2a';

  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${keyAPI}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data.hits);
}

export default imageApi;
