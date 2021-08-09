/* class Member{

    constructor(httpClient) {
        this.member = httpClient;
      }

    async getMembers()  {
      const response = await fetch('http://localhost:8080/members');
      const result = await response.json();
      console.log(result);
      return result.items;
    };
  
  } */