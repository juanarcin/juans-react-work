import {motion} from 'framer-motion';
import ProjectList from '../components/projectList.js'

function Work() {
  return (
		<motion.div exit={{opacity: 0}} animate={{opacity:1}} initial={{opacity:0}}>
			<ProjectList />
    </motion.div>
  );
}

export default Work;
