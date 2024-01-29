import axios from 'axios';

export async function recordAchievement(internal_name) {
  // Check if user is logged in (you need to implement this logic)

  // If the user is logged in, send the achievement to the server
  if (userIsLoggedIn()) {
    const url = 'your_server_endpoint'; // Replace with your actual server endpoint

    try {
      const response = await axios.post(url, { internal_name }, {
        headers: {
          'Content-Type': 'application/json',
          // You may need to include authentication headers here
          // Example: 'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
        },
      });

      // Handle successful response (if needed)
      console.log('Achievement recorded on the server', response.data);
    } catch (error) {
      // Handle errors during the request
      console.error('Error recording achievement:', error.message);
    }
  } else {
    // If the user is not logged in, store achievement in local storage
    localStorage.setItem(internal_name, 'true');
    console.log('Achievement recorded in local storage');
  }
}

function userIsLoggedIn() {
  // Implement the logic to check if the user is logged in
  // Return true if logged in, false otherwise
  return true; // Placeholder, replace with actual logic
}
