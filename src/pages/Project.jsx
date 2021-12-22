import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import ProjectHeader from '../components/ProjectHeader';
import ProjectHeaderSkeleton from '../components/ProjectHeaderSkeleton';

const Project = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [prevProject, setPrevProject] = useState({ title: '', destination: '' });
  const [nextProject, setNextProject] = useState({ title: '', destination: '' });

  useEffect(() => {
    switch (id) {
      case 'project-one':
        setPrevProject((prev) => ({ ...prev, title: '', destination: '' }));
        setNextProject((prev) => ({
          ...prev,
          title: 'Project Two',
          destination: '/work-1/project-two',
        }));
        break;
      case 'project-two':
        setPrevProject((prev) => ({
          ...prev,
          title: 'Project One',
          destination: '/work-1/project-one',
        }));
        setNextProject((prev) => ({
          ...prev,
          title: 'Project Three',
          destination: '/work-1/project-three',
        }));
        break;
      case 'project-three':
        setPrevProject((prev) => ({
          ...prev,
          title: 'Project Two',
          destination: '/work-1/project-two',
        }));
        setNextProject((prev) => ({
          ...prev,
          title: 'Project Four',
          destination: '/work-1/project-four',
        }));
        break;
      case 'project-four':
        setPrevProject((prev) => ({
          ...prev,
          title: 'Project Three',
          destination: '/work-1/project-three',
        }));
        setNextProject((prev) => ({
          ...prev,
          title: '',
          destination: '',
        }));
        break;
      default:
    }
  }, [id]);

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
        <ProjectHeader
          projects={projects}
          selectedProject={selectedProject}
          prevProject={prevProject}
          nextProject={nextProject}
        />
      ) : (
        <ProjectHeaderSkeleton />
      )}
    </>
  );
};

export default Project;
