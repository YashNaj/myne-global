import { createClient } from '@supabase/supabase-js'
import {VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY} from '$env/static/private'
export const supabase = createClient('https://clgjvnjrknhjrdkpgrfv.supabase.co', 
`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsZ2p2bmpya25oanJka3BncmZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUyMjI4MTMsImV4cCI6MTk5MDc5ODgxM30.R4GlQwpbuMafT2aKcXRRKWHhmKy2vb3AQlqOl_zG4Nc`)    