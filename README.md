# PetsPaw

Welcome to the PetsPaw! This is a web application that utilizes the [Cat API](https://thecatapi.com/) to showcase adorable cat images and information about various cat breeds. With this app, you can satisfy your love for cat by exploring their world.

https://catpaw-five.vercel.app/

## Technologies Used

This app is built using the following technologies:

- **Next.js:** For building server-rendered React application.
- **Tailwind CSS:** For quickly styling.
- **Redux:** For managing the app's global state.

## Features

- Browse a collection of cute cat images from the [Cat API](https://thecatapi.com/).
- Learn about various cat breeds, their characteristics, and origins.
- Save your favorite cat images to your personal collection.
- Vote for for images you like or dislike
- Upload your own cats.
 

## Getting Started

To get this app up and running on your local machine, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/dima-hlebov/cat-paw.git
   cd cat-paw
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the [Cat API](https://thecatapi.com/) key**:

   To access the [Cat API](https://thecatapi.com/), you'll need to [sign up for an API key](https://thecatapi.com/) and then add api key and api base url to the `.env.local` file as follows:

   ```
   API_BASE_URL=https://api.thecatapi.com/v1
   API_KEY=your-api-key
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Usage

- Explore the app to view cat images and information about cat breeds.
- Click on the heart icon to save your favorite cat images.
- To upload own image click "Upload" button
- For voting images click on the smile or sad emoji

## Contribution

If you'd like to contribute to this project, feel free to create a pull request or open an issue. We welcome any improvements, bug fixes, or new features that can make this app even better.

## Acknowledgments

- This app is powered by the [Cat API](https://thecatapi.com/).

Thank you for using the PetsPaw! We hope you enjoy your time with our furry and feathered friends. If you have any questions or encounter issues, please don't hesitate to reach out.

Happy cat browsing! 🐾🐱