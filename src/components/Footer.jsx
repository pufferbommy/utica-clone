import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="p-48 py-16 flex flex-col gap-6 tracking-wide">
        <div>
          <h1 className="text-4xl">Utica</h1>
        </div>
        <div className="flex gap-60 font-light">
          <p>
            123 Demo Street <br /> Copenhagen, Denmark
          </p>
          <p>
            (555) 555-5555 <br /> email@example.com
          </p>
        </div>
        <div className="font-light">
          <div>
            <span>Made with </span>
            <a
              className="underline underline-offset-2"
              rel="noreferrer"
              target={'_blank'}
              href="https://github.com/pufferbommy"
            >
              Pufferbommy
            </a>
            <div>
              <span>Designed by</span>{' '}
              <a
                className="underline underline-offset-2"
                rel="noreferrer"
                target={'_blank'}
                href="http://squarespace.com"
              >
                Squarespace
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
