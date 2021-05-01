import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

import Project from './project.js';

function ProjectList() {

	const [activeTag, setActiveTag] = useState('All')
  const [dataObj, setData] = useState(null);




  useEffect(() => {
    fetch('/shared/data.json')
    .then(response => response.json())
    .then(json => setData(json))

  }, [])

	function updateTag(tag){
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
	if(dataObj == null){
		return <p className="center">Loading...</p>
	}

  return (
  	<div>
	{console.log(dataObj)}
  		<Tags>
  			<li onClick={() => updateTag('All')} className={activeTag == 'All' ? 'active' : ''}>All</li>
  			<li onClick={() => updateTag('React')} className={activeTag == 'React' ? 'active' : ''}>React</li>
  			<li onClick={() => updateTag('Angular')} className={activeTag == 'Angular' ? 'active' : ''}>Angular</li>
  			<li onClick={() => updateTag('jQuery')} className={activeTag == 'jQuery' ? 'active' : ''}>jQuery</li>
  			<li onClick={() => updateTag('WordPress')} className={activeTag == 'WordPress' ? 'active' : ''}>WordPress</li>
  			<li onClick={() => updateTag('Vanilla')} className={activeTag == 'Vanilla' ? 'active' : ''}>Vanilla</li>
  		</Tags>

			<motion.div exit={{opacity: 0}} animate={{opacity:1}} initial={{opacity:0}}>
				<div className="center">
					{dataObj.map( project => {
						console.log(project)

						if(activeTag === 'All') {
							return (
								<Project 	title={project.publicTitle} 
													tags={project.tag} 
													id={project.id} 
													desc={project.publicDescription} 
													key={project.id}/>
							)
						}
						if(activeTag === project.tag && project.id != 1) {
							return (
								<Project 	title={project.publicTitle} 
													tags={project.tag} 
													id={project.id} 
													desc={project.publicDescription} 
													key={project.id}/>
							)
							
						}
						else if(activeTag === 'React' && project.id === 1){ 
							return(
								<Project 	title={project.localTitle} 
													tags={project.tag} 
													id={project.id} 
													desc={project.localDescription} 
													key={project.id} 
													url={project.url}
													github={project.github}/>
							)
						}
					})}
				</div>
			</motion.div>
    </div>
  );
}

export default ProjectList;