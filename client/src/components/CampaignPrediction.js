// Declare the predictionResult variable

export async function predictCampaign(title) {
  const campaignTitle = title; // Assign the hardcoded campaign title

  const data = { campaign_title: campaignTitle };

  return fetch("http://127.0.0.1:5000/prediction", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    return result.prediction; // Update the predictionResult variable
  })
  .catch(error => {
    console.log("Error:", error);
  });
}

// Call the predictCampaign function when this module is imported