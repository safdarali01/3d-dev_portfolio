// Importing React library for building the component
import React from 'react';
// Importing the Navbar component from the sections folder
import Navbar from './sections/navbar';
import Hero from './sections/hero';

// Defining the main App component
const App = () => {
  return (
    // The main element that serves as the container for the application
    <main className='max-w-7xl mx-auto'>
      {/* Rendering the Navbar component */}
      <Navbar />
      <Hero />
    </main>
  );
};

// Exporting the App component as the default export
export default App;
