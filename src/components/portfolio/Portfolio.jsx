import {useRef} from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
	{
		id: 1,
		title: "Session with Mr.Kanth on AI",
		img: "projects/image5.png",
		desc:
			"Engaging session with Mr. Kanth on AI, delving into its transformative impact on industries. Insightful discussions on machine learning, ethical considerations, and future trends enriched the learning experience.",
	},
	{
		id: 2,
		title: "Stock Market Session",
		img: "projects/image4.jpeg",
		desc:
			"Dynamic stock market session with Tech Head, exploring market trends, investment strategies, and risk management. Valuable insights shared on navigating the ever-changing financial landscape, fostering a comprehensive understanding.",
	},
	{
		id: 3,
		title: "Core Meet",
		img: "projects/image2.jpeg",
		desc:
			"Productive core meet with chapter members, fostering collaboration and brainstorming. Discussions on goals, upcoming events, and member engagement strategies contributed to a cohesive and motivated team atmosphere.",
	},
	{
		id: 4,
		title: "150+ Students",
		img: "projects/image6.jpg",
		desc:
			"Impressive showcase featuring 150+ students highlighting our collective strengths. A vibrant display of talents, achievements, and diverse skills underscored the unity and prowess within the student community.",
	},
];

const Single = ({item}) => {
	const ref = useRef();

	const {scrollYProgress} = useScroll({
		target: ref,
	});

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

	return (
		<section>
			<div className='container'>
				<div className='wrapper'>
					<div
						className='imageContainer'
						ref={ref}>
						<img
							src={item.img}
							alt=''
						/>
					</div>
					<motion.div
						className='textContainer'
						style={{y}}>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<button>See more</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

const Portfolio = () => {
	const ref = useRef();

	const {scrollYProgress} = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});

	return (
		<div
			className='portfolio'
			ref={ref}>
			<div className='progress'>
				<h1>Featured Works</h1>
				<motion.div
					style={{scaleX}}
					className='progressBar'></motion.div>
			</div>
			{items.map((item) => (
				<Single
					item={item}
					key={item.id}
				/>
			))}
		</div>
	);
};

export default Portfolio;
