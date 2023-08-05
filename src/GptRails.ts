export class GptRails {
  private apiKey: string;
  private apiUrl: string = "https://api.gptrails.xyz/api/v1"; // Replace with your actual API URL

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public async generate({
    templateId,
    args,
  }: {
    templateId: string;
    args: Record<string, any>;
  }) {
    const url = `${this.apiUrl}/completion`;
    const payload = { templateId, args };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("An error occurred while reading the response:", error);
      throw error;
    }
  }
}
