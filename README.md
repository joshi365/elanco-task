# Country Data Dashboard

This project is a Next.js application built with TypeScript that fetches and displays country data from the REST Countries API.

## Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-link>
    cd <repository-directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install # or yarn install
    ```

3.  **Set up environment variables (if any):**

    * If you need any environment variables, create a `.env.local` file in the root of the project.
    * Add any necessary variables (e.g., API keys, if you were using a different API or had specific configurations).

4.  **Run the application:**

    ```bash
    npm run dev # or yarn dev
    ```

5.  **Open your browser:**

    * Go to `http://localhost:3000` to view the dashboard.

## Additional Notes

* **API Endpoint:** The application uses the following REST API endpoint to fetch country data: `https://restcountries.com/v3.1/all`
* **Data Handling:**
    * The application uses TypeScript interfaces to define the structure of the country data. 
    * Functions are implemented to sort countries by population, filter by region, and search by name or capital.
* **UI Components:**
    * Country cards are displayed in a responsive grid layout. 
    * Each card includes the country's flag, name, capital, population, and region. 
    * Clicking on a card opens a detailed view with additional information. 
* **State Management:**
    * React hooks are used for local state management. 
* **Performance:**
    * Lazy loading is implemented for country cards.
    * Next.js Image component is used for optimized image loading. 
    * Memoization is used to prevent unnecessary re-renders. 
* **Advanced Features:**
    * A custom hook is used for fetching and caching API data 
* **Testing:**
    * Unit tests are written for utility functions.
    * Component tests are created using React Testing Library.
    * Integration tests are implemented for the main page
