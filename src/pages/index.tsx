// componente que pode ser colocado em qualquer lugar e ao mesmo tempo ser anexado dentro do "_document". Logo é possível configurar informações de cabeçalho conforme a tela de intereção
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<h1>
				<Head>
					<title>ig.news</title>
				</Head>
				ig.news
			</h1>
		</>
	)
}
