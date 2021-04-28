import {useState} from 'react';
import styled from 'styled-components';
import VideoSrc from './background.mp4';

const VideoBackground = styled.div`
	position: absolute;
	top:0;
	left: 0;
	width: 100vw;
	height: 100vh;
	overflow:hidden;
	z-index: 0;
`;
const Container = styled.div`
	width: 300%;
	left: -100%;
	min-height: 100vh;
`;
const Video = styled.video`
	position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    background-size: cover;
`;


function Background() {

  return (
		
		<VideoBackground>
			<Container>
				<Video className='videoTag' autoPlay loop muted>
				   <source src={VideoSrc} type='video/mp4' />
				</Video>
			</Container>
		</VideoBackground>
  );
}

export default Background;
