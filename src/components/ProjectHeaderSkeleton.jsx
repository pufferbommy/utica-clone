import React from 'react';

const defaultImg =
  'https://images.squarespace-cdn.com/content/v1/5ce435d6bea1ed00016ba287/1562950435847-0836TVY3TMPNM4S2L9RL/MHeiderich-NIP03-copy.jpg';

const ProjectHeader = () => {
  return (
    <>
      <div className="justify-center mb-20 flex py-24 px-20 gap-[35rem]">
        <h1 className="text-4xl blur-md">Lorem Remlo</h1>
        <p className="blur-md font-light tracking-widest max-w-3xl leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut
          tellus elementum sagittis vitae et. Vestibulum rhoncus est pellentesque
          elit ullamcorper dignissim cras. Et tortor at risus viverra adipiscing at
          in tellus integer. Integer vitae justo eget magna. Elit duis tristique
          sollicitudin nibh sit amet commodo. Nunc scelerisque viverra mauris in
          aliquam sem fringilla. Et pharetra pharetra massa massa ultricies mi quis
          hendrerit. Nisi porta lorem mollis aliquam ut porttitor leo a. Euismod
          elementum nisi quis eleifend quam adipiscing vitae proin. Sed libero enim
          sed faucibus turpis. Penatibus et magnis dis parturient montes nascetur
          ridiculus mus mauris. Vestibulum morbi blandit cursus risus at ultrices.
          Tristique magna sit amet purus gravida quis.
        </p>
      </div>
      <div>
        <img className="blur-md" src={defaultImg} alt="title" />
      </div>
    </>
  );
};

export default ProjectHeader;
