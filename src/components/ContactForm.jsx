import React, { useState } from 'react';
import { addNewDoc } from '../firebase/config';

const initState = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const [contact, setContact] = useState(initState);
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPending(true);
    addNewDoc(contact).then((doc) => {
      if (doc) {
        setSuccess(true);
      }
      setContact(initState);
      setIsPending(false);
    });
  };
  return (
    <>
      <div className="my-28 mb-48 ml-56">
        {success && <div className="font-light">Thank you!</div>}
        {!success && (
          <form onSubmit={handleSubmit}>
            <h1 className="mb-2">Name *</h1>
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    name="firstName"
                    value={contact.firstName}
                    onChange={handleChange}
                    required
                    className="input w-[335px]"
                  />
                  <h2>First Name</h2>
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    required
                    name="lastName"
                    value={contact.lastName}
                    onChange={handleChange}
                    className="input w-[335px]"
                  />
                  <h2>Last Name</h2>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <h1 className="mb-2">Email *</h1>
                  <input
                    type="text"
                    required
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    className="input w-[685px]"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <h1 className="mb-2">Subject *</h1>
                  <input
                    type="text"
                    required
                    value={contact.subject}
                    onChange={handleChange}
                    name="subject"
                    className="input w-[685px]"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <h1 className="mb-2">Message *</h1>
                  <textarea
                    rows={4}
                    required
                    value={contact.message}
                    onChange={handleChange}
                    name="message"
                    cols={80}
                    className="input"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-black hover:bg-gray-800 duration-300 text-white px-8 py-5"
                >
                  {isPending ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default ContactForm;
