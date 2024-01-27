import "./board.scss";
import {motion} from "framer-motion";
const Board = () => {
	return (
		<div className='board'>
			<div className='header'>
				<h1>Present Board</h1>
			</div>
			<div className='wrapper'>
				<div className='row'>
					{/* 1st Chair */}
					<motion.div
						className='card'
						initial={{opacity: 0, scale: 0.5}}
						animate={{opacity: 1, scale: 1}}
						transition={{duration: 0.5}}>
						<div className='pic'>
							<img
								src='board24/dhruv1.jpg'
								alt=''
							/>
						</div>
						<div className='details'>
							<div className='detail_container'>
								<h3 className='title'>Dhruv Sharma</h3>
								<span className='post'>Chairperson</span>
							</div>
							<ul className='social'>
								<li>
									<a
										href='https://www.linkedin.com/in/dhruv-sharma-5a5b12217'
										className='fa fa-linkedin'
										target='_blank'
										rel='noreferrer'></a>
								</li>
								<li>
									<a
										href='https://google.com'
										className='fa  fa-github'
										target='_blank'
										rel='noreferrer'></a>
								</li>
								<li>
									<a
										href='https://www.instagram.com/dhrv__sharma'
										className='fa fa-instagram'
										target='_blank'
										rel='noreferrer'></a>
								</li>
							</ul>
						</div>
					</motion.div>
					{/* 2nd Sec */}
					<motion.div
						className='card'
						initial={{opacity: 0, scale: 0.5}}
						animate={{opacity: 1, scale: 1}}
						transition={{duration: 0.5}}>
						<div className='pic'>
							<img
								src='board24/sneha1.jpg'
								alt=''
							/>
						</div>
						<div className='details'>
							<div className='detail_container'>
								<h3 className='title'>Sneha Agarwal</h3>
								<span className='post'>Secretary</span>
							</div>
							<ul className='social'>
								<li>
									<a
										href='https://www.linkedin.com/in/sneha-agarwal-77aab721b'
										className='fa fa-linkedin'
										target='_blank'
										rel='noreferrer'></a>
								</li>
								<li>
									<a
										href='https://github.com/SnehaAgarwal01'
										className='fa  fa-github'
										target='_blank'
										rel='noreferrer'></a>
								</li>
								<li>
									<a
										href='https://www.instagram.com/sneha..agarwal'
										className='fa fa-instagram'
										target='_blank'
										rel='noreferrer'></a>
								</li>
							</ul>
						</div>
					</motion.div>
					{/* 3rd VC*/}
					<motion.div
						className='card'
						initial={{opacity: 0, scale: 0.5}}
						animate={{opacity: 1, scale: 1}}
						transition={{duration: 0.5}}>
						<div className='pic'>
							<img
								src='board24/bkg1.png'
								alt=''
							/>
						</div>
						<div className='details'>
							<div className='detail_container'>
								<h3 className='title'>Krishnanshu Khanna</h3>
								<span className='post'>Vice-Chairperson</span>
							</div>
							<ul className='social'>
								<li>
									<a
										href='https://www.linkedin.com/in/krishnanshu-khanna/'
										className='fa fa-linkedin'
										target='_blank'
										rel='noreferrer'></a>
								</li>
								<li>
									<a
										href='https://github.com/Krishnanshu-Khanna'
										className='fa  fa-github'
										target='_blank'
										rel='noreferrer'></a>
								</li>
								<li>
									<a
										href='https://www.instagram.com/krishnanshu_khanna/'
										className='fa fa-instagram'
										target='_blank'
										rel='noreferrer'></a>
								</li>
							</ul>
						</div>
					</motion.div>
					{/* 4th Co-sec*/}
					<motion.div
						className='card'
						initial={{opacity: 0, scale: 0.5}}
						animate={{opacity: 1, scale: 1}}
						transition={{duration: 0.5}}>
						<div className='pic'>
							<img
								src='board24/ankita.jpg'
								alt=''
							/>
						</div>
						<div className='details'>
							<div className='detail_container'>
								<h3 className='title'>Ankita Gupta</h3>
								<span className='post'>Co-Secretary</span>
							</div>
							<ul className='social'>
								<li>
									<a
										href='https://www.linkedin.com/in/ankita-gupta-a0052326b'
										className='fa fa-linkedin'></a>
								</li>
								<li>
									<a
										href='https://github.com/GANKITA3'
										className='fa  fa-github'></a>
								</li>
								<li>
									<a
										href='https://www.instagram.com/vg.ankita75'
										className='fa fa-instagram'></a>
								</li>
							</ul>
						</div>
					</motion.div>
					{/* 5th Technical Head*/}
					<motion.div
						className='card'
						initial={{opacity: 0, scale: 0.5}}
						animate={{opacity: 1, scale: 1}}
						transition={{duration: 0.5}}>
						<div className='pic'>
							<img
								src='board24/gauransh.png'
								alt=''
								// style={'object-fit:cover'}
							/>
						</div>
						<div className='details'>
							<div className='detail_container'>
								<h3 className='title'>Gauransh Sharma</h3>
								<span className='post'>Technical Head</span>
							</div>
							<ul className='social'>
								<li>
									<a
										href='http://linkedin.com/in/gauransh18'
										className='fa fa-linkedin'
										target='_blank'
										rel='noreferrer'></a>
								</li>
								<li>
									<a
										href='http://github.com/gauransh18'
										target='_blank'
										rel='noreferrer'
										className='fa  fa-github'></a>
								</li>
								<li>
									<a
										href='http://instagram.com/gauransh18_'
										target='_blank'
										rel='noreferrer'
										className='fa fa-instagram'></a>
								</li>
							</ul>
						</div>
					</motion.div>
					{/* 6th Management */}
					<motion.div
						className='card'
						initial={{opacity: 0, scale: 0.5}}
						animate={{opacity: 1, scale: 1}}
						transition={{duration: 0.5}}>
						<div className='pic'>
							<img
								src='board24/ishita1.png'
								alt=''
							/>
						</div>
						<div className='details'>
							<div className='detail_container'>
								<h3 className='title'>Ishita Chavan</h3>
								<span className='post'>Management Head</span>
							</div>
							<ul className='social'>
								<li>
									<a
										href='https://www.linkedin.com/in/ishita-chavan-28930426b/'
										className='fa fa-linkedin'
										target='_blank'
										rel='noreferrer'></a>
								</li>
								<li>
									<a
										href='https://google.com'
										className='fa  fa-github'
										target='_blank'
										rel='noreferrer'></a>
								</li>
								<li>
									<a
										href='https://www.instagram.com/ishitachavan2003/'
										className='fa fa-instagram'
										target='_blank'
										rel='noreferrer'></a>
								</li>
							</ul>
						</div>
					</motion.div>
					{/* 7th Publicity */}
					<motion.div
						className='card'
						initial={{opacity: 0, scale: 0.5}}
						animate={{opacity: 1, scale: 1}}
						transition={{duration: 0.5}}>
						<div className='pic'>
							<img
								src='board24/sathvik.png'
								alt=''
							/>
						</div>
						<div className='details'>
							<div className='detail_container'>
								<h3 className='title'>Sathvik Muppidi</h3>
								<span className='post'>Publicity Head</span>
							</div>
							<ul className='social'>
								<li>
									<a
										href='https://www.linkedin.com/in/sathvik-muppidi-405466233/'
										className='fa fa-linkedin'
										target='_blank'
										rel='noreferrer'></a>
								</li>
								<li>
									<a
										href='https://google.com'
										className='fa  fa-github'
										target='_blank'
										rel='noreferrer'></a>
								</li>
								<li>
									<a
										href='https://www.instagram.com/sathvik_muppidi/'
										className='fa fa-instagram'
										target='_blank'
										rel='noreferrer'></a>
								</li>
							</ul>
						</div>
					</motion.div>
					{/* 8th Editorial*/}
					<motion.div
						className='card'
						initial={{opacity: 0, scale: 0.5}}
						animate={{opacity: 1, scale: 1}}
						transition={{duration: 0.5}}>
						<div className='pic'>
							<img
								src='board24/rohit.png'
								alt=''
							/>
						</div>
						<div className='details'>
							<div className='detail_container'>
								<h3 className='title'>Rohit Arun</h3>
								<span className='post'>Editorial Head</span>
							</div>
							<ul className='social'>
								<li>
									<a
										href='https://www.linkedin.com/in/rohit-arun-566901274'
										className='fa fa-linkedin'
										target='_blank'
										rel='noreferrer'></a>
								</li>
								<li>
									<a
										href='https://github.com/rohit-arunn'
										className='fa  fa-github'
										target='_blank'
										rel='noreferrer'></a>
								</li>
								<li>
									<a
										href='https://www.instagram.com/rohitarun_/'
										className='fa fa-instagram'
										target='_blank'
										rel='noreferrer'></a>
								</li>
							</ul>
						</div>
					</motion.div>
					{/* 9th Outreach */}
					<motion.div
						className='card'
						initial={{opacity: 0, scale: 0.5}}
						animate={{opacity: 1, scale: 1}}
						transition={{duration: 0.5}}>
						<div className='pic'>
							<img
								src='board24/shivraj.jpg'
								alt=''
							/>
						</div>
						<div className='details'>
							<div className='detail_container'>
								<h3 className='title'>Shivraj</h3>
								<span className='post'>Outreach Head</span>
							</div>
							<ul className='social'>
								<li>
									<a
										href='https://www.linkedin.com/in/shivraj-uphad-8554a4246'
										className='fa fa-linkedin'
										target='_blank'
										rel='noreferrer'></a>
								</li>
								<li>
									<a
										href='https://google.com'
										className='fa  fa-github'
										target='_blank'
										rel='noreferrer'></a>
								</li>
								<li>
									<a
										href='https://www.instagram.com/shivrajuphad'
										className='fa fa-instagram'
										target='_blank'
										rel='noreferrer'></a>
								</li>
							</ul>
						</div>
					</motion.div>
					{/* 10th Design Head*/}
					<motion.div
						className='card'
						initial={{opacity: 0, scale: 0.5}}
						animate={{opacity: 1, scale: 1}}
						transition={{duration: 0.5}}>
						<div className='pic'>
							<img
								src='board24/chehack.png'
								alt=''
							/>
						</div>
						<div className='details'>
							<div className='detail_container'>
								<h3 className='title'>Chehack</h3>
								<span className='post'>Design Head</span>
							</div>
							<ul className='social'>
								<li>
									<a
										href='https://www.linkedin.com/in/chehackkhemka/'
										className='fa fa-linkedin'
										target='_blank'
										rel='noreferrer'></a>
								</li>
								<li>
									<a
										href='https://google.com'
										className='fa  fa-github'
										target='_blank'
										rel='noreferrer'></a>
								</li>
								<li>
									<a
										href='https://www.instagram.com/what_che_hack/'
										className='fa fa-instagram'
										target='_blank'
										rel='noreferrer'></a>
								</li>
							</ul>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Board;
