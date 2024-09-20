import { useState } from "react"; // Importing React's useState hook for managing component state
import { navLinks } from "../constants"; // Importing navigation links from a constants file

// Function Component: NavItems
// This component returns the navigation items (links) as an unordered list (ul).
const NavItems = () => {
  return (
    <ul className="nav-ul">
      {" "}
      {/* The unordered list container for nav items */}
      {navLinks.map(({ id, name, href }) => (
        <li key={id} className="nav-li">
          {" "}
          {/* Rendering each nav link as a list item */}
          <a href={href} className="nav-li_a" onClick={() => {}}>
            {name}
          </a>{" "}
          {/* Each list item contains an anchor link */}
        </li>
      ))}
    </ul>
  );
};

// Function Component: Navbar
// This is the main navigation bar component that includes a toggle button for smaller screens.
const Navbar = () => {
  // Setting up state to manage whether the menu is open or closed
  const [isOpen, setIsOpen] = useState(true); // 'isOpen' determines if the menu is visible

  // Function to toggle the menu open/close state
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen); // Toggles the menu open or closed

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      {" "}
      {/* Header bar, fixed at the top */}
      <div className="max-w-7xl mx-auto">
        {" "}
        {/* Container to center and limit the width */}
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          {" "}
          {/* Flex container to align brand and menu toggle */}
          {/* Brand logo or name, which navigates to the home page */}
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Muhammad Safdar Ali {/* Displayed text for the brand */}
          </a>
          {/* Menu toggle button (visible on small screens only) */}
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
          >
            {/* Conditionally rendering the toggle icon based on whether the menu is open */}
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"} // Toggling between close and menu icons
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          {/* Navigation links (visible on medium/large screens) */}
          <nav className={"hidden sm:flex"}>
            {" "}
            {/* Hidden on small screens, displayed on larger screens */}
            <NavItems /> {/* Rendering the NavItems component */}
          </nav>
        </div>
      </div>
      {/* Sidebar navigation for small screens */}
      {/* Expands or collapses based on the state of 'isOpen' */}
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        {" "}
        {/* Conditional classes to expand/collapse the sidebar */}
        <nav className="p-5">
          {" "}
          {/* Navigation container with padding */}
          <NavItems /> {/* Rendering NavItems again inside the sidebar */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar; // Exporting the Navbar component to be used in other parts of the app
