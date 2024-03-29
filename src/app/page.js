import Image from "next/image";
import styles from "./page.module.css";
import CardPost from "@/components/CardPost";
import logger from "@/logger";

async function getAllPosts() {
	const response = await fetch("http://localhost:3042/posts");
	if (!response.ok) {
		logger.error("Ops, alguma coisa correu mal");
		return [];
	}
	logger.info("posts obtidos com sucesso!");
	return response.json();
}

export default async function Home() {
	const posts = await getAllPosts();
	return (
		<main>
			{posts.map((post) => (
				<CardPost post={post} />
			))}
		</main>
	);
}
