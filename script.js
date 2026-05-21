function searchRecommendation() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("results");

    let content = "";

    if (input.includes("beach")) {
        content = `
            <div class="card">
                <h2>Maldives Beach</h2>
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e">
            </div>

            <div class="card">
                <h2>Goa Beach</h2>
                <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206">
            </div>
        `;
    }

    else if (input.includes("temple")) {
        content = `
            <div class="card">
                <h2>Meenakshi Temple</h2>
                <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220">
            </div>

            <div class="card">
                <h2>Angkor Wat</h2>
                <img src="https://images.unsplash.com/photo-1605640840605-14ac1855827b">
            </div>
        `;
    }

    else if (input.includes("country")) {
        content = `
            <div class="card">
                <h2>Japan</h2>
                <img src="https://images.unsplash.com/photo-1492571350019-22de08371fd3">
            </div>

            <div class="card">
                <h2>Switzerland</h2>
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb">
            </div>
        `;
    }

    else {
        content = "<h2>No recommendations found.</h2>";
    }

    results.innerHTML = content;
}