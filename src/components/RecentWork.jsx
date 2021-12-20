import React from 'react';
import ProjectCard from './ProjectCard';

const RecentWork = () => {
  return (
    <>
      <div className="p-16">
        <div>
          <h1 className="text-5xl mb-8">Recent Work</h1>
          <p className="font-light tracking-wide text-lg mb-10">
            Our practice spans from environmental retrofits of existing buildings to
            the complete <br /> planning and design of new neighborhoods and public
            spaces. While our work is <br /> aesthetically diverse, our projects are
            linked by a focus on enhancing human <br /> relationships through
            architecture.
          </p>
        </div>
        <div className="grid grid-cols-2 mt-32 gap-10">
          <ProjectCard
            image="https://images.squarespace-cdn.com/content/v1/5ce435d6bea1ed00016ba287/1562693679886-PWN6ZS4KGLZFKHBQQFJ1/MHeiderich-NIP03-copy.jpg?format=1000w"
            title="Project One"
            destination="/work-1/project-one"
          />
          <ProjectCard
            image="https://images.squarespace-cdn.com/content/v1/5ce435d6bea1ed00016ba287/1562950339456-XGX19I073LUIOQ734ZRH/MHeiderich-ReflexionenZwei-03-copy.jpg?format=1000w"
            title="Project One"
            destination="/work-1/project-two"
          />
          <ProjectCard
            image="https://images.squarespace-cdn.com/content/v1/5ce435d6bea1ed00016ba287/1562693068347-NZHZC20YE5XHVWCFIQRP/MHeiderich-NIP01-copy.jpg?format=1000w"
            title="Project One"
            destination="/work-1/project-three"
          />
          <ProjectCard
            image="https://images.squarespace-cdn.com/content/v1/5ce435d6bea1ed00016ba287/1562693952906-WHE0309VLUSKQJLTGCEQ/MHeiderich_ReflexionenZwei-04-copy.jpg?format=1000w"
            title="Project One"
            destination="/work-1/project-four"
          />
        </div>
      </div>
    </>
  );
};

export default RecentWork;
