import "./hero.scss";
import {motion} from "framer-motion";
// import {Canvas} from "@react-three/fiber"
// import Blob from "../blob/Blob";
const Hero = () => {
	const textVariants = {
		initial: {x: -500, opacity: 0},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
				staggerChildren: 0.1,
			},
		},
		scrollButton: {
			opacity: 0,
			y: 10,
			transition: {
				duration: 2,
				repeat: Infinity,
			},
		},
	};
    const sliderVariants = {
		initial: {x: -500,},
		animate: {
			x: "-220%",
			
			transition: {
				duration: 20,
				repeat:Infinity,
                repeatType:'mirror',
			},
		},
	};
	return (
		<div className='hero'>
			<div className='wrapper'>
				<motion.div
					className='textContainer'
					variants={textVariants}
					initial='initial'
					animate='animate'>
					<motion.h2 variants={textVariants}>SCRS</motion.h2>
					<motion.h1 variants={textVariants}>
						Soft Computing Research Society
					</motion.h1>
					<motion.div
						className='buttons'
						variants={textVariants}>
						<motion.button variants={textVariants}>
							{" "}
							See the Latest Work
						</motion.button>
						<motion.button variants={textVariants}>Contact Us</motion.button>
					</motion.div>
					<motion.img
						src='/scroll.png'
						alt=''
						variants={textVariants}
						animate='scrollButton'
					/>
				</motion.div>
			</div>
			<motion.div
				className='slidingTextContainer'
				variants={sliderVariants}
				initial='initial'
				animate='animate'>
				Fuzzy logic AI/ML DSA WEBDev AppDev Figma Canva
			</motion.div>
			<div className='imageContainer'>
				{/* <Canvas camera={{position: [10.0, 10.0, 99999.0]}}>
					<Blob/>
				</Canvas> */}
			</div>
		</div>
	);
};

export default Hero;
