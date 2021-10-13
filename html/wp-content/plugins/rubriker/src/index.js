import { registerBlockType } from "@wordpress/blocks";
import {
	MediaUpload,
	RichText,
	BlockControls,
	InspectorControls,
	useBlockProps,
} from "@wordpress/block-editor";

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
		url: {
			type: "string",
		},
		altText: {
			type: "string",
		},
	},

	edit: (props) => {
		// Attributes
		const {
			attributes: { mediaID, rubrikPhotoURL, body, url, altText },
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
		const onChangeUrl = (value) => {
			setAttributes({ url: value });
		};
		const onSelectAltText = (value) => {
			setAttributes({ altText: value });
		};

		return (
			<div className="rubrikWrapper">
				<InspectorControls>
					{isSelected && <BlockControls key="controls"></BlockControls>}
				</InspectorControls>

				<div {...useBlockProps()} className="rubrikImages">
					<InspectorControls>
						{isSelected && <BlockControls key="controls"></BlockControls>}
					</InspectorControls>
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
									("Upload Image", "Upload image for page")
								) : (
									<img
										className="rubrikImages"
										src={rubrikPhotoURL}
										alt={("headline Image", "image for headline")}
									/>
								)}
							</Button>
						)}
					/>
					<RichText
						placeholder="Please write a desciption for the photo"
						onChange={onSelectAltText}
						value={altText}
					></RichText>
					<RichText
						tagName="h3"
						className="callout-body"
						placeholder={"Write a title…"}
						onChange={onChangeContent}
						value={body}
					></RichText>
					<RichText
						tagName="h3"
						className="callout-body"
						placeholder={"Write the page link "}
						onChange={onChangeUrl}
						value={url}
					></RichText>
				</div>
			</div>
		);
	},
	save: (props) => {
		// Attributes
		const {
			rubrikImages,
			attributes: { rubrikPhotoURL, body, url, altText },
		} = props;
		return (
			<div className="rubrikBlock">
				{rubrikPhotoURL && (
					<img className="rubrikImages" src={rubrikPhotoURL} alt={altText} />
				)}
				<a href={url}>
					<RichText.Content
						tagName="h3"
						className="callout-body"
						value={body}
					/>
				</a>
			</div>
		);
	},
});
