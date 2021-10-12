import { registerBlockType } from "@wordpress/blocks";
import {
	RichText,
	InspectorControls,
	useBlockProps,
} from "@wordpress/block-editor";

import "./editor.scss";
import "./style.scss";

registerBlockType("create-block/page-title-block", {
	attributes: {
		title: {
			type: "string",
		},
	},

	edit: (props) => {
		// Attributes
		const {
			attributes: { title },
			setAttributes,
		} = props;

		// Functions

		const onChangeTitle = (value) => {
			setAttributes({ title: value });
		};

		return (
			<div {...useBlockProps()}>
				<InspectorControls></InspectorControls>

				<RichText
					tagName="h1"
					placeholder={"Write a title…"}
					onChange={onChangeTitle}
					value={title}
				></RichText>
			</div>
		);
	},
	save: (props) => {
		// Attributes
		const {
			attributes: { title },
		} = props;
		return <RichText.Content tagName="h1" value={title} />;
	},
});
