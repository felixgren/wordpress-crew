import { registerBlockType } from "@wordpress/blocks";
import {
	BlockControls,
	InspectorControls,
	useBlockProps,
	ColorPalette,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { InnerBlocks } from "@wordpress/block-editor";

import colors from "../../colors";
import "./editor.scss";
import "./style.scss";

registerBlockType("create-block/page-block", {
	attributes: {
		backgroundColor: {
			type: "string",
		},
	},

	edit: (props) => {
		// Attributes
		const {
			attributes: { color },
			setAttributes,
		} = props;

		// Functions
		const onChangeColor = (value) => {
			setAttributes({ color: value });
		};

		return (
			<div {...useBlockProps()} style={{ backgroundColor: color }}>
				<p>Add blocks in this block to build your page</p>
				<InspectorControls>
					<PanelBody title="background-color">
						<p>Select background color for page</p>
						<ColorPalette
							value={color}
							onChange={onChangeColor}
							colors={colors}
						></ColorPalette>
					</PanelBody>
				</InspectorControls>

				<InnerBlocks />
			</div>
		);
	},

	save: (props) => {
		const {
			attributes: { color },
		} = props;
		return (
			<div style={{ backgroundColor: color }} className="pageWrap">
				<InnerBlocks.Content />
			</div>
		);
	},
});
