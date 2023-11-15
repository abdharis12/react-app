import { useState } from "react";
import NavBar from "../components/fragments/NavBar";
import PrimaryButton from "../components/atom/PrimaryButton";
import Container from "../components/atom/Container";
import { IconSquareRoundedPlus } from "@tabler/icons-react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<NavBar />
			<Container>
				<div className='flex flex-col items-center'>
					<h1>Vite + React</h1>
					<h1 className='mb-4 font-extrabold text-9xl'>{count}</h1>

					<PrimaryButton onClick={() => setCount((count) => count + 1)}>
						<IconSquareRoundedPlus /> Satu
					</PrimaryButton>
				</div>
			</Container>
		</>
	);
}

export default App;
