import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { Mode, plugin as mdPlugin } from 'vite-plugin-markdown'

const config: UserConfig = {
	plugins: [sveltekit(), mdPlugin({mode: [Mode.HTML]})]
};

export default config;
