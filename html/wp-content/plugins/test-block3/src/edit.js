import { __ } from "@wordpress/i18n";

import { useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

const Edit = () => {
	return (
		<div className="diven">
			<p {...useBlockProps()}>
				{__("Test Block 3 – hello from the editor!", "test-block3")}
			</p>
		</div>
	);
};

export default Edit;
