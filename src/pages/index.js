import React from "react";
import Link from "@docusaurus/Link";
import Translate, {translate} from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./index.module.css";

function HomepageHeader() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<h4 className="hero__title">{siteConfig.title}</h4>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/docs/intro">
						<Translate id="homepage.button" description="The homepage button to wiki introduction">
							✨ Make it work, make it right, make it Fast ✨
						</Translate>
					</Link>
				</div>
			</div>
		</header>
	);
}

const FeatureList = [
	{
		title: translate({
			id: "homepage.feature1.title",
			message: "Yields 50-80% Faster Zsh Startup",
			description: "Title of feature 1 (left) on the home page",
		}),
		Svg: require("@site/static/img/svg/turbo.svg").default,
		description: (
			<Translate id="home.fetaure1" description="Description of first featured banner in homepage">
				It allows postponing the loading of a plugin to the moment when the processing of `.zshrc` is finished and the
				first prompt is being shown.
			</Translate>
		),
	},
	{
		title: translate({
			id: "homepage.feature2.title",
			message: "Focus on What Matters",
			description: "Title of feature 2 (middle) on the home page",
		}),
		Svg: require("@site/static/img/svg/stats.svg").default,
		description: (
			<Translate id="home.fetaure2" description="Description of second featured banner in homepage">
				Provides the statistics about the plugins, such as describing what aliases, functions, bindkeys, Zle widgets,
				zstyles, completions, variables, `PATH` and `FPATH` elements a plugin has set up
			</Translate>
		),
	},
	{
		title: translate({
			id: "homepage.feature3.title",
			message: "Wide Scope for Integration",
			description: "Title of feature 3 (right) on the home page",
		}),
		Svg: require("@site/static/img/svg/zsh.svg").default,
		description: (
			<Translate id="home.fetaure3" description="Description of third featured banner in homepage">
				Supports Oh My Zsh, Prezto and creation of your own plugins, and libraries. The implementation isn't
				framework-specific - include only if and when required.
			</Translate>
		),
	},
];

function Feature({Svg, title, description}) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} alt={title} />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}

export default function Home() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout title={`${siteConfig.tagline}`} description="The Open Source Society with a passion for Zsh">
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
