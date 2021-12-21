import React from 'react';

const Person = ({ img, name, text }) => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <img src={img} className="object-contain" alt="" />
        <h1 className="text-2xl">{name}</h1>
        <p className="font-light">{text}</p>
      </div>
    </>
  );
};

export default Person;
