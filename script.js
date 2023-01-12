const questionInput = document.getElementById("question-input");
const form = document.getElementById("question-form");
const responseDiv = document.getElementById("response");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // The user's question
    const question = questionInput.value;

    // Your GPT-3 API key
    const apiKey = "PUT_YOUR_API_KEY_HERE";
    // Your GPT-3 model endpoint
    const modelEndpoint = "PUT_YOUR_MODEL_ENDPOINT_HERE";
    // API endpoint to generate responses
    const apiUrl = `https://api.openai.com/v1/engines/${modelEndpoint}/completions`;

    // Data to send to the API
    const data = {
        prompt: question,
        api_key: apiKey,
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const json = await response.json();
        // Extract the response text from the JSON object
        const responseText = json.choices[0].text;
        // Display the response text
        responseDiv.textContent = responseText;
    } catch (err) {
        console.log(err);
    }
});
