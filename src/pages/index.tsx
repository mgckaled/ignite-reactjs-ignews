// componente que pode ser colocado em qualquer lugar e ao mesmo tempo ser anexado dentro do "_document". Logo é possível configurar informações de cabeçalho conforme a tela de intereção
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Home | ig.news</title>
			</Head>

			<main>
				<section>
					<span>👏 Hey, welcome</span>
					<h1>
						News about the <span>React</span> world.
					</h1>
				</section>

				<img src="/images/avatar.svg" alt="Girl Coding" />
			</main>
		</>
	)
}
