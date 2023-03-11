class ApiConfig {
    constructor() {
      this.baseUrl = "https://steknows.bisubilar.org/api";
    }
  
    getBaseUrl() {
      return this.baseUrl;
    }
  }
  
  export default new ApiConfig();
  