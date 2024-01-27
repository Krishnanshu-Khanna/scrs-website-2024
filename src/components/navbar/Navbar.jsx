import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion";
const Navbar = () => {
	return (
		<div className='navbar'>
			{/* Sidebar */}
			<Sidebar />
			<div className='wrapper'>
				<motion.a
					href='https://www.scrs.in/'
					target='_blank'
					rel='noreferrer'
					initial={{opacity: 0, scale: 0.5}}
					animate={{opacity: 1, scale: 1}}
					transition={{duration: 0.5}}>
					<img
						src='/scrs.png'
						alt='scrslogo'
					/>
				</motion.a>

				<div className='social'>
					<a
						href='https://www.linkedin.com/company/soft-computing-research-society-vit/'
						target='_blank'
						rel='noreferrer'>
						<img
							src='logos/linkedin.png'
							alt='Linkedin'
						/>
					</a>
					<a
						href='https://github.com/Soft-Computing-Research-Socity'
						target='_blank'
						rel='noreferrer'>
						<img
							src='logos/gitWhite.png'
							alt='Github'
						/>
					</a>
					<a
						href='https://www.instagram.com/scrs_vit/'
						target='_blank'
						rel='noreferrer'>
						<img
							src='logos/instagram.png'
							alt='Insta'
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
