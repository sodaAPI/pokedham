"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/image/pokedham.png"; // Adjust the path if necessary

// Wrap the component in useClient to ensure client-side rendering
export default function Card() {
  const [name, setName] = useState("");
  const [randomPokedham, setRandomPokedham] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Fetching data inside the client-side function to avoid server-side issues
    import("../config/data.json").then(({ default: data }) => {
      // Select a random entry from the data
      const randomIndex = Math.floor(Math.random() * data.khodam.length);
      const randomEntry = data.khodam[randomIndex];

      // Update state to display the random Pokedham
      setRandomPokedham(randomEntry);
    });
  };

  return (
    <div className="card bg-blue-950 w-full md:w-[500px] shadow-2xl p-5 mx-auto">
      <Image className="p-5" src={Logo} alt="Pokedham Logo" />

      <div className="card-body p-5">
        <div className="flex flex-col gap-2">
          <h2 className="card-title">What's your Pokedham?</h2>
          <p>Enter your name below to see your Pokedham!</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name here"
            className="input input-bordered w-full max-w-xs md:max-w-full my-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <div className="card-actions justify-start pt-5">
            <button
              type="submit"
              className="btn btn-accent font-bold text-[16px] text-purple-800">
              Confirm
            </button>
          </div>
        </form>

        {randomPokedham && (
          <div className="flex flex-col py-5">
            <p className="text-[18px] font-semibold text-center">
              Your Pokedham is
            </p>
            <div className="flex flex-col gap-1 py-2">
              <p className="text-[36px] py-3 text-center">
                <b>{randomPokedham.name} !</b>
              </p>
              <p className="text-[16px]">
                <b>Description:</b> {randomPokedham.description}
              </p>
              <p className="text-[16px]">
                <b>Abilities:</b> {randomPokedham.abilities.join(", ")}
              </p>
            </div>
          </div>
        )}

        <p className="pt-5 text-[10px]">
          Made with <a className="text-red-600">❤</a> by{" "}
          <a
            className="hover:text-blue-500 hover:underline"
            href="https://github.com/sodaAPI">
            @sodaAPI
          </a>
        </p>
      </div>
    </div>
  );
}
