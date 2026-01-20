import React from "react";

function Text() {
  return (
    <div
      className="
        flex justify-center
        mt-8 sm:mt-12
        px-4 sm:px-8 lg:px-0
        lg:ml-44
        cursor-pointer
      "
    >
      <div
        className="
          text-base sm:text-lg lg:text-xl
          w-full max-w-[900px]
          text-center lg:text-left
        "
      >
        <span
          className="
            text-black font-bold
            text-2xl sm:text-3xl
            lg:ml-56
          "
        >
          Fresh and{" "}
        </span>
        <span
          className="
            text-primaryDark font-bold
            text-3xl sm:text-4xl
          "
        >
          Tasty
        </span>

        <h1 className="mt-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          aspernatu
        </h1>
        <h1 className="sm:pl-6">
          asperiores officia, deleniti assumenda vel aliquid distinctio,
          nesciunt
        </h1>
        <h1 className="sm:pl-32">
          saepe explicabo fugit sed nulla sit voluptatum
        </h1>
      </div>
    </div>
  );
}

export default Text;
