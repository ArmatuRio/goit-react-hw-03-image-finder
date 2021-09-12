import axios from 'axios';

const apiKey = '22567398-684356714182815f09d51f694';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchData = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default { fetchData };
