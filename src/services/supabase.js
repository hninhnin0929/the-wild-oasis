
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gpgnthdxwradrldjmygl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwZ250aGR4d3JhZHJsZGpteWdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1NjY1MTgsImV4cCI6MjAzMTE0MjUxOH0.4kyc-VfKfpVqAF613_M09HtBQ_0tVXEbMGPydzF9h_8"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;