class HomePage {
  
    constructor(page) {
      this.page = page;
    }
  
    async navigate() {
      await this.page.goto('/');
    }
  
  }
  
  export default { HomePage };


  