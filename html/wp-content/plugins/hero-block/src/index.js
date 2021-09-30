import { registerBlockType } from "@wordpress/blocks";
import {
	InspectorControls,
	PlainText,
	useBlockProps,
	ColorPalette,
	MediaUpload,
	RichText,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

import { PanelBody } from "@wordpress/components";

import "./editor.scss";

registerBlockType("create-block/hero-block", {
	attributes: {
		mediaID: {
			type: "number",
		},
		mediaURL: {
			type: "string",
			source: "attribute",
			selector: "img",
			attribute: "src",
		},
	},

	edit: (props) => {
		// Attributes
		const {
			heroImage,
			attributes: { mediaID, mediaURL },
			setAttributes,
		} = props;

		// Functions

		const onSelectImage = (media) => {
			setAttributes({
				mediaURL: media.url,
				mediaID: media.id,
			});
		};

		return (
			<div className="heroImage">
				<MediaUpload
					onSelect={onSelectImage}
					allowedTypes="image"
					value={mediaID}
					render={({ open }) => (
						<Button
							className={mediaID ? "image-button" : "button button-large"}
							onClick={open}
						>
							{!mediaID ? (
								("Upload Image", "gutenberg-examples")
							) : (
								<img
									src={mediaURL}
									alt={("Upload Recipe Image", "gutenberg-examples")}
								/>
							)}
						</Button>
					)}
				/>
			</div>
		);
	},
	save: (props) => {
		// Attributes
		const {
			heroImage,
			attributes: { mediaURL },
		} = props;

		return (
			<div className={heroImage}>
				{mediaURL && (
					<img
						className="recipe-image"
						src={mediaURL}
						alt={__("Recipe Image", "gutenberg-examples")}
					/>
				)}
			</div>
		);
	},
});
