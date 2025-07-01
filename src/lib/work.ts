import { IWorkDetails } from "@/types/work";

export const work: Record<string, IWorkDetails> = {
	fill: {
		image: {
			src: "/work/fill.png",
			alt: "Fill – AI-powered form generator by Varshil J. Patel",
			width: 640,
			height: 360,
		},
		title: "Fill – AI Form Generator by Varshil J. Patel",
		description:
			"Fill is a fast, AI-powered form builder created by Varshil J. Patel to streamline and simplify custom form creation with advanced artificial intelligence.",
		url: "https://fillthis.vercel.app",
		content: [
			"Fill is an innovative AI form generator developed in 2024 by Varshil J. Patel under the Ascen brand. Designed to accelerate and simplify form creation, Fill empowers users of all backgrounds to build professional forms effortlessly.",
			"Leveraging cutting-edge AI algorithms, Fill allows users to generate a wide range of forms—contact forms, surveys, multi-step questionnaires, and more—without writing a single line of code. Just describe your requirements, and Fill takes care of the rest.",
			"Fill was created to reflect my strengths in full-stack development, AI integration, user experience design, and product thinking. The platform emphasizes speed, customization, data security, and accessibility.",
			"Technologies used: Next.js, TypeScript, Tailwind CSS, and OpenAI API.",
		],
	},
	zora: {
		image: {
			src: "/work/zora.png",
			alt: "Zora AI – Business Email Draft Generator by Varshil J. Patel",
			width: 640,
			height: 360,
		},
		title: "Zora AI – Smart Email Response Generator by Varshil J. Patel",
		description:
			"Zora AI is a business-focused AI email assistant developed by Varshil J. Patel. It uses LLMs to instantly draft replies based on email context, saving time and improving communication quality.",
		url: "https://zoraai.vercel.app",
		content: [
			"Zora AI is an intelligent email draft generator built by Varshil J. Patel to assist professionals in crafting high-quality business email responses. Simply paste the received email, and Zora AI generates a clear, relevant, and professional reply using state-of-the-art language models.",
			"Designed for speed and precision, Zora AI understands the context of business communication and enhances it with optional add-ons like tone adjustment, quick replies, and follow-up suggestions.",
			"This project reflects my expertise in natural language processing, large language models (LLMs), and practical AI tool development for productivity. Zora AI bridges the gap between communication and automation using modern web technologies.",
			"Technologies used: Next.js, TypeScript, Tailwind CSS, OpenAI GPT API.",
		],
	},
	equals: {
		image: {
			src: "/work/equals.png",
			alt: "Equals – Billing & Invoicing Software for Small Business developed by Varshil J. Patel",
			width: 640,
			height: 360,
		},
		title: "Equals – Smart Billing & Invoicing Software for Small Businesses",
		description:
			"Equals is cloud-based billing and invoicing software designed for small businesses, freelancers, and startups—automating billing, payments, and financial reporting.",
		content: [
			"Equals is a powerful billing and invoicing solution built for small business owners, freelancers, and startups. With cloud-based access, you can create customized invoices, manage recurring billing, and streamline payment processing—all from one intuitive dashboard.",
			"Key features include: professional invoice templates, automated payment reminders, multiple payment gateway integration, robust expense tracking, tax and GST/VAT support, and real-time financial reporting. Equals simplifies cash flow management and helps businesses get paid faster with zero hassle.",
			"This project showcases my expertise in building business SaaS products with modern web technologies. Developed using Next.js, TypeScript, Tailwind CSS, and integrated with the OpenAI GPT API for smart invoice descriptions and reminders, Equals enhances productivity through automation and AI-driven workflows.",
			"Equals is ideal for businesses looking to automate billing, reduce manual errors, maintain professional branding, and access financial insights on the go. It supports mobile responsiveness, secure cloud backup, and seamless integration with accounting tools—making it a full-stack billing software tailored for SMB efficiency.",
			"Technologies used: Next.js, TypeScript, Tailwind CSS, OpenAI GPT API, Stripe/PayPal SDKs, PostgreSQL, Docker.",
		],
	},
	drop: {
		image: {
			src: "/work/drop.png",
			alt: "Drop – YouTube Live Streaming Platform built in Svelte & Node.js by Varshil J. Patel",
			width: 640,
			height: 360,
		},
		title: "Drop – Live Video Streaming Platform (YouTube) with Svelte & Node.js",
		description:
			"Drop is a web-based live streaming platform that lets users broadcast their camera feed directly to YouTube Live using a secure and intuitive interface built with Svelte and Node.js.",
		content: [
			"Drop is a lightweight, cloud-based live streaming solution that empowers content creators to go live on YouTube instantly. Built with Svelte on the frontend and Node.js on the backend, Drop enables users to input their YouTube Live stream key and stream their webcam feed with minimal setup and zero latency.",
			"Key features include: secure authentication, real-time camera preview, seamless integration with YouTube Live via RTMP, responsive design, and scalable architecture. Drop simplifies live broadcasting—no native apps or complex software installations needed.",
			"This project highlights my full-stack capabilities in modern web development. Using Svelte for reactive UI, Node.js for handling live RTMP proxying and user sessions, and WebRTC/Media Stream APIs for direct camera capture, Drop offers a smooth and reliable live streaming experience.",
			"Drop is ideal for educators, gamers, influencers, and small teams who want a fast, browser-based way to stream live video to YouTube. It's fully mobile-responsive, supports high-definition streams, and ensures secure connection management.",
			"Technologies used: Svelte, SvelteKit, Node.js, Express, WebRTC MediaStream API, RTMP proxying, YouTube Live Data API, Docker.",
		],
	},
	feed: {
		image: {
			src: "/work/feed.png",
			alt: "Feed – AI‑powered CLI code generation and fixer by Varshil J. Patel",
			width: 640,
			height: 360,
		},
		title: "Feed – AI‑powered CLI Tool for Code Generation & Fix → Rust Engine + Node.js CLI",
		description:
			"Feed is a command‑line interface tool that auto‑generates, edits, and fixes code in any file via a CLI argument, powered by Gemini and built with a high‑performance Rust engine and Node.js front‑end.",
		content: [
			"Feed is a developer tool that brings AI‑assisted coding directly into your terminal. Simply run `feed <file-path>` to generate or improve code inline—leveraging Google Gemini’s advanced models to produce high‑quality code snippets, refactor existing logic, or fix bugs automatically.",
			"Under the hood, Feed features a Rust‑based engine for fast, efficient processing, and a Node.js‑based CLI built with yargs for argument parsing, file I/O, and seamless integration with Gemini’s API. This architecture ensures blazing performance and smooth developer experience.",
			"Key features include:\n– Language‑agnostic code generation, refactoring, and bug fixing\n– High‑speed Rust core for low latency\n– Node.js CLI with intuitive flags and file handling\n– Gemini GPT‑style AI integration for context‑aware code improvements\n– Human‑in‑the‑loop confirmations to review changes before applying",
			"This project showcases full‑stack development expertise in systems programming, AI integration, and CLI UX. It demonstrates proficiency in bridging high‑performance Rust tooling with Node.js scripting and modern AI services.",
			"Ideal for developers seeking rapid prototyping, automated bug fixes, and enhanced code quality directly in their editor or pipeline. Feed supports batch script usage, CI/CD automation, and interactive workflows for developers on the go.",
			"Technologies used: Rust, Node.js, yargs, Gemini (Google generative AI), Webpack (bundle CLI), Docker.",
		],
	},
};
