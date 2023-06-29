function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous API call
      setTimeout(() => {
        const response = {
          message: "This is the API response",
        };
        resolve(response); // Resolving the Promise with the response
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  export default getResponseFromAPI;