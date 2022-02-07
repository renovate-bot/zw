import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Translate, {translate} from "@docusaurus/Translate";

const FeatureList = [
	{
		title: "Yields 50-80% Faster Zsh Startup",
		Svg: require("@site/static/img/svg/turbo.svg").default,
		description: (
			<Translate
				id="home.fetaure1" description="Description of first featured banner in homepage">
				It allows postponing the loading of a plugin to the moment when the
				processing of `.zshrc` is finished and the first prompt is being shown.
			</Translate>
		),
	},
	{
		title: "Focus on What Matters",
		Svg: require("@site/static/img/svg/stats.svg").default,
		description: (
			<Translate
				id="home.fetaure2" description="Description of second featured banner in homepage">
				Provides the statistics about the plugins, such as describing what
				aliases, functions, bindkeys, Zle widgets, zstyles, completions,
				variables, `PATH` and `FPATH` elements a plugin has set up
			</Translate>
		),
	},
	{
		title: "Wide Scope for Integration",
		Svg: require("@site/static/img/svg/zsh.svg").default,
		description: (
			<Translate
				id="home.fetaure3" description="Description of third featured banner in homepage">
				Supports Oh My Zsh, Prezto and creation of your own plugins, and libraries. The implementation
				isn't framework-specific - include only if and when required.
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

export default function HomepageFeatures() {
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
