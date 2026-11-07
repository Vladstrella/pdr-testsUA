import { resolveImages } from "#lib/images/index.js";
import structure from "#lib/tests/45. Додаткові питання щодо категорій B1, B (будова і терміни).json";
import general from "#lib/tests/1. Загальні положення.json";
import medical from "#lib/tests/37. Надання першої медичної допомоги.json";
import safety from "#lib/tests/35. Основи безпечного водіння.json";

export const prerender = true;
// shuffled on the client so every visit gets a new exam
export const ssr = false;

export async function load() {
	const [g, st, m, sa] = await Promise.all([general, structure, medical, safety].map(resolveImages));
	return { general: g, structure: st, medical: m, safety: sa };
}
