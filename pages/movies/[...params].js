import Seo from "../../components/Seo";

export default function MovieDetail({ params }) {
	const [title, id] = params;
	return (
		<div>
			<Seo title={title} />
			<h4>{title || "Loading..."}</h4>
		</div>
	);
}

export function getServerSideProps(context) {
	return {
		props: {
			params: context.params.params,
		},
	};
}
