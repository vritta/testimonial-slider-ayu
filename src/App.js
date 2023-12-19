import React from "react";
import Testimonials from "./components/Testimonials";
const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div>
        <h1>Our Testimonials</h1>
        <div></div>
        <Testimonials/>
      </div>
    </div>
  );
};

export default App;
