import "./app.scss";
import Board from "./components/board/Board";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Chat from "./components/chat/Chat";

const App = () => {
	return (
		<div>
			<Cursor/>
			<Chat/>
			<section id='Homepage'><Navbar /> <Hero/></section>
			<section id='Domains'><Parallax type='services'/></section>
			<section id='dom'><Services/></section>
			<section id='About Us'><Parallax type='portfolio'/></section>
			<Portfolio/>
			<section id='Team'><Board/></section>
			<section id='Contact'><Contact/></section>
		</div>
	);
};

export default App;
