import React from 'react';

const AboutHeader = () => {
  return (
    <>
      <div
        className="flex p-44 py-24 gap-[35rem]
      "
      >
        <div>
          <h1 className="text-5xl">About</h1>
        </div>
        <div>
          <p className="max-w-3xl font-light tracking-wider leading-relaxed">
            We think of architecture not as a single practice, but as several
            interlocking ones. Landscapes are inseparable from structures, ecology is
            inseparable from building requirements, and improving human relationships
            is the ultimate goal of any project. Aesthetic movements come and go, but
            we have found these principles to be timeless. <br />
            <br /> As partners, we strive for honesty and clarity. Our first job is
            to understand the client’s vision and needs, not to present our own. We
            value timeliness, direct communication and prototypes over presentations,
            as well as the occasional face-to-face meeting over a drink or a meal.{' '}
            <br />
            <br />
            Over the years, we have been fortunate to collaborate with some excellent
            clients on some wonderful projects, but we believe it is still too early
            to weigh in on the success of the work. A building exists in time and its
            usefulness is directly related to how well it continues to perform.{' '}
            <br />
            <br /> We are proud of our Danish home and heritage, but do not consider
            ourselves exponents of Danish design. National style has no place in
            architecture, where a building must first and foremost be suited to local
            needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
