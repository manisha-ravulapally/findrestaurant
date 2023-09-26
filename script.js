// document.addEventListener("DOMContentLoaded", function () {
    // const searchInput = document.getElementById("searchInput");
    // const searchButton = document.getElementById("searchButton");
    // const locationSelect = document.getElementById("locationSelect");

    // searchButton.addEventListener("click", function () {
        // const searchTerm = searchInput.value;
        // const selectedLocation = locationSelect.value;

        // if (searchTerm.trim() !== "") {
            // Redirect to the search results page with the selected location and search query
            // const searchResultsUrl = `search-results.html?location=${selectedLocation}&query=${encodeURIComponent(searchTerm)}`;
            // window.location.href = searchResultsUrl;
        // }
    // });
// });
// document.addEventListener("DOMContentLoaded", function () {
    // const searchInput = document.getElementById("searchInput");
    // const searchButton = document.getElementById("searchButton");
    // const locationSelect = document.getElementById("locationSelect");

    // searchButton.addEventListener("click", function () {
        // const searchTerm = searchInput.value;
        // const selectedLocation = locationSelect.value;
// 
        // if (searchTerm.trim() !== "") {
            // console.log("Selected Location:", selectedLocation);
            // console.log("Search Term:", searchTerm);
            // 
            // Redirect to the search results page with the selected location and search query
            // const searchResultsUrl = `search-results.html?location=${selectedLocation}&query=${encodeURIComponent(searchTerm)}`;
            // window.location.href = searchResultsUrl;
        // }
    // });
// });



    document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.getElementById("searchInput");
        const searchButton = document.getElementById("searchButton");

        searchButton.addEventListener("click", function () {
            const locationQuery = searchInput.value;

            if (locationQuery.trim() !== "") {
                // Redirect to the search results page with the location query as a parameter
                const searchResultsUrl = `search-results.html?location=${encodeURIComponent(locationQuery)}`;
                window.location.href = searchResultsUrl;
            }
        });
    });



