class ApiConfig {
    constructor() {
      this.baseUrl = "https://steknows.bisubilar.org/api";
    }
    // http://127.0.0.1:8000/api
    // https://steknows.bisubilar.org/api
    getBaseUrl() {
      return this.baseUrl;
    }
  }
  
  export default new ApiConfig();
  