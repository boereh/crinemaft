import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import type { Build } from '$lib/schema';

export const builds = sqliteTable('builds', {
	id: text().primaryKey().notNull(),
	name: text().notNull(),
	materials: text({ mode: 'json' }).$type<Build['materials']>().notNull(),
	layers: text({ mode: 'json' }).$type<Build['layers']>().notNull()
});
