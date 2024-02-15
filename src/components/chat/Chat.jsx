import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {
	faMessage,
	faTimesCircle,
	faPaperPlane,
	faUser, // Import the user icon
} from "@fortawesome/free-regular-svg-icons";
import {faRobot} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./chat.scss";

const Chat = () => {
	const [open, setOpen] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		setMessages([{content: "Hello! Wanna hear some jokes?", type: "incoming"}]);
	}, []);

	const toggleChat = () => {
		setOpen(!open);
	};

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const API_URL = "https://v2.jokeapi.dev/joke/Any";

	const fetchJoke = async () => {
		try {
			const response = await fetch(API_URL);
			const data = await response.json();

			if (data.type === "twopart") {
				return `${data.setup}\n${data.delivery}`;
			} else {
				return data.joke;
			}
		} catch (error) {
			return "Sorry, I couldn't fetch a joke at the moment. Try again later.";
		}
	};

	const handleSendMessage = async () => {
		if (inputValue.trim() === "") return;

		setMessages((prevMessages) => [
			...prevMessages,
			{content: inputValue, type: "outgoing"},
		]);
		setInputValue("");

		setMessages((prevMessages) => [
			...prevMessages,
			{content: "Thinking...", type: "incoming"},
		]);

		setTimeout(async () => {
			try {
				const joke = await fetchJoke();

				setMessages((prevMessages) => [
					...prevMessages,
					{content: joke.trim(), type: "incoming"},
				]);
				setMessages((prevMessages) => [
					...prevMessages,
					{content: "Did you laugh😆? Want one more?", type: "incoming"},
				]);
			} catch (error) {
				setMessages((prevMessages) => [
					...prevMessages,
					{
						content: "Oops! Something went wrong. Please try again.",
						type: "error",
					},
				]);
			}
		}, 600);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSendMessage();
		}
	};
	const chatVariants = {
		initial: {x: -500, opacity: 0},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
				staggerChildren: 0.1,
			},
		},
	};
	const chatMessageVariants = {
		initial: {opacity: 0, y: 20},
		animate: {opacity: 1, y: 0},
	};

	return (
		<motion.div
			className={`chat-bot ${open ? "visible" : "hidden"}`}
			variants={chatVariants}
			initial='initial'
			animate='animate'>
			<div className={`chat ${open ? "visible" : "hidden"}`}>
				<header>
					<h2>Jokebot</h2>
				</header>
				<ul className='chatbox'>
					{messages.map((message, index) => (
						<motion.li
							key={index}
							className={`chat-${message.type}`}
							variants={chatMessageVariants}>
							<p
								className={`msg ${
									message.type === "outgoing" ? "outgoing-msg" : "incoming-msg"
								}`}>
								{message.content}
							</p>
							{message.type === "incoming" && (
								<div className='titlebot'>
									<FontAwesomeIcon
										className='robot'
										icon={faRobot}
									/>
									<p className='bottitle'>Joker Bot</p>
								</div>
							)}
							{message.type === "outgoing" && (
								<div className='titlebot usermsg'>
									<p className='usertitle'>User</p>
									<FontAwesomeIcon
										className='user'
										icon={faUser}
									/>
								</div>
							)}
						</motion.li>
					))}
				</ul>
				<div className='chat-input'>
					<motion.input
						type='text'
						placeholder='Enter a message.....'
						value={inputValue}
						onChange={handleInputChange}
						onKeyDown={handleKeyDown}
						required
						variants={chatMessageVariants}
					/>
					<motion.div
						className='paperplane'
						onClick={handleSendMessage}
						onKeyDown={handleKeyDown}
						variants={chatMessageVariants}
						whileHover={{scale: 1.2}}
						whileTap={{scale: 0.8}}>
						<FontAwesomeIcon icon={faPaperPlane} />
					</motion.div>
				</div>
			</div>

			<button onClick={toggleChat}>
				<FontAwesomeIcon
					className='chat-icon'
					icon={open ? faTimesCircle : faMessage}
				/>
			</button>
		</motion.div>
	);
};

export default Chat;
