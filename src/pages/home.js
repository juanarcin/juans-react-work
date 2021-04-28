import {useState} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import VideoBackground from '../components/background/background.js';
import Intro from '../components/introText.js';



const Fade = styled.div`
	position: absolute;
	top:0;
	left:0;
	width: 100vw;
	height: 100vh;
	z-index:10;
	background: #000;
	transition: all ease 2s;
	&.fadeOut{
		background: transparent;
		z-index: 0
	}
`
function Home() {
	const [fadeOut, startFadeOut] = useState(false)

	setTimeout(function () {
    startFadeOut(true)
  }, 2000);

  return (
		<motion.div exit={{opacity: 0}} animate={{opacity:1}} initial={{opacity:1}}>
			<Fade className={fadeOut  ? 'fadeOut' : ''} />
			<VideoBackground />
			<Intro />
    </motion.div>
  );
}

export default Home;
