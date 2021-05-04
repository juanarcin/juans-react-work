import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

import Project from './project.js';

function ProjectList() {

	const [activeTag, setActiveTag] = useState('All')
  const [projectData, setProjectData] = useState(null);
  const [techList, setTechList] = useState(null);




  useEffect(() => {
    fetch('https://juans.work/shared/data.json')
    .then(response => response.json())
    .then(function(json){
    	setProjectData(json.projects)
    	setTechList(json.tools)
    });

  }, [])

	function updateTag(tag){
		console.log('data fetched from juans.work')
		setActiveTag(tag)
	}

	const Tags = styled.ul`
		margin: 20px 0 0 0;
		padding: 0;
		text-align: center;

		& li{
			display:inline-block;
			margin: 10px;
			background: #eaa071;
			padding: 5px 10px;
			border-radius: 10px;
			color:#fff;
			cursor: pointer;
			transition: all ease .5s;
			&.active, &:hover{
				background: #ce4f00; 
			}
		}

	`
	if(projectData == null || techList == null){
		return <p className="center">Loading...</p>
	}

  return (
  	<div>
  		<Tags>
  			<li onClick={() => updateTag('All')} className={activeTag === 'All' ? 'active' : ''}>All</li>
  			{techList.map( tech => {
  				return <li onClick={() => updateTag(tech)} className={activeTag === tech ? 'active' : ''} key={tech}>{tech}</li>
  			})}
  		</Tags>

			<motion.div exit={{opacity: 0}} animate={{opacity:1}} initial={{opacity:0}}>
				<div className="center">
					{projectData.map( project => {
						let currentProject = <Project 	data={project} currentSite={project.id === 1 ? true : false} key={project.id}/>

						if(activeTag === 'All') {
							return (
								currentProject
							)
						}

						if(activeTag === project.tag) {
							return (
								currentProject
							)
						}
						return null
					})}
				</div>
			</motion.div>
    </div>
  );
}

export default ProjectList;