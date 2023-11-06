import React from "react";

const FormContact = () => {
  return (
    <form action="">
      <div className="mb-3">
        <label htmlFor="name" className="label-form-contact">Name</label>
        <input type="text" placeholder="Your Name" id="name" className="outline-none bg-[#222222] px-2  py-3 text-white rounded-md w-full text-sm" required/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="label-form-contact">Email</label>
        <input type="email" placeholder="Your Email" id="email" className="outline-none bg-[#222222] px-2  py-3 text-white rounded-md w-full text-sm" required/>
      </div>
      <div >
        <label htmlFor="message" className="label-form-contact">Message</label>
        <textarea
          name="msg"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          className="outline-none bg-[#222222] px-2  py-3 text-white rounded-sm w-full text-sm"
          required
        ></textarea>
      </div>

      <button type="submit" className="bg-gradient-to-r from-pink-500 to-yellow-500 p-3 rounded-2xl w-20 mt-8">Send</button>
    </form>
  );
};

export default FormContact;
