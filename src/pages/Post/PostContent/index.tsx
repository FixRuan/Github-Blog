/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-children-prop */
import React from "react";
import ReactMarkdown from "react-markdown";

import { Prism } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import "./index.css";

interface PostContentProps {
	content: string;
}

export function PostContent({ content }: PostContentProps) {
	return (
		<section className="PostContentContainer">
			<ReactMarkdown
				children={content}
				components={{
					code({ node, inline, className, children, ...props }) {
						const match = /language-(\w+)/.exec(className || "");
						return !inline && match ? (
							<Prism
								children={String(children).replace(/\n$/, "")}
								style={dracula as any}
								language={match[1]}
								PreTag="div"
								{...props}
							/>
						) : (
							<code className={className} {...props}>
								{children}
							</code>
						);
					},
				}}
			/>
		</section>
	);
}
