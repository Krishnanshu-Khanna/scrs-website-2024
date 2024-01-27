import {useRef} from "react";
import "./services.scss";
import {motion, useInView} from "framer-motion";

const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const Services = () => {
	const ref = useRef();
  const isInView = useInView(ref, {margin: "-100px"});

	return (
		<motion.div
			className='services'
			variants={variants}
			initial='initial'
			whileInView='animate'
			ref={ref}
			animate={isInView && "animate"}>
			<motion.div
				className='textContainer'
				variants={variants}>
				<p>
					We focus on helping you grow
					<br /> and move forward.
				</p>
				<hr />
			</motion.div>
			<motion.div
				className='titleContainer'
				variants={variants}>
				<div className='title'>
					<img
						src='/people.webp'
						alt=''
					/>
					<h1>
						<motion.b whileHover={{color: "orange"}}>Different</motion.b> Domains
					</h1>
				</div>
				<div className='title'>
					<h1>
						<motion.b whileHover={{color: "orange"}}>For Your</motion.b> Skills
					</h1>
					<button>WHAT WE DO?</button>
				</div>
			</motion.div>
			<motion.div
				className='listContainer'
				variants={variants}>
				<motion.div
					className='box'
					whileHover={{background: "lightgray", color: "black"}}>
					<h2>Technical</h2>
					<p>
						Members in our Technical domain embrace the forefront of computer science,
						mastering new languages, exploring artificial intelligence, and engaging
						in cutting-edge projects to transform ideas into tangible solutions.
					</p>
					<button>Go</button>
				</motion.div>
				<motion.div
					className='box'
					whileHover={{background: "lightgray", color: "black"}}>
					<h2>Management</h2>
					<p>
						Members in the Management domain excel in project execution, mastering
						event planning, coordination, and budget management. Through case studies
						and interactive sessions, they efficiently manage teams and resources,
						ensuring success.
					</p>
					<button>Go</button>
				</motion.div>
				<motion.div
					className='box'
					whileHover={{background: "lightgray", color: "black"}}>
					<h2>Design</h2>
					<p>
						In the Design and Editorial domain, SCRS members blend creativity and
						technology by crafting visually appealing interfaces and engaging content.
						Exploring graphic design, UX, and content creation, they ensure the
						digital landscape is both functional and aesthetically pleasing.
					</p>
					<button>Go</button>
				</motion.div>
				<motion.div
					className='box'
					whileHover={{background: "lightgray", color: "black"}}>
					<h2>PR and Outreach</h2>
					<p>
						The PR and Outreach domain in SCRS is dedicated to building connections in
						the tech world. Members focus on relationship-building with industry
						professionals, alumni, and the wider community through networking events,
						social media management, collaborations, workshops, and outreach programs.
					</p>
					<button>Go</button>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Services;
