import React from 'react';

const cityImage =
  'https://images.squarespace-cdn.com/content/v1/5ce435d6bea1ed00016ba287/1562693788593-IG5CIQP0I3XCWSURJAXP/MHeiderich_ReflexionenZwei-05-copy.jpg?format=2500w';

const Header = () => {
  return (
    <>
      <div className="p-16 pt-8">
        <h1 className="text-7xl leading-tight">
          Utica is an architecture firm <br />
          based in Copenhegan, Denmark.
        </h1>
      </div>
      <div>
        <img className="object-cover h-[46rem] w-full" src={cityImage} alt="" />
      </div>
    </>
  );
};

export default Header;
