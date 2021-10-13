import { registerBlockType } from "@wordpress/blocks";

import {
	RichText,
	BlockControls,
	InspectorControls,
	AlignmentToolbar,
	useBlockProps,
	FontSizePicker,
} from "@wordpress/block-editor";

import "./editor.scss";

import "./style.scss";

registerBlockType("create-block/text-block", {
	attributes: {
		titleSize: {
			type: "number",
			default: "40px",
		},

		paragraphSize: {
			type: "number",

			default: "24px",
		},

		alignment: {
			type: "string",
		},
		body: {
			type: "array",
			source: "children",
			selector: ".callout-paragraph",
		},
		title: {
			type: "array",
			source: "children",
			selector: ".callout-title",
		},
	},

	edit: (props) => {
		// Attributes

		const {
			attributes: { body, title, titleSize, paragraphSize, alignment },

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

		const setTitleSize = (value) => {
			setAttributes({ titleSize: value });
		};

		const setParagraphSize = (value) => {
			setAttributes({ paragraphSize: value });
		};

		const onChangeAlignment = (newAlignment) => {
			props.setAttributes({
				alignment: newAlignment === undefined ? "none" : newAlignment,
			});
		};

		return (
			<div {...useBlockProps()}>
				<InspectorControls>
					<BlockControls>
						<AlignmentToolbar
							value={alignment}
							onChange={onChangeAlignment}
						></AlignmentToolbar>
					</BlockControls>

					<p> title font size </p>

					<FontSizePicker
						value={titleSize}
						onChange={setTitleSize}
					></FontSizePicker>

					<p>paragraph font size</p>

					<FontSizePicker
						value={paragraphSize}
						onChange={setParagraphSize}
					></FontSizePicker>
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
					tagName="p"
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
			attributes: { body, title, titleSize, paragraphSize, alignment },
		} = props;

		return (
			<div className={`textBlock ${alignment}`}>
				<RichText.Content
					tagName="h3"
					className="callout-title"
					value={title}
					style={{ fontSize: titleSize }}
				/>

				<RichText.Content
					tagName="p"
					className="callout-paragraph"
					value={body}
					style={{ fontSize: paragraphSize }}
				/>
			</div>
		);
	},
});
