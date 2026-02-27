<?php
/**
 * Plugin Name: HM Post Link Block
 * Description: A block that wraps inner blocks in a link to the current post, for use in query loops.
 * Version: 1.0.0
 * Author: Human Made Limited
 * License: GPL-2.0+
 * Text Domain: post-link-block
 */

namespace HM_Post_Link_Block;

if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! file_exists( __DIR__ . '/build/post-link/block.json' ) ) {
	trigger_error( 'Post Link Block: build/post-link/block.json not found. Please run npm run build.', E_USER_WARNING );
	return;
}

add_action( 'init', __NAMESPACE__ . '\\register_block' );

/**
 * Register the post-link block.
 */
function register_block() : void {
	register_block_type( __DIR__ . '/build/post-link' );
}
