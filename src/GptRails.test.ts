import { GptRails } from "../src/GptRails";

describe("GptRails", () => {
  let gptRails: GptRails;

  beforeEach(() => {
    gptRails = new GptRails("your-api-key");
  });

  it("should create a GptRails instance with the correct API key", () => {
    expect(gptRails).toBeDefined();
    // If you have a way to access the apiKey within GptRails, you can also test that it's set correctly
  });

  it("should connect to GptRails", () => {
    // Here you might mock any dependencies required for connecting and test that the connection is successful
    // You can also use libraries like 'jest-mock-axios' if your SDK is making HTTP requests
    // Example:
    // jest.mock('axios');
    // gptRails.connect();
    // expect(axios.post).toHaveBeenCalled();
  });

  // Add other test cases for the various methods and functionality of your SDK
});
