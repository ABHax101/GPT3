const questionInput = document.getElementById("question-input");
const form = document.getElementById("question-form");
const responseDiv = document.getElementById("response");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // The user's question
    const question = questionInput.value;

    // Your GPT-3 API key
    const apiKey = "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";
    // Your GPT-3 model endpoint
    const apiUrl = "https://api.openai.com/v1/completions";

    // Data to send to the API
    const data = {
        model: "text-davinci-003",
        prompt: question
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization: Bearer "+String(apiKey)
            },
            body: JSON.stringify(data)
        });

        const json = await response.json();
        // Extract the response text from the JSON object
        const responseText = json.choices[0].text;
        // Display the response text
        responseDiv.textContent = responseText;
    } catch (err) {
        document.write(err);
    }
});
