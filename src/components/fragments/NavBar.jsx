import Logo from "../atom/Logo";
import Container from "../atom/Container";

export default function NavBar() {
	return (
		<div className='bg-black text-white '>
			<Container>
				<div className='flex flex-row'>
					<div className='basis-1/2 '>
						<Logo />
					</div>
					<div className='basis-1/2 flex justify-end gap-5'>
						<div>Use State</div>
						<div>Use Ref</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
