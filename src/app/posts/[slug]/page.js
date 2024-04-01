import React from "react";
import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";
import db from "../../../../prisma/db";

import styles from "./page.module.css";
import CardPost from "@/components/CardPost";
import { error } from "winston";
import { redirect } from "next/navigation";

async function getPostBySlug(slug) {
	try {
		const post = await db.post.findFirst({
			where: {
				slug,
			},
			include: {
				author: true,
			},
		});

		if (!post) {
			throw new Error(`Post com o slug ${slug} não foi encontrado`);
		}

		const processedContent = await remark().use(html).process(post.markdown);
		const contentHtml = processedContent.toString();

		post.markdown = contentHtml;

		return post;
	} catch (error) {
		logger.error("Falha ao obter post com o slug", {
			slug,
			error,
		});
	}
	redirect("/not-found");
}

export default async function PagePost({ params }) {
	const post = await getPostBySlug(params.slug);
	return (
		<div>
			<CardPost post={post} highlight />
			<h3 className={styles.subtitle}>Código:</h3>
			<div className={styles.code}>
				<div dangerouslySetInnerHTML={{ __html: post.markdown }} />
			</div>
		</div>
	);
}
