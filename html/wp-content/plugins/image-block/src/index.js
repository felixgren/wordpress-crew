import { registerBlockType } from "@wordpress/blocks";
import {
	MediaUpload,
	InspectorControls,
	BlockControls,
	useBlockProps,
	RichText,
} from "@wordpress/block-editor";

import { Button } from "@wordpress/components";

import "./editor.scss";
import "./style.scss";

registerBlockType("create-block/image-block", {
	attributes: {
		rubrikPhotoURL: {
			type: "string",
			selector: "img",
			attribute: "src",
		},
		mediaID: {
			type: "number",
		},
		altText: {
			type: "string",
		},
	},

	edit: (props) => {
		// Attributes
		const {
			attributes: { mediaID, PhotoURL, altText },
			setAttributes,
			pageImage,

			isSelected,
		} = props;

		// Functions
		const onSelectImage = (media) => {
			setAttributes({
				PhotoURL: media.url,
				mediaID: media.id,
			});
		};

		const onSelectAltText = (value) => {
			setAttributes({ altText: value });
		};

		return (
			<div {...useBlockProps()}>
				<InspectorControls>
					{isSelected && <BlockControls key="controls"></BlockControls>}
				</InspectorControls>
				<MediaUpload
					className={pageImage}
					onSelect={onSelectImage}
					allowedTypes="image"
					value={PhotoURL}
					render={({ open }) => (
						<Button
							className={mediaID ? "image-button" : "button button-large"}
							onClick={open}
						>
							{!PhotoURL ? (
								("Upload Image", "Upload image for page")
							) : (
								<img
									src={PhotoURL}
									alt={"Upload Image!"}
									className={"pageImage"}
								/>
							)}
						</Button>
					)}
				/>
				<RichText
					tagname="div"
					className="callout-paragraph"
					placeholder="Please write a desciption for the photo"
					onChange={onSelectAltText}
					value={altText}
				></RichText>
			</div>
		);
	},
	save: (props) => {
		// Attributes
		const {
			attributes: { PhotoURL, altText },
		} = props;
		return (
			<div className="imageBlock">
				{PhotoURL && (
					<img className={"pageImage"} src={PhotoURL} alt={altText} />
				)}
			</div>
		);
	},
});
