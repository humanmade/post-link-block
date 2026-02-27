# HM Post Link Block

A block that wraps inner blocks in a link to the current post, for use in query loops.

## Description

This plugin provides a single **Post Link** block that renders its inner blocks wrapped in a semantic `<a>` tag linking to the current post. It is designed to be used inside a Query Loop block, where it receives the current `postId` and `postType` from context.

## Features

- Wraps any inner blocks in a post permalink with semantic markup
- Optional "open in new tab" setting (adds `target="_blank"` with `rel="noopener noreferrer"`)
- Supports color, spacing, and typography controls from the block editor
- Compatible with client-side navigation in block themes

## Installation

### For Development
1. Clone or download to `/wp-content/plugins/post-link-block/`
2. Run `npm install && npm run build`
3. Activate the plugin in WordPress

### For Production
1. Download a [release bundle](https://github.com/humanmade/post-link-block/releases) or clone the `release` branch
2. Upload to `/wp-content/plugins/post-link-block/`
3. Activate the plugin in WordPress

## Usage

1. Add a **Query Loop** block to your page
2. Inside the loop, add the **Post Link** block
3. Add inner blocks inside Post Link (e.g. Post Featured Image, Post Title, Post Excerpt)
4. On the front-end, the entire inner content is wrapped in a link to the post

**Note:** The block only renders a link when a `postId` is available from context. Outside a Query Loop it will fall back to `get_the_ID()`, but it is primarily intended for use within query loops.

## Development

If you have [nvm](https://github.com/nvm-sh/nvm) installed you can run `nvm use` in the repository root to activate the correct version of Node.

### Setup
```bash
npm install
composer install
```

### Build
```bash
npm run build
```

### Development Mode
```bash
npm start
```

### Linting
```bash
npm run lint
```

## Requirements

- WordPress 6.0+
- PHP 8.2+
- Node.js 24+

## Release Process

Merges to `main` will automatically [build](https://github.com/humanmade/post-link-block/actions/workflows/build-release-branch.yml) to the `release` branch. A project may be set up to track the `release` branch using [Composer](http://getcomposer.org/) to pull in the latest built version.

Commits on the `release` branch may be tagged for installation via [Packagist](https://packagist.org/packages/humanmade/post-link-block) and marked as releases in GitHub for manual download using a [manually-dispatched "Tag and Release" GH Actions workflow](https://github.com/humanmade/post-link-block/actions/workflows/tag-and-release.yml).

To tag a new release:

1. Review unreleased changes and choose the next version number using [semantic versioning](https://semver.org/)
2. Checkout a `prepare-v#.#.#` branch. In that branch:
   - Bump the version number in [`post-link-block.php`](./post-link-block.php) and [`src/blocks/post-link/block.json`](./src/blocks/post-link/block.json)
3. Open a pull request titled "Prepare release v#.#.#"
4. Review and merge the pull request
5. Wait for the `release` branch to [update](https://github.com/humanmade/post-link-block/actions/workflows/build-release-branch.yml) with the build that includes the new version number
6. On the ["Tag and Release" GH Action page](https://github.com/humanmade/post-link-block/actions/workflows/tag-and-release.yml):
   - Click the "Run workflow" button
   - Fill out the "Version tag" field with your target version number
      - This version must match the version in `post-link-block.php` and `block.json`
      - Use the format `v#.#.#` for your version tag
   - Leave the "Branch to tag" field as `release`
   - Click "Run workflow"

Once the workflow completes, the new version will be [tagged](https://github.com/humanmade/post-link-block/tags) and available in the list of [releases](https://github.com/humanmade/post-link-block/releases).

## License

GPL-2.0-or-later

## Author

Human Made Limited - https://humanmade.com
