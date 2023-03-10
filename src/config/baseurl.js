class ApiConfig {
    constructor() {
      this.baseUrl = "http://127.0.0.1:8000/api";
    }
  
    getBaseUrl() {
      return this.baseUrl;
    }
  }
  
  export default new ApiConfig();
  