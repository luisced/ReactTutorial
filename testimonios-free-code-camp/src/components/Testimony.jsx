import React from "react";
import "../styles/Testimony.css";

export const Testimony = () => {
	return (
		<div className="testimony_container">
			<img
				src={require("../images/testimony1.jpeg")}
				alt="Foto de Actor"
				className="testimony_image"
			/>
			<div className="testimony_text_container">
				<p className="testimony_name">The Rock</p>
				<p className="testimony_role">Chief</p>
				<p className="testimony_text">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
					aut similique? Dolorem delectus ipsam maiores exercitationem
					dignissimos laudantium nam excepturi? Labore, unde? Odit fuga iste
					maxime ratione corrupti ipsum magnam.
				</p>
			</div>
		</div>
	);
};
