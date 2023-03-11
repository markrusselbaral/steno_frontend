class ApiConfig {
    constructor() {
      this.baseUrl = "https://steknows.bisubilar.org";
    }
  
    getBaseUrl() {
      return this.baseUrl;
    }
  }
  
  export default new ApiConfig();
  