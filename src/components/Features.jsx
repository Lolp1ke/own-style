import React from "react";

import "../assets/styles/features.css";

import MealExmp from "./MealExmp";
import FeatureExmp from "./FeatureExmp";
import Advantages from "./Advantages";

function Features() {
	return (
		<section className="features">
			{MealExmp(
				"Aenean Consectetur",
				"Cay sociis nato que penatibus et",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
				"/assets/images/meals/1.png"
			)}
			{MealExmp(
				"ConsectUltricies",
				"Amet Ipsum",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
				"/assets/images/meals/2.png"
			)}
			{MealExmp(
				"Aenean Consectetur Porta",
				"Magna Porta Sit Bibendum",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
				"/assets/images/meals/3.png"
			)}
			<div className="features__blocks" id="features">
				{FeatureExmp(
					"Activity Notification",
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
					"/assets/images/features/1.png"
				)}
				{FeatureExmp(
					"Custom Timing",
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
					"/assets/images/features/2.png"
				)}
				{FeatureExmp(
					"Mobile Optimized",
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
					"/assets/images/features/3.png"
				)}
			</div>
			<div className="features__advantages">
				{Advantages("+12k", "Nibh Elit Tristique")}
				{Advantages("84", "Aenean Condimentum")}
				{Advantages("3,07", "Quam Inceptos")}
				{Advantages("24h", "Ullamcorper	")}
			</div>
			{MealExmp(
				"Aenean Consectetur Porta",
				"Sem Risus Elit Vestibulum",
				"Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.",
				"/assets/images/meals/4.png"
			)}
			{MealExmp(
				"Aenean Consectetur Porta",
				"Parturient Tortor",
				"Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.",
				"/assets/images/meals/5.png"
			)}
		</section>
	);
}

export default Features;
