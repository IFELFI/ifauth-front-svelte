import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
	plugins: [sveltekit(), vanillaExtractPlugin()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
