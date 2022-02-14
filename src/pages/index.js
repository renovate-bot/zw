import React, {lazy, Suspense} from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
const useDocusaurusContext = lazy(() => import("@docusaurus/useDocusaurusContext"));
const styles = lazy(() => import("./index.module.css"));
import Translate from "@docusaurus/Translate";

function HomepageHeader() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<h3 className="hero__title">{siteConfig.title}</h3>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/docs/intro">
						<Translate id="homepage.button" description="The homepage button to wiki introduction">
							✨ Make it work, make it right, make it fast ✨
						</Translate>
					</Link>
				</div>
			</div>
		</header>
	);
}

const FeatureList = [
	{
		title: "Yields 50-80% Faster Zsh Startup",
		Svg: require("@site/static/img/svg/turbo.svg").default,
		description: (
			<Translate id="home.fetaure1" description="Description of first featured banner in homepage">
				It allows postponing the loading of a plugin to the moment when the processing of `.zshrc` is finished and the
				first prompt is being shown.
			</Translate>
		),
	},
	{
		title: "Focus on What Matters",
		Svg: require("@site/static/img/svg/stats.svg").default,
		description: (
			<Translate id="home.fetaure2" description="Description of second featured banner in homepage">
				Provides the statistics about the plugins, such as describing what aliases, functions, bindkeys, Zle widgets,
				zstyles, completions, variables, `PATH` and `FPATH` elements a plugin has set up
			</Translate>
		),
	},
	{
		title: "Wide Scope for Integration",
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
