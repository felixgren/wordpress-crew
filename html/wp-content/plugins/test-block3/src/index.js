import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("create-block/test-block3", {
	attributes: {
		content: { type: "string" },
		color: { type: "string" },
	},
	edit: Edit,
	save,
});
