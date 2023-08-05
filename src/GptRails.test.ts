import fetch from "jest-fetch-mock";
import { GptRails } from "./GptRails";

describe("GptRails", () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    fetch.resetMocks();
  });

  it("should generate content using the given template and args", async () => {
    // Prepare mock response
    const mockResponse = { success: true, content: "Generated content" };

    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    // Create an instance of GptRails
    const gptRails = new GptRails("your-api-key");

    // Call the generate method
    const result = await gptRails.generate({
      templateId: "generate-recipe",
      args: { cuisine: "italian", prepTime: "short" },
    });

    // Verify the request was made with the correct parameters
    expect(fetch).toHaveBeenCalledWith(
      "https://api.gptrails.xyz/api/v1/generate",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer your-api-key",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          templateId: "generate-recipe",
          args: { cuisine: "italian", prepTime: "short" },
        }),
      }
    );

    // Verify the result
    expect(result).toEqual(mockResponse);
  });
});
