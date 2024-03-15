import {motion} from "framer-motion";

const BoardMember = ({name, position, imgSrc, socialLinks}) => {
	return (
		<motion.div
			className='card'
			initial={{opacity: 0, scale: 0.5}}
			animate={{opacity: 1, scale: 1}}
			transition={{duration: 0.5}}>
			<div className='pic'>
				<img src={imgSrc} alt={name} />
			</div>
			<div className='details'>
				<div className='detail_container'>
					<h3 className='title'>{name}</h3>
					<span className='post'>{position}</span>
				</div>
				<ul className='social'>
					{socialLinks.map((link, index) => (
						<li key={index}>
							<a
								href={link.url}
								className={`fa fa-${link.icon}`}
								target='_blank'
								rel='noreferrer'></a>
						</li>
					))}
				</ul>
			</div>
		</motion.div>
	);
};

export default BoardMember;
