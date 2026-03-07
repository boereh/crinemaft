// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			materials: Record<string, number>;
			layers: Array<
				Array<{
					x: number;
					y: number;
					s: number;
					h: string;
					y1?: number;
					x2?: number;
				}>
			>;
		}
		interface PageState {
			type: string;
		}
		// interface Platform {}
	}
}

export {};
