import React from 'react';

import Button from './Button';

const FooterContact = ({ bgPrimary, bgSecondary, noText }) => {
  return (
    <>
      <div>
        <div
          className={`p-48 text-white flex flex-col gap-10
         ${
           bgPrimary ? 'bg-primary' : bgSecondary ? 'bg-secondary' : 'bg-zinc-800'
         } ${(bgPrimary || bgSecondary) && 'gap-4 bg-left px-[12rem] p-[14.5rem]'}`}
        >
          <h1 className="text-5xl">Let’s Work Together</h1>
          <span>
            {!noText && (
              <p className="tracking-wide">
                We’re always looking for new opportunities and are comfortable
                working internationally. Please <br /> get in touch and one of our
                project managers will contact you about beginning the proposal <br />{' '}
                process.
              </p>
            )}
          </span>
          <span>
            <Button title="Contact Us" destination="/contact" />
          </span>
        </div>
      </div>
    </>
  );
};

export default FooterContact;
