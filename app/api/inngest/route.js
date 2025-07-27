import { inngest } from "@/app/lib/inngest/client";
import { checkBudgetAlerts } from "@/app/lib/inngest/functions";
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [checkBudgetAlerts],
});
