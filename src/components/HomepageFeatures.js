import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
	{
		title: "Yields 50-80% faster Zsh startup",
		Svg: require("../../static/img/turbo.svg").default,
		description: (
			<>
				It allows postponing the loading of a plugin to the moment when the
				processing of `.zshrc` is finished and the first prompt is being shown.
			</>
		),
	},
	{
		title: "Focus on What Matters",
		Svg: require("../../static/img/stats.svg").default,
		description: (
			<>
				Provides the statistics about the plugins, such as describing what
				aliases, functions, bindkeys, Zle widgets, zstyles, completions,
				variables, `PATH` and `FPATH` elements a plugin has set up
			</>
		),
	},
	{
		title: "Supports",
		Svg: require("../../static/img/zsh.svg").default,
		description: (
			<>
				Supports Oh My Zsh, Prezto plugins, and libraries. The implementation
				isn't framework-specific and allows to use of all that is preferred.
			</>
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
