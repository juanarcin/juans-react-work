import {useState} from 'react';
import {motion} from 'framer-motion';

function About() {
  return (
	<motion.div exit={{opacity: 0}} animate={{opacity:1}} initial={{opacity:0}}>
		<h2>ABOUT</h2>
		<p>What is Lorem Ipsum?</p>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
		Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
		when an unknown printer took a galley of type and scrambled it to make a type 
		specimen book. It has survived not only five centuries, but also the leap into 
		electronic typesetting, remaining essentially unchanged. It was popularised in 
		the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
		and more recently with desktop publishing software like Aldus PageMaker including 
		versions of Lorem Ipsum.</p>
		<p>What is Lorem Ipsum?</p>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
		Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
		when an unknown printer took a galley of type and scrambled it to make a type 
		specimen book. It has survived not only five centuries, but also the leap into 
		electronic typesetting, remaining essentially unchanged. It was popularised in 
		the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
		and more recently with desktop publishing software like Aldus PageMaker including 
		versions of Lorem Ipsum.</p>
    </motion.div>
  );
}

export default About;
