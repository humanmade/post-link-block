import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import Edit from './edit';
import metadata from './block.json';
import './style.scss';

registerBlockType( metadata.name, {
	edit: Edit,
	save: () => {
		// Content is wrapped in <a> tag by render.php
		// We just output the InnerBlocks content directly
		return <InnerBlocks.Content />;
	},
} );
