import styled from 'styled-components';
import { FaAngular, FaReact, FaWordpress, FaCss3Alt } from "react-icons/fa";
import { SiJquery } from "react-icons/si";

function Project(props) {


	const ProjectCard = styled.div`
		margin: 0;
		padding: 0;
		background:#fff;
		margin: 10px;
		width: 100%;
		display:inline-block;
    
    @media screen and (min-width: 600px){
        width: 250px;
    }

		& .icon{
			font-size: 25px;
			display:inline-block;
    	float: left;
    	width: 0;
		}

		& .header{
				padding: 5px;
				height: 25px;
				font-size: 20px
		}

		&.React{
			& .header{
				background: #20232a;
				color: #61dafb;
			}
		}

		&.CSS{
			& .header{
				background: #3595cf;
				color: #fff;
			}
		}

		&.WordPress{
			& .header{
				background: #21759b;
				color: #fff;
			}
		}

		&.jQuery{
			& .header{
				background: #0769ad;
				color: #fff;
				& .icon{
					color: #78cff5;
				}
			}
		}

		&.Angular{
			& .header{
				background: #358ee1;
				color: #fff;
				& .icon{
					color: #c3002f;
					& svg{
						position: relative;
						z-index: 2;
					}
					&:after{
						content: '';
				    display: inline-block;
				    height: 15px;
				    width: 13px;
				    background: #fff;
				    position: relative;
				    z-index: 1;
				    left: 6px;
				    top: -35px;
					}
				}
			}
		}
	`
  let icon;

  //generate icons
	if(props.tags == 'Angular') {icon = <FaAngular />}
	if(props.tags == 'React'){ icon = <FaReact />}
	if(props.tags == 'jQuery'){ icon = <SiJquery />}
	if(props.tags == 'WordPress'){ icon = <FaWordpress />}
	if(props.tags == 'CSS'){ icon = <FaCss3Alt />}


  return (
  	<ProjectCard className={props.tags}>
  		<div className="header">
  			<span className="icon">{icon}</span> {props.tags}
  		</div>
  		<h3>{props.title}</h3>
  		{props.desc}
    </ProjectCard>
  );
}

export default Project;