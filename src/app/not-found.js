import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/Heading";

import style from "./error/error.module.css";
import banner from "./error/500.png";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function NotFound() {
	return (
		<div className={style.container}>
			<Image src={banner} alt="imagem do 404" />
			<Heading>Opa! Página não encontrada.</Heading>
			<p className={style.text}>
				Você pode voltar ao feed a qualquer momento!
			</p>
			<Link href="/">
				Voltar ao feed <ArrowLeftIcon color="#81FE88" />
			</Link>
		</div>
	);
}
