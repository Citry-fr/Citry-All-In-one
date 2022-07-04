import axios from 'axios';

class HttpRequestService {
  /**
   * @param {string} url
   * @param {Object} bodyParams
   * @param {Object} queryParams
   * @returns {Array | Object}
   */
  async get(url, bodyParams = {}, queryParams = {}, data = true) {
    const axiosConfig = {
      params: queryParams,
      data: bodyParams,
    };
    try {
      const objects = await axios.get(url, axiosConfig);
      return data ? objects : objects.data;
    } catch (err) {
      throw new Error(`API Error (GET): ${err}`);
    }
  }
  /**
   * @param {string} url
   * @param {Object} bodyParams
   * @returns {Object}
   */
  async post(url, bodyParams = {}, data = true) {
    const axiosConfig = {
      data: bodyParams,
    };
    try {
      console.log(axiosConfig);
      const objects = await axios.post(url, axiosConfig);
      return data ? objects : objects.data;
    } catch (err) {
      throw new Error(`API Error (POST): ${err}`);
    }
  }

  /**
   * @param {string} url
   * @param {Object} bodyParams
   * @param {Object} queryParams
   * @returns {Object}
   */
  async put(url, bodyParams = {}, queryParams = {}, data = true) {
    const axiosConfig = {
      params: queryParams,
      data: bodyParams,
    };
    try {
      const objects = await axios.put(url, axiosConfig);
      return data ? objects : objects.data;
    } catch (err) {
      throw new Error(`API Error (PUT): ${err}`);
    }
  }

  /**
   * @param {string} url
   * @param {Object} bodyParams
   * @param {Object} queryParams
   * @returns {Array | Object}
   */
  async delete(url, bodyParams = {}, queryParams = {}, data = true) {
    const axiosConfig = {
      params: queryParams,
      data: bodyParams,
    };
    try {
      const objects = await axios.delete(url, axiosConfig);
      return data ? objects : objects.data;
    } catch (err) {
      throw new Error(`API Error (DELETE): ${err}`);
    }
  }
}

export default new HttpRequestService();
