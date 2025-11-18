---
# There's a lot of magic happening here, I think.
#
# ROUTING
# For one thing, Astro automatically routes anything declared in the pages directory - even if it's markdown.
# So we don't have a route declaration for /posts/* or something like that - just by creating the file, a static route is
# created for /posts/post-1. I don't really know how you're supposed to do this if you have someone authoring static content
# via markdown that doesn't have access to the source. Maybe you're meant to build another system that you can query for
# the content and then use it with a `getStaticPaths` component like pages/tags/[tag].astro to generate the routes for build.
# Apparently there's an Astro feature called Content Collections (https://docs.astro.build/en/guides/content-collections/) that
# are aimed at this need.
#
# To emphasize, there's _no_ routing configuration needed to make this work at all. To prove it, 
# see pages/markdown-routing/dummy.md. Even though it's pure markdown (except Astro does require a little title metadata) and thus has no layout
# and mostly no metadata, you can still visit it at http://host/markdown-routing-dummy.
#
# FRONTMATTER
# Apparently not just an Astro thing, but it's the term for the YAML block at the top of a markdown "page" like this one.
#
# Crtiically, the `layout` key is magic and tells Astro to wrap the MD content below using a layout component (one with a <slot />).
#
# Everything here becomes available to the layout component via Astro.props, so you can use metadata like title, description, etc.
# to lay out the content. I think they also chose magic keys for some of the properties to make the RSS feed (if anyone still uses
# RSS readers) work. See pages/rss.xml.js. 
layout: ../../layouts/MarkdownPostLayout.astro
title: 'My First Blog Post'
pubDate: 2025-11-13
description: 'This is the first post of my new Astro blog.'
author: 'Ben'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["astro", "blogging", "learning in public"]
---
Welcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.

## What I've accomplished

1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.

2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.

3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!

## What's next

I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.