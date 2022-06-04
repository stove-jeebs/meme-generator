import trollFace from "../assets/troll-face.svg"

export default function Header() {
	return (
		<header className="flex justify-between items-center px-8 rounded-t-md text-white py-5 bg-gradient-to-r from-dark-purple to-light-purple">
			<div>
				<img className="inline" src={trollFace} alt="Troll face svg" width={30} />
				<h1 className="inline mx-1 font-bold">Meme Generator</h1>
			</div>

			<h2 className="font-medium text-sm">React Course - Porject 3</h2>
		</header>
	)
}
