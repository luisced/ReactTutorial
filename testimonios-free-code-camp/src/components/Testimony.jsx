import React from "react";
import "../styles/Testimony.css";

export const Testimony = (props) => {
	return (
		<div className="testimony_container">
			<img
				src={require(`../images/actor-${props.image}.jpg`)}
				alt="Foto de Actor"
				className="testimony_image"
			/>
			<div className="testimony_text_container">
				<p className="testimony_name">
					<strong>{props.name}</strong> in {props.country}
				</p>
				<p className="testimony_role">
					{props.role} in <strong>{props.enterprise}</strong>
				</p>
				<p className="testimony_text">"{props.testimony}"</p>
			</div>
		</div>
	);
};
