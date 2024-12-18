import React, { useState } from 'react';

const ContactContainer = () => {
  return (
    <div className="lg:bg-opacity-5 px-[50px] py-[75px] mt-[100px] lg:mx-[500px] h-screen">
      <div className="text-left">
        <p className="text-sm text-opacity-25">Contact</p>
        <h1 className="text-2xl">Let's get in touch</h1>

          <form
            className="grid grid-cols-1 gap-3 mt-5"
            action="https://formspree.io/f/mjkvorja"
            method="POST"
          >
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              className="rounded-lg px-3 py-1 bg-[#DAC5A7] placeholder:text-[#DAC5A7] bg-opacity-5 border-[1px] border-[#DAC5A7] border-opacity-30"
              required
            />

            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              className="rounded-lg px-3 py-1 bg-[#DAC5A7] placeholder:text-[#DAC5A7] bg-opacity-5 border-[1px] border-[#DAC5A7] border-opacity-30"
              required
            />

            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              placeholder="Message"
              name="message"
              className="rounded-lg px-3 py-1 h-[100px] bg-[#DAC5A7] placeholder:text-[#DAC5A7] bg-opacity-5 border-[1px] border-[#DAC5A7] border-opacity-30"
              required
            />

            <button
              type="submit"
              className="rounded-lg py-3 px-5 font-normal bg-opacity-5 hover:bg-[#DAC5A7] hover:text-black bg-[#DAC5A7] text-[#DAC5A7] border-[#DAC5A7] border-[1px] duration-200"
            >
              Send Message
            </button>
          </form>
      </div>
    </div>
  );
};

export default ContactContainer;
