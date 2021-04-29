
import styled from 'styled-components';

function Project(props) {


	const ProjectCard = styled.ul`
		margin: 0;
		padding: 0;
		background:#fff;
		margin: 10px;
		max-width: 250px;
		display:inline-block;

		& li{
			display:inline-block;
			margin: 10px;
			background: red;
			padding: 5px 10px;
			border-radius: 10px;
		}

	`

  return (
  	<ProjectCard>
  		{props.title}
  		{props.tags}
  		{props.id}
  		{props.desc}
    </ProjectCard>
  );
}

export default Project;