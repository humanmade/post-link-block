<?php
/**
 * Post Link Block Template
 *
 * Renders a semantic link to the current post in a query loop.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block inner content.
 * @param WP_Block $block      Block instance.
 */

// Ensure $content is defined for static analysis
$content = $content ?? '';

// Access post ID from block context (provided by query loop)
$post_id = $block->context['postId'] ?? get_the_ID();

if ( ! $post_id ) {
	return '';
}

$permalink = get_permalink( $post_id );

if ( ! $permalink ) {
	return '';
}

$wrapper_attributes = get_block_wrapper_attributes(
	[
		'class' => 'post-link',
	]
);

$open_in_new_tab = $attributes['openInNewTab'] ?? false;
$target_attr = $open_in_new_tab ? ' target="_blank" rel="noopener noreferrer"' : '';
?>

<a href="<?php echo esc_url( $permalink ); ?>" <?php echo $wrapper_attributes; // phpcs:ignore ?><?php echo $target_attr; // phpcs:ignore ?>>
	<?php echo $content; // phpcs:ignore ?>
</a>
