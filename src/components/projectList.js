import {useState} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {data} from '../data/projects.js';

import Project from './project.js';

function ProjectList() {
	console.log(data)

	const [activeTag, setActiveTag] = useState('All')

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
			&.active{
				background: #ce4f00; 
			}
		}

	`

  return (
  	<div>
  		<Tags>
  			<li onClick={() => updateTag('All')} class={activeTag == 'All' ? 'active' : ''}>All</li>
  			<li onClick={() => updateTag('React')} class={activeTag == 'React' ? 'active' : ''}>React</li>
  			<li onClick={() => updateTag('Angular')} class={activeTag == 'Angular' ? 'active' : ''}>Angular</li>
  			<li onClick={() => updateTag('jQuery')} class={activeTag == 'jQuery' ? 'active' : ''}>jQuery</li>
  			<li onClick={() => updateTag('WordPress')} class={activeTag == 'WordPress' ? 'active' : ''}>WordPress</li>
  			<li onClick={() => updateTag('CSS')} class={activeTag == 'CSS' ? 'active' : ''}>CSS</li>
  		</Tags>
			<motion.div exit={{opacity: 0}} animate={{opacity:1}} initial={{opacity:0}}>
				<div class="center">
					{data.map( project => {
						if(activeTag === 'All') {return (
							<Project title={project.title} tags={project.tag} id={project.id} desc={project.desc}/>
						)}
						if(activeTag === project.tag) {return (
							<Project title={project.title} tags={project.tag} id={project.id} desc={project.desc}/>
						)}
					})}
				</div>
			</motion.div>
    </div>
  );
}

export default ProjectList;