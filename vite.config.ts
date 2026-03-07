import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import {
	transformerVariantGroup,
	presetWind4,
	presetWebFonts,
	presetIcons,
	transformerDirectives
} from 'unocss';
import unocss from 'unocss/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		unocss({
			presets: [
				presetWind4({
					preflights: {
						reset: true
					}
				}),
				presetWebFonts({
					fonts: {
						sans: {
							name: 'Pixelify Sans',
							provider: 'fontsource'
						},
						mc: {
							name: 'Minecraft',
							provider: 'none'
						}
					}
				}),
				presetIcons()
			],
			transformers: [transformerVariantGroup(), transformerDirectives()]
		})
	]
});
