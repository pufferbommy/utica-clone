import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import ProjectHeader from '../components/ProjectHeader';

const Project = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (projects) {
      setSelectedProject(projects.filter((project) => project.id === id)[0]);
    }
  }, [projects, id]);

  useEffect(
    () =>
      onSnapshot(collection(db, 'project'), (snapshot) => {
        setProjects(
          snapshot.docs.map((doc) => {
            const id = doc.id;
            return { ...doc.data(), id: id };
          }),
        );
      }),
    [],
  );
  return (
    <>
      {selectedProject ? (
        <ProjectHeader selectedProject={selectedProject} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Project;
