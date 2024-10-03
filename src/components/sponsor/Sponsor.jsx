import "./sponsor.scss";

const Sponsor = () => {
	return (
		<div className='sponsor-section'>
			<h2>Our Sponsors</h2>
			<div className='sponsor-logos'>
				<a className='sponsor-logo' href='https://www.easemytrip.com/'>
					<img src='/EMT.png' alt='EaseMyTrip' />
				</a>
				<a className='sponsor-logo' href='https://keyncoders.com/'>
					<img src='/keyncoders.png' alt='Keyncoders' />
				</a>
			</div>
		</div>
	);
};

export default Sponsor;
