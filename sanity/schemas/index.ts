/** Master list of every document/object type editors can create in
 *  the Studio. Add new schemas (team member, report, news…) here. */
import type { SchemaTypeDefinition } from "sanity";
import { eventType } from "./event";

export const schemaTypes: SchemaTypeDefinition[] = [eventType];
