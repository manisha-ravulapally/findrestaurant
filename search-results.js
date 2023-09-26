document.addEventListener("DOMContentLoaded", function () {
    // Get the location query parameter from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const locationQuery = queryParams.get("location");

    // Display the location query as the page title
    const pageTitle = document.querySelector("header h1");
    pageTitle.textContent = `RESTAURANTS IN  ${locationQuery}`;

    // Simulated restaurant data (replace with actual data retrieval logic)
    const restaurants = [
        { name: "Restaurant 1",
         address: "123 Main St",
          cuisine: "Italian",
           location: "Location 1", 
           imageUrl: "images/c1.jpg",
           rating: 4.5 
        },
        { name: "Restaurant 2",
         address: "456 Oak Ave", 
         cuisine: "Mexican",
          location: "Location 2",
          imageUrl: "images/c1.jpg", 
          rating: 4.2 
        },
        { name: "Restaurant 2",
        address: "456 Oak Ave", 
        cuisine: "Mexican",
         location: "Location 2",
         imageUrl: "images/c1.jpg", 
         rating: 4.2 
       },
       { name: "Restaurant 2",
       address: "456 Oak Ave", 
       cuisine: "Mexican",
        location: "Location 2",
        imageUrl: "images/c1.jpg", 
        rating: 4.2 
      },
      { name: "Restaurant 2",
      address: "456 Oak Ave", 
      cuisine: "Mexican",
       location: "Location 2",
       imageUrl: "images/c1.jpg", 
       rating: 4.2 
     },
     { name: "Restaurant 2",
     address: "456 Oak Ave", 
     cuisine: "Mexican",
      location: "Location 2",
      imageUrl: "images/c1.jpg", 
      rating: 4.2 
    },
    { name: "Restaurant 2",
    address: "456 Oak Ave", 
    cuisine: "Mexican",
     location: "Location 2",
     imageUrl: "images/c1.jpg", 
     rating: 4.2 
   },
        { name: "Restaurant 3",
         address: "789 Elm Rd", 
         cuisine: "Asian Fusion", 
         location: "Location 1",
         imageUrl: "images/c1.jpg",
          rating: 4.7 
        },
        // Add more restaurant data as needed
    ];

    // Filter restaurants based on the entered location
    const filteredRestaurants = restaurants.filter(restaurant => restaurant.location === locationQuery);

    // Display restaurant results
    const restaurantList = document.querySelector(".restaurant-list");
// Function to get a random light color class
   function getRandomLightColorClass() {
    const colorClasses = ["light-color-1", "light-color-2", "light-color-3"]; // Add more light color classes as needed
    const randomIndex = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[randomIndex];
}


    filteredRestaurants.forEach(restaurant => {
        // const restaurantCard = document.createElement("div");
        // restaurantCard.classList.add("restaurant-card");

        // const restaurantInfo = `
            // <h2>${restaurant.name}</h2>
            // <p>Address: ${restaurant.address}</p>
            // <p>Cuisine: ${restaurant.cuisine}</p>
            // <div class="rating">
                // <!-- Display the star rating here (similar to your previous code) -->
            // </div>
        // `;

        // restaurantCard.innerHTML = restaurantInfo;
        // restaurantList.appendChild(restaurantCard);
        // Create a restaurant card element
        const card = document.createElement("div");
        card.classList.add("restaurant-card");
      // Add a random light background color class to the card
      card.classList.add(getRandomLightColorClass());



        // Create an image element for the restaurant
        const image = document.createElement("img");
        image.classList.add("restaurant-image");
        image.src = restaurant.imageUrl; // Set the image source
        image.alt = restaurant.name; // Set alt text for accessibility

        // Create content for the card
        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        const restaurantName = document.createElement("h2");
        restaurantName.textContent = restaurant.name;

        const restaurantAddress = document.createElement("p");
        restaurantAddress.textContent = `Address: ${restaurant.address}`;

        const restaurantCuisine = document.createElement("p");
        restaurantCuisine.textContent = `Cuisine: ${restaurant.cuisine}`;
        // Create and append star icons for rating (similar to your previous code)
        const rating = document.createElement("div");
        rating.classList.add("rating");

        // Calculate the number of filled stars based on the rating (assuming a rating out of 5)
        const filledStars = Math.floor(restaurant.rating);
        const emptyStars = 5 - filledStars;

        // Add filled star icons
        for (let i = 0; i < filledStars; i++) {
            const filledStar = document.createElement("span");
            filledStar.classList.add("star");
            filledStar.innerHTML = "&#9733;"; // Filled star character
            rating.appendChild(filledStar);
        }

        // Add empty star icons
        for (let i = 0; i < emptyStars; i++) {
            const emptyStar = document.createElement("span");
            emptyStar.classList.add("star");
            emptyStar.innerHTML = "&#9734;"; // Empty star character
            rating.appendChild(emptyStar);
        }

        // Append the star rating to the card
        card.appendChild(rating);
        // Create a clickable link for each restaurant card
        const restaurantLink = document.createElement("a");
        restaurantLink.href = `restaurant-${restaurant.name.toLowerCase().replace(/\s+/g, "-")}.html`; // Create a unique URL based on the restaurant name
        restaurantLink.classList.add("restaurant-link"); // Add a CSS class for styling (optional)
        restaurantLink.textContent = "View Details"; // Label for the link (optional)

        // Append the link to the card
        cardContent.appendChild(restaurantLink);



        // Append elements to the card
        cardContent.appendChild(restaurantName);
        cardContent.appendChild(restaurantAddress);
        cardContent.appendChild(restaurantCuisine);
        cardContent.appendChild(rating);

        card.appendChild(image);
        card.appendChild(cardContent);

        // Append the card to the restaurant list
        restaurantList.appendChild(card);

    });
});









