import React from "react";

function Navbar() {
  return (
    <>
      <nav className="border-b-2">
        <div className="flex justify-around items-center">
          <div>
            <img
              className="h-14"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7uzPrqT3fCNcXbZIKItXYmF5z2fJzjG_U6g&usqp=CAU"
              alt="Logo"
            />
          </div>
          <div>
            <button
              className="p-1.5 px-8 lg:px-8 xl:px-8 lg:p-2 xl:p-2 md:p-2 bg-red-700 rounded-md text-white"
              onClick={() => {
                alert(
                  "We are currently working on this feature, and it will be live soon"
                );
              }}
            >
              Booking
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
