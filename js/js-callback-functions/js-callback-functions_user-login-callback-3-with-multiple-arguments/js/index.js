console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!
function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
}

handleUserLogin(showWelcomeMessage);

// anonymous:
handleUserLogin((userName, userRole) => {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
});
