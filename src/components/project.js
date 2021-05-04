import styled from 'styled-components';
import { FaAngular, FaReact, FaWordpress, FaCss3Alt } from "react-icons/fa";
import { SiJquery } from "react-icons/si";

function Project(props) {


	const ProjectCard = styled.div`
		padding: 0;
		background:#fff;
		margin: 20px 0;
		width: 100%;
		display:inline-block;
		position: relative;
		box-sizing: border-box;
    & .projectFooter{
			padding: 10px;
			margin-top: 10px
    }
    
    @media screen and (min-width: 600px){
        width: 250px;
        min-height: 200px;
        margin: 20px;
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
	if(props.data.tag === 'Angular') {icon = <FaAngular />}
	if(props.data.tag === 'React'){ icon = <FaReact />}
	if(props.data.tag === 'jQuery'){ icon = <SiJquery />}
	if(props.data.tag === 'WordPress'){ icon = <FaWordpress />}
	if(props.data.tag === 'Vanilla'){ icon = <FaCss3Alt />}

	function project(){

		if(props.currentSite){
			return(
				<>
					<div className="header">
		  			<span className="icon">{icon}</span> {props.data.tag}
		  		</div>
		  		<h3>{props.data.localTitle}</h3>
		  		<div className="description">{props.data.localDescription}</div>
		  		<div className="projectFooter">
		  			 <a href={props.data.github} rel="noreferrer" target="_blank">view code</a>
		  		</div>
	  		</>
			)
		} else {
			return(
				<>
					<div className="header">
		  			<span className="icon">{icon}</span> {props.data.tag}
		  		</div>
		  		<h3>{props.data.publicTitle}</h3>
		  		<div className="description">{props.data.publicDescription}</div>
		  		<div className="projectFooter">
		  			<a href={props.data.url} rel="noreferrer" target="_blank">view project</a> | <a href={props.data.github} rel="noreferrer" target="_blank">view code</a>
		  		</div>
	  		</>
			)

		}
}

  return (
  	<ProjectCard className={props.data.tag}>
  		{project()}
    </ProjectCard>
  );
}

export default Project;