import { text } from '@sveltejs/kit';
import { JSDOM } from 'jsdom';
import type { RequestHandler } from './$types';
import { db } from '$lib/server/db';
import { builds } from '$lib/server/tables';

export const POST: RequestHandler = async (event) => {
	const result = await db.select().from(builds);
	const url = 'https://www.grabcraft.com/minecraft/buildings/sort/date2/search/q/';
	const html = await (await fetch(url)).text();
	const dom = new JSDOM(html).window.document;

	console.log(result);

	return text('hello');
};
