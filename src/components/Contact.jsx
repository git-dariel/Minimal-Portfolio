import React, { useState } from "react";
import Title from "./Title";
import { toast } from "react-toastify";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.warn("Please fill in all fields.");
      return;
    }
    if (!validateEmail(email)) {
      toast.warn("Please enter a valid email address.");
      return;
    }
    e.target.submit();
  };

  return (
    <div className="flex flex-col mb-10">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/wbrkynwa"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
          onSubmit={handleSubmit}
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="text-center inline-block px-5 py-3 w-max text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}
