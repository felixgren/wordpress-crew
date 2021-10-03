import { registerBlockType } from "@wordpress/blocks";
import { MediaUpload, RichText } from "@wordpress/block-editor";

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
		content: {
			type: "array",
			source: "children",
			selector: "headline",
		},
	},

	edit: (props) => {
		// Attributes
		const {
			attributes: { mediaID, rubrikPhotoURL, content },
			setAttributes,
			rubrikImages,
			headLine,
		} = props;

		// Functions
		const onSelectImage = (media) => {
			setAttributes({
				rubrikPhotoURL: media.url,
				mediaID: media.id,
			});
		};

		const onChangeContent = (newContent) => {
			setAttributes({ content: newContent });
		};

		return (
			<div className="rubrikWrapper">
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
						tagName="headline"
						className={headLine}
						onChange={onChangeContent}
						value={content}
					></RichText>
				</div>
			</div>
		);
	},
	save: (props) => {
		// Attributes
		const {
			rubrikImages,
			attributes: { rubrikPhotoURL },
			content,
		} = props;
		return (
			<div className="rubrikWrapper">
				<div className="rubrikImages">
					<div className={rubrikImages}>
						{rubrikPhotoURL && (
							<img
								className="rubrikImages"
								src={rubrikPhotoURL}
								alt={("headline Image", "image for headline")}
							/>
						)}
					</div>
					<h3> test </h3>
					<RichText.Content tagName="headline" value={content} />
				</div>
			</div>
		);
	},
});
