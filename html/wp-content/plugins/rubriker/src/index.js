import { registerBlockType } from "@wordpress/blocks";
import { MediaUpload, RichText, BlockControls } from "@wordpress/block-editor";

import { Button } from "@wordpress/components";

import "./editor.scss";
import "./style.scss";

registerBlockType("create-block/rubriker", {
	attributes: {
		rubrikPhotoURL: {
			type: "string",
			selector: "img",
			attribute: "src",
		},
		mediaID: {
			type: "number",
		},
		body: {
			type: "array",
			source: "children",
			selector: ".callout-body",
		},
	},

	edit: (props) => {
		// Attributes
		const {
			attributes: { mediaID, rubrikPhotoURL, body },
			setAttributes,
			rubrikImages,

			isSelected,
		} = props;

		// Functions
		const onSelectImage = (media) => {
			setAttributes({
				rubrikPhotoURL: media.url,
				mediaID: media.id,
			});
		};

		const onChangeContent = (value) => {
			setAttributes({ body: value });
		};

		return (
			<div className="rubrikWrapper">
				{isSelected && <BlockControls key="controls"></BlockControls>}
				<div className="rubrikImages">
					<MediaUpload
						className={rubrikImages}
						onSelect={onSelectImage}
						allowedTypes="image"
						value={rubrikPhotoURL}
						render={({ open }) => (
							<Button
								className={mediaID ? "image-button" : "button button-large"}
								onClick={open}
							>
								{!rubrikPhotoURL ? (
									("Upload Image", "Upload image for headline")
								) : (
									<img
										src={rubrikPhotoURL}
										alt={("Upload headline Image", "headline image")}
									/>
								)}
							</Button>
						)}
					/>
					<RichText
						tagName="h3"
						className="callout-body"
						placeholder={"Write a title…"}
						onChange={onChangeContent}
						value={body}
					></RichText>
				</div>
			</div>
		);
	},
	save: (props) => {
		// Attributes
		const {
			rubrikImages,
			attributes: { rubrikPhotoURL, body },
		} = props;
		return (
			<div className="rubrikWrapper">
				{rubrikPhotoURL && (
					<img
						className="rubrikImages"
						src={rubrikPhotoURL}
						alt={("headline Image", "image for headline")}
					/>
				)}
				<RichText.Content tagName="h3" className="callout-body" value={body} />
			</div>
		);
	},
});
