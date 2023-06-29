import getResponseFromAPI from "../0-promise.js";
test("getResponseFromAPI resolves with the correct response", () => {
    // Use the `expect` function and matchers to make assertions
    return getResponseFromAPI().then((response) => {
      expect(response).toEqual({
        message: "This is the API response",
      });
    });
  });
  