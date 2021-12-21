import React from 'react';

const PressHeader = () => {
  return (
    <>
      <div
        className="flex p-44 py-24 gap-[35rem]
      "
      >
        <div>
          <h1 className="text-5xl">Press</h1>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            <p className="max-w-3xl text- text-2xl tracking-wider leading-relaxed">
              “Their buildings often establish expectations and then flip them,
              creating a sense of weightlessness and wonder.”
            </p>
            <p>– Press Source</p>
          </div>
          <div className="flex flex-col gap-10">
            <p className="max-w-3xl text- text-2xl tracking-wider leading-relaxed">
              “Utica have established themselves at the forefront of a new class of
              architecture studios that practice ‘placemaking,’ a sort of total
              design philosophy that encompasses buildings, landscapes, ecology and
              social interaction.”
            </p>
            <p>– Press Source</p>
          </div>
          <div className="flex flex-col gap-10">
            <p className="max-w-3xl text- text-2xl tracking-wider leading-relaxed">
              “Surprisingly, three of my favorite projects from last year came from
              the same small studio: Utica. With a combination of deep research and
              spontaneous wit, their practice has injected new ideas into an
              architectural landscape that desperately needs them.”
            </p>
            <p>– Press Source</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PressHeader;
