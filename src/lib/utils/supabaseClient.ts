import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://oyucnwsizsmmcmdtynhn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95dWNud3NpenNtbWNtZHR5bmhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMzMTI5MDUsImV4cCI6MTk4ODg4ODkwNX0.-tw1jq5OU-03y1eU_lSCdJ26KcJLlV2KTfgUGBykZiQ"
);
