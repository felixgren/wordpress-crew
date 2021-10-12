import { registerBlockType } from "@wordpress/blocks";
import {
	MediaUpload,
	InspectorControls,
	BlockControls,
	useBlockProps,
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
	},

	edit: (props) => {
		// Attributes
		const {
			attributes: { mediaID, PhotoURL },
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
									alt={("Upload image for page", "page image")}
									className={"pageImage"}
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
			rubrikImages,
			attributes: { PhotoURL },
		} = props;
		return (
			<div className="imageBlock">
				{PhotoURL && (
					<img
						className={"pageImage"}
						src={PhotoURL}
						alt={("page image", "image for page")}
					/>
				)}
			</div>
		);
	},
});
