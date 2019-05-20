// Add your code here

configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
     "Accept": "application/json"
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle"
  })
};

fetch(destinationURL, configurationObject);
