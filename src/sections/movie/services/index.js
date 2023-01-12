import { axiosInstance as axios } from '../../../config/service/http';

export const getMovieListApi = async () => {
  const response = await axios.get('/get_movie_avaiable');
  return response.data;
};
