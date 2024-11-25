import { filterByLanguage } from '@/utils';
import { defineCollection, z } from 'astro:content';

const activities = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		lang: z.string().optional()
	}),
});


export const collections = { activities };
