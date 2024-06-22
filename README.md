# Tickt | Discover Events
![tickt](https://github.com/andrewmartinn/nextjs-tickt/assets/152824513/1fd239bb-a9ab-4d25-9008-63fce8abd685)
![tickt2](https://github.com/andrewmartinn/nextjs-tickt/assets/152824513/16ae7d6e-bf7c-4717-b387-53fdd89a1c0c)
![tickt3](https://github.com/andrewmartinn/nextjs-tickt/assets/152824513/56f6ee22-8fe6-4048-8ff3-895507c3f79a)

Tickt is a web application that allows users to discover and book events. Users can search for events, view detailed information about each event, and book tickets. The application is built with Next.js, Tailwind CSS, and JSON Server for mock backend data.

## Technologies Used

- [Next.js](https://nextjs.org/): React framework for production
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/): Include popular icons in your React projects easily
- [React Markdown](https://github.com/remarkjs/react-markdown): Render Markdown in React
- [Use-Debounce](https://github.com/xnimorz/use-debounce): Debounce hook for managing debounce state
- [JSON Server](https://github.com/typicode/json-server): Mock REST API server for rapid prototyping
- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript
- [Embla Carousel](https://www.embla-carousel.com/): A lightweight carousel library with fluid motion


## Features

- Search for events
- View detailed information about events
- Select ticket tiers and display ticket summary
- Book tickets for events

## Project Outcomes

- **Effective Use of TypeScript**: Leveraged TypeScript for type-checking and defining types for component props, ensuring type safety throughout the application.
- **Created Reusable UI Components with Tailwind CSS**: Used Tailwind CSS to build UI components with utility-first styling.
- **State Management**: Managed application state effectively, handling asynchronous operations such as fetching data from the server and updating the UI accordingly.
- **Debounce Search Input**: Implemented a debounced search input to optimize the search functionality and improve user experience.
- **Mock Backend Events API**: Created a mock backend events API using JSON Server and consumed this API to display events.
- **Simulated Booking Process**: Simulated the booking process by allowing users to select tickets and showing a ticket summary.
- **Dynamic URL Updates**: Utilized `useSearchParams` and `URLSearchParams` to update the URL dynamically with the search query without page reload.
  
## Project Setup

This project was bootstrapped with [Nextjs](https://nextjs.org/docs/api-reference/create-next-app).

To get started you need to:

- Clone the project
- Install listed dependencies
- Run available scripts

### Install dependencies

```
npm install
```

### Run Next dev server (http://localhost:3000)

```
npm run dev
```

### Run the JSON server (http://localhost:5000)

```
npm run server
```

### To build for production

```
npm run build
```

## Deployment

To deploy this project run

```
  npm run deploy
```
