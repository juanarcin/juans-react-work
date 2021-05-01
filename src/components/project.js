import styled from 'styled-components';
import { FaAngular, FaReact, FaWordpress, FaCss3Alt } from "react-icons/fa";
import { SiJquery } from "react-icons/si";

function Project(props) {


	const ProjectCard = styled.div`
		margin: 0;
		padding: 0;
		background:#fff;
		margin: 10px;
		width: 100vw;
		display:inline-block;
		position: relative;
    
    @media screen and (min-width: 600px){
        width: 250px;
        min-height: 200px;
        & .description{
        	height: 200px;
        	position: absolute;
        	top: 80px;;
        	left: 0;
        	width: 100%;
        	text-align: left;
        	padding: 15px;
        	box-sizing: border-box;
        }
        & .projectFooter{
					position: absolute;
					bottom: 0px;
					left: 0;
					width: 100%;
					text-align: right;
					padding: 5px;
					box-sizing: border-box;
					font-weight: bold;
					font-size: 13px;
        }
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
			background: #61dafb;
			color: #20232a;
			& .header{
				background: #20232a;
				color: #61dafb;
			}
      & .projectFooter{
				background: #20232a;
				color: #61dafb;
				& a{
					color: #61dafb;
				}
      }
      & h3{
      	color: #20232a;
      }
		}

		&.Vanilla{
			color: #9435cf;
			background:#e9dcf1;
			& .header{
				background: #9435cf;
				color: #fff;
			}
      & .projectFooter{
				background: #9435cf;
				color: #fff;
				& a{
					color: #fff;
				}
      }
      & h3{
      	color: #9435cf;
      }
		}

		&.WordPress{
			background: #cfedfb;
			& .header{
				background: #21759b;
				color: #fff;
			}
      & .projectFooter{
				background: #21759b;
				color: #cfedfb;
				& a{
					color: #cfedfb;
				}
      }
      & h3{
      	color: #21759b;
      }
		}

		&.jQuery{
			background: #78cff5;
			color: #0769ad;
			& .header{
				background: #0769ad;
				color: #fff;
				& .icon{
					color: #78cff5;
				}
			}
      & .projectFooter{
				background: #0769ad;
				color: #78cff5;
				& a{
					color: #78cff5;
				}
      }
      & h3{
      	color: #0769ad;
      }
		}

		&.Angular{
			color: #c3002f;
      & h3{
      	color: #c3002f;
      }
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
      & .projectFooter{
				background: #358ee1;
				color: #fff;
				& a{
					color: #fff;
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
	if(props.tags == 'Vanilla'){ icon = <FaCss3Alt />}


  return (
  	<ProjectCard className={props.tags}>
  		<div className="header">
  			<span className="icon">{icon}</span> {props.tags}
  		</div>
  		<h3>{props.title}</h3>
  		<div className="description">{props.desc}</div>
  		<div className="projectFooter">
  			<a href={props.url} target="_blank">view project</a> | <a href={props.github} target="_blank">view code</a>
  		</div>


    </ProjectCard>
  );
}

export default Project;