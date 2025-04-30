"use client";

import { useState } from "react";
import Input from "../inputs/Input";
import Textarea from "../inputs/Textarea";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      email,
      message,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-5">
          <Input
            id={"name"}
            label={"Your Name"}
            type="text"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            id={"email"}
            label={"Your Email"}
            type="email"
            autoComplete="on"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Textarea
          id={"message"}
          label={"Message"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="submit"
          value="Send Message"
          className="font-roboto font-light text-white bg-[var(--color-dark-blue)] hover:bg-[var(--color-dark-gray)] self-center px-4 py-1.5 cursor-pointer"
        />
      </div>
    </form>
  );
}
