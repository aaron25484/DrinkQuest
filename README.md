

# DrinkQuest - Your Cocktail searcher

Made with **React, Typescript, Tailwind CSS, Jest** and deployed with **Netlify**

Due February 21 2024  
Made by [Aaron de los Santos](https://github.com/aaron25484)

## Table of Contents

- [DrinkQuest - Your Cocktail searcher](#DrinkQuest---Your-Cocktail-searcher)
  - [About the Project](#about-the-project)
  - [Visit the Page](#visit-the-page)
  - [Installation and Setup](#installation-and-setup)
  - [Running the Test Suite](#running-the-test-suite)
  - [Tecnologies Used](#tecnologies-used)
  - [Future Improvements](#future-improvements)

## About the Project

The main objective of this project is to search for Cocktails by one of its ingredients and deliver six cocktails. The first choices available must be non-alcoholic and the suggested cocktails can't have more than six ingredients. The data comes from https://www.thecocktaildb.com/ API.

## Visit the Page

The page is deployed on Netlify. You can visit it on this URL:

[DrinkQuest](https://drinkquest.netlify.app/)

## Installation and Setup

Clone the repository. You will need **[node](https://nodejs.org/es)** and **[pnpm](https://pnpm.io/)** installed globally on your machine.

```
https://github.com/aaron25484/DrinkQuest.git
```

Go to the project folder:

````
cd DrinkQuest
````

Install dependencies via pnpm:
 

``````
pnpm install
``````


Start the development server:
``````
pnpm run dev
``````


Visit the app:

[http://localhost:5173/](http://localhost:5173/)

## Running the Test Suite

Execute the following command to run the test suite:

````
pnpm test
````
The test suite will execute, and the results will be displayed in the terminal. You'll see information about which tests passed, failed, or encountered errors.

Also, if you want to run a specific test file or focus on a particular test suite, you can use the following command:

`````
pnpm test <name-of-the-file>
``````


## Tecnologies Used

- [React](https://es.react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Netlify](https://www.netlify.com/)
- [Jest](https://jestjs.io/es-ES/)

## Future Improvements

I would like to expand the possibilities of the search engine by adding more fields of exploration for the user. Also I would like to have a Favourites section so the users could save the ones that they like the most.
Also, I would like to improve the style of the application and give it a modern touch.

# Have fun with DrinkQuest!!!