# Dyanmic Project Showcase with Load More Features
This is a simple React application that demonstrates how to load products dynamically using the DummyJSON API and display them in a grid layout. The app fetches data from the API, displays product details, and provides a "Load More Products" button to fetch additional items when clicked. The app also features responsive images that adapt to various screen sizes.

## Features

- **Dynamic Data Loading**: Fetches products from the `https://dummyjson.com/products` API and displays them.
- **Load More**: Loads additional products when the "Load More Products" button is clicked.
- **Responsive Design**: Displays images and product details in a responsive layout that adapts to screen sizes.
- **Product Information**: Each product displays its title, price, rating, description (with a word limit), and a button to add to the cart.

## How It Works
1. Fetching Products:
 The app uses the fetch() function to retrieve data from the DummyJSON API. The API returns a list of products with various details such as title, price, description, and rating. The app supports   pagination by passing the limit and skip query parameters to the API.
- **limit=20**: Fetches 20 products per request.
- **skip={count*20}: Skips previously loaded products to fetch the next set.
2. Displaying Products:
   Products are displayed in a grid layout, with each product showing the title, image, price, rating, and a truncated description. The description is limited to the first 10 words to keep the UI clean. If there are more than 10 words, "..." is appended to the description.
3. Load More Button:
  A button labeled "Load More Products" allows the user to fetch and display more products. The button is disabled once 100 products have been loaded.

## Screenshots
Here are the screenshots of the app in action:

<img src="https://raw.githubusercontent.com/L3vi-Ackerman/Dyanmic-Project-Showcase-with-Load-More-Feature/refs/heads/main/src/output/main1.png" width="300" />
<img src="https://raw.githubusercontent.com/L3vi-Ackerman/Dyanmic-Project-Showcase-with-Load-More-Feature/refs/heads/main/src/output/main2.png" width="300" />
<img src="https://raw.githubusercontent.com/L3vi-Ackerman/Dyanmic-Project-Showcase-with-Load-More-Feature/refs/heads/main/src/output/main3.png" width="300" />
<img src="https://raw.githubusercontent.com/L3vi-Ackerman/Dyanmic-Project-Showcase-with-Load-More-Feature/refs/heads/main/src/output/main4.png" width="300" />

## Responsive Design
<img src="https://raw.githubusercontent.com/L3vi-Ackerman/Dyanmic-Project-Showcase-with-Load-More-Feature/refs/heads/main/src/output/responsive1.png" width="150" />
<img src="https://raw.githubusercontent.com/L3vi-Ackerman/Dyanmic-Project-Showcase-with-Load-More-Feature/refs/heads/main/src/output/responsive2.png" width="150" />
