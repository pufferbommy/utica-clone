import React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <div className="flex gap-10 container mx-auto">
        <div className="flex flex-col my-28 mb-48 gap-12">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl">Let’s Work Together</h1>
            <p className="max-w-lg font-light">
              Further case studies available upon request. Please provide some
              information on your project or goals and we’ll move the conversation on
              from there.
            </p>
          </div>
          <hr className="w-80 border-gray-700" />
          <div className="flex flex-col font-light gap-6">
            <div>
              <div>123 Demo Street</div>
              <div>Copenhagen, Denmark</div>
            </div>
            <div>
              <div>(555) 555-5555</div>
              <div>email@example.com</div>
            </div>
            <div className="flex gap-2 text-2xl">
              <a
                target={'_blank'}
                rel="noreferrer"
                className="group"
                href="https://www.instagram.com/squarespace/"
              >
                <AiOutlineInstagram className="duration-300 group-hover:fill-slate-800" />
              </a>{' '}
              <a
                target={'_blank'}
                rel="noreferrer"
                className="group"
                href="https://twitter.com/squarespace"
              >
                <AiOutlineTwitter className="duration-300 group-hover:fill-slate-800" />
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
