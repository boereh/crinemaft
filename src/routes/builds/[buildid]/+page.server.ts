import { JSDOM } from 'jsdom';

export async function load({ params }) {
	const html = await fetch(`https://www.grabcraft.com/minecraft/${atob(params.buildid)}`);
	const dom = new JSDOM(await html.text()).window.document;

	const materials: Record<string, number> = {};

	for (const row of dom.querySelectorAll('table#materials_list tr')) {
		const name = row.querySelector('.name')!.textContent.trim();
		if (name === 'View Other Materials') continue;
		materials[name] = parseInt(row.querySelector('.count')!.textContent);
	}

	const layermap_url = dom.querySelector<HTMLScriptElement>(
		'script[src*="https://www.grabcraft.com/js/LayerMap/LayerMap_"]'
	)!.src;

	const layers = (await (await fetch(layermap_url)).text()).slice(15);

	return { materials, layers: Object.values(JSON.parse(layers)) };
}
