import React from 'react';
import Person from '../components/Person';

const OurTeam = () => {
  return (
    <>
      <div className="max-w-[1125px] mb-32 mt-24 mx-auto">
        <div className="flex gap-8">
          <Person
            img="https://images.squarespace-cdn.com/content/v1/5c5a514d65019f01a2cb2be5/1560270383883-RD0ZZ5IWYVTAZQLOPC5S/image-asset.jpeg?format=1500w"
            name="First Name Last Name"
            text="It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."
          />
          <Person
            img="https://images.squarespace-cdn.com/content/v1/5c5a514d65019f01a2cb2be5/1565704487180-E5RP62PX84ONAOCUM5SN/erin.jpg?format=1500w"
            name="First Name Last Name"
            text="It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."
          />
        </div>
      </div>
    </>
  );
};

export default OurTeam;
