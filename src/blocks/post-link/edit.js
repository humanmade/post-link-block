import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes, context } ) {
	const { postId, postType } = context;

	const [ link ] = useEntityProp( 'postType', postType, 'link', postId );

	const blockProps = useBlockProps( {
		className: 'post-link',
	} );

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		template: [
			[ 'core/paragraph', { content: __( 'Read More', 'post-link-block' ) } ],
		],
		templateLock: false,
	} );

	if ( ! postId ) {
		return (
			<div { ...blockProps }>
				<p>
					{ __(
						'Post Link: This block will display a link to the current post when used in a query loop.',
						'post-link-block'
					) }
				</p>
			</div>
		);
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Link Settings', 'post-link-block' ) }>
					<ToggleControl
						label={ __( 'Open in new tab', 'post-link-block' ) }
						checked={ attributes.openInNewTab }
						onChange={ ( value ) =>
							setAttributes( { openInNewTab: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<a  // eslint-disable-line
				{ ...innerBlocksProps }
				href={ link }
				onClick={ ( e ) => e.preventDefault() }
			/>
		</>
	);
}
