'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(enteredFirstName, enteredLastName, enteredEmail, enteredMessage);
    // ReSetting the Input field to empty state
    setEnteredFirstName('');
    setEnteredLastName('');
    setEnteredEmail('');
    setEnteredMessage('');
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_KEY as string,
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          Swal.fire({
            title: 'Message Send Successfully!',
            text: 'Thank you for contacting me.',
            icon: 'success',
            showConfirmButton: false,
            timer: 2500,
          });
        },
        (err) => {
          console.log('FAILED...', err);
          Swal.fire({
            title: 'OPPS!',
            text: 'Something Went wrong! Please try again later.',
            icon: 'error',
            showCloseButton: true,
            showConfirmButton: false,
            timer: 4500,
          });
        },
      );
  };

  const userFirstNameHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEnteredFirstName(event.target.value);
  };

  const userLastNameHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEnteredLastName(event.target.value);
  };

  const userEmailHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEnteredEmail(event.target.value);
  };

  const userMessageHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEnteredMessage(event.target.value);
  };

  return (
    <div className="flex h-[640px] w-[345px] flex-1 flex-col space-y-[16px] rounded-[16px] bg-white p-[24px] text-[12px] sm:w-[592px] md:h-full md:w-[780px] md:space-y-[28px] md:p-[32px]">
      <h3 className="font-poppins_bolder text-[16px] md:text-[24px]">
        Send Message
      </h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className="space-y-[14px] md:space-y-[16px]">
          <div className="flex flex-1 flex-col space-x-0 md:flex-row md:space-x-[16px]">
            <div className="mb-[14px] flex flex-1 flex-col md:mb-0">
              <label className="input-label">First Name</label>
              <input
                type="text"
                className="input"
                name="first_name"
                onChange={userFirstNameHandler}
                value={enteredFirstName}
                required
              />
            </div>
            <div className="flex flex-1 flex-col">
              <label className="input-label">Last Name</label>
              <input
                type="text"
                className="input"
                name="last_name"
                onChange={userLastNameHandler}
                value={enteredLastName}
                required
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <label className="input-label">Email</label>
            <input
              type="text"
              className="input"
              name="email"
              onChange={userEmailHandler}
              value={enteredEmail}
              required
            />
          </div>
          <div className="flex flex-1 flex-col">
            <label className="input-label">Your Message</label>
            <textarea
              name="message"
              onChange={userMessageHandler}
              value={enteredMessage}
              className="bg-lightGray h-[160px] rounded-[8px] p-[16px] md:h-[314px]"
              required
            />
          </div>
        </div>
        <div className="mt-[16px] flex flex-1 justify-start md:mt-[28px] md:justify-end">
          <div className="w-full md:w-[160px]">
            <button
              type="submit"
              className="submit-btn font-poppins_medium bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 flex w-full items-center justify-center overflow-hidden rounded-[24px] px-[8px] py-[12px] uppercase text-white shadow-[0_4px_9px_-4px_#3b71ca] transition-all duration-[0.2s] ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
              <span className="text-[12px] md:text-[16px]">Submit</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
