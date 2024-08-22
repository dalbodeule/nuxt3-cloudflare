import {drizzle} from "db0/integrations/drizzle";

import * as schema from '../db/schema'

export function useDrizzle() {
    return drizzle(hubDatabase(), { schema })
}