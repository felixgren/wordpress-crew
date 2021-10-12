import { registerBlockType } from "@wordpress/blocks";
import {
	MediaUpload,
	RichText,
	BlockControls,
	InspectorControls,
	AlignmentToolbar,
	useBlockProps,
} from "@wordpress/block-editor";

import { Button } from "@wordpress/components";

import "./editor.scss";
import "./style.scss";

registerBlockType("create-block/text-block", {
	attributes: {
		body: {
			type: "array",
			source: "children",
			selector: ".callout-body",
		},
	},

	edit: (props) => {
		// Attributes
		const {
			attributes: { body, title },
			setAttributes,

			isSelected,
		} = props;

		// Functions

		const onChangeTitle = (value) => {
			setAttributes({ title: value });
		};

		const onChangeContent = (value) => {
			setAttributes({ body: value });
		};

		return (
			<div {...useBlockProps()}>
				<InspectorControls>
					<AlignmentToolbar></AlignmentToolbar>
				</InspectorControls>
				{isSelected && <BlockControls key="controls"></BlockControls>}

				<RichText
					tagName="h3"
					className="callout-title"
					placeholder={"Write a title…"}
					onChange={onChangeTitle}
					value={title}
				></RichText>
				<RichText
					tagName="div"
					multiline="p"
					className="callout-paragraph"
					placeholder={"Write a paragraph…"}
					onChange={onChangeContent}
					value={body}
				></RichText>
			</div>
		);
	},
	save: (props) => {
		// Attributes
		const {
			attributes: { PhotoURL, body, title },
		} = props;
		return (
			<div className="textBlock">
				<RichText.Content
					tagName="h3"
					className="callout-title"
					value={title}
				/>
				<RichText.Content
					tagName="div"
					className="callout-paragraph"
					value={body}
				/>
			</div>
		);
	},
});
