import { registerBlockType } from "@wordpress/blocks";
import {
	useBlockProps,
	InspectorControls,
	ColorPalette,
	RichText,
	BlockControls,
	PanelColorSettings,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

import "../../rubriker/src/style.scss";
import "./style.scss";
import "./editor.scss";
import colors from "../../colors";
import borders from "../../border";

registerBlockType("create-block/button-block", {
	attributes: {
		title: {
			type: "string",
		},
		url: {
			type: "string",
			attribute: "href",
		},
		color: {
			type: "string",
			default: "#8ed1fc",
		},
		border: {
			type: "string",
			default: "none",
		},
	},

	edit: (props) => {
		// Attributes
		const {
			attributes: { title, url, color, border },
			setAttributes,
			pageButton,
			isSelected,
		} = props;

		// Functions

		const onChangeTitle = (value) => {
			setAttributes({ title: value });
		};

		const onChangeUrl = (value) => {
			setAttributes({ url: value });
		};
		const onChangeColor = (value) => {
			setAttributes({ color: value });
		};

		const onChangeBorder = (value) => {
			setAttributes({ border: value });
		};

		return (
			<div>
				<InspectorControls>
					<PanelBody title="background-color">
						<p>Select background color for button</p>
						<ColorPalette
							value={color}
							onChange={onChangeColor}
							colors={colors}
						></ColorPalette>
						<p> Set border </p>
						<ColorPalette
							value={border}
							onChange={onChangeBorder}
							colors={borders}
						></ColorPalette>
					</PanelBody>
					{isSelected && <BlockControls key="controls"></BlockControls>}
				</InspectorControls>
				<div
					{...useBlockProps()}
					style={{ backgroundColor: color, borderColor: border }}
				>
					<RichText
						className="callout-title"
						placeholder="Write a title..."
						value={title}
						onChange={onChangeTitle}
					></RichText>
				</div>
				<div {...useBlockProps()}>
					<RichText
						tagname="div"
						placeholder="set a link to the button..."
						onChange={onChangeUrl}
						value={url}
					></RichText>
				</div>
			</div>
		);
	},

	save: (props) => {
		const {
			attributes: { title, url, color, border },
		} = props;
		return (
			<div
				className="pageButton"
				style={{ backgroundColor: color, borderColor: border }}
			>
				<a href={url}>{title}</a>
			</div>
		);
	},
});
