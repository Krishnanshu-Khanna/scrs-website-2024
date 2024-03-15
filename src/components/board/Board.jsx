import "./board.scss";
import BoardMember from "./BoardMember";

const boardMembersData = [
    {
        name: 'Dhruv Sharma',
        position: 'Chairperson',
        imgSrc: 'board24/dhruv1.jpg',
        socialLinks: [
            { url: 'https://www.linkedin.com/in/dhruv-sharma-5a5b12217', icon: 'linkedin' },
            { url: 'https://google.com', icon: 'github' },
            { url: 'https://www.instagram.com/dhrv__sharma', icon: 'instagram' }
        ]
    },
    {
        name: 'Sneha Agarwal',
        position: 'Secretary',
        imgSrc: 'board24/sneha1.jpg',
        socialLinks: [
            { url: 'https://www.linkedin.com/in/sneha-agarwal-77aab721b', icon: 'linkedin' },
            { url: 'https://github.com/SnehaAgarwal01', icon: 'github' },
            { url: 'https://www.instagram.com/sneha..agarwal', icon: 'instagram' }
        ]
    },
    {
        name: 'Krishnanshu Khanna',
        position: 'Vice-Chairperson',
        imgSrc: 'board24/k1.png',
        socialLinks: [
            { url: 'https://www.linkedin.com/in/krishnanshu-khanna/', icon: 'linkedin' },
            { url: 'https://github.com/Krishnanshu-Khanna', icon: 'github' },
            { url: 'https://www.instagram.com/krishnanshu_khanna/', icon: 'instagram' }
        ]
    },
    {
        name: 'Ankita Gupta',
        position: 'Co-Secretary',
        imgSrc: 'board24/ankita.jpg',
        socialLinks: [
            { url: 'https://www.linkedin.com/in/ankita-gupta-a0052326b', icon: 'linkedin' },
            { url: 'https://github.com/GANKITA3', icon: 'github' },
            { url: 'https://www.instagram.com/vg.ankita75', icon: 'instagram' }
        ]
    },
    {
        name: 'Gauransh Sharma',
        position: 'Technical Head',
        imgSrc: 'board24/gauransh.png',
        socialLinks: [
            { url: 'http://linkedin.com/in/gauransh18', icon: 'linkedin' },
            { url: 'http://github.com/gauransh18', icon: 'github' },
            { url: 'http://instagram.com/gauransh18_', icon: 'instagram' }
        ]
    },
    {
        name: 'Ishita Chavan',
        position: 'Management Head',
        imgSrc: 'board24/ishita1.png',
        socialLinks: [
            { url: 'https://www.linkedin.com/in/ishita-chavan-28930426b/', icon: 'linkedin' },
            { url: 'https://google.com', icon: 'github' },
            { url: 'https://www.instagram.com/ishitachavan2003/', icon: 'instagram' }
        ]
    },
    {
        name: 'Sathvik Muppidi',
        position: 'Publicity Head',
        imgSrc: 'board24/sathvik.png',
        socialLinks: [
            { url: 'https://www.linkedin.com/in/sathvik-muppidi-405466233/', icon: 'linkedin' },
            { url: 'https://google.com', icon: 'github' },
            { url: 'https://www.instagram.com/sathvik_muppidi/', icon: 'instagram' }
        ]
    },
    {
        name: 'Rohit Arun',
        position: 'Editorial Head',
        imgSrc: 'board24/rohit.png',
        socialLinks: [
            { url: 'https://www.linkedin.com/in/rohit-arun-566901274', icon: 'linkedin' },
            { url: 'https://github.com/rohit-arunn', icon: 'github' },
            { url: 'https://www.instagram.com/rohitarun_/', icon: 'instagram' }
        ]
    },
    {
        name: 'Shivraj',
        position: 'Outreach Head',
        imgSrc: 'board24/shivraj.jpg',
        socialLinks: [
            { url: 'https://www.linkedin.com/in/shivraj-uphad-8554a4246', icon: 'linkedin' },
            { url: 'https://google.com', icon: 'github' },
            { url: 'https://www.instagram.com/shivrajuphad', icon: 'instagram' }
        ]
    },
    {
        name: 'Chehack',
        position: 'Design Head',
        imgSrc: 'board24/chehack.png',
        socialLinks: [
            { url: 'https://www.linkedin.com/in/chehackkhemka/', icon: 'linkedin' },
            { url: 'https://google.com', icon: 'github' },
            { url: 'https://www.instagram.com/what_che_hack/', icon: 'instagram' }
        ]
    },
]
const Board = () => {
	return (
		<div className='board'>
			<div className='header'>
				<h1>Present Board</h1>
			</div>
			<div className='wrapper'>
				<div className='row'>
					{boardMembersData.map((member, index) => (
						<BoardMember
							key={index}
							name={member.name}
							position={member.position}
							imgSrc={member.imgSrc}
							socialLinks={member.socialLinks}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Board;
