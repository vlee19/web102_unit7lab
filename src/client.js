import { createClient } from '@supabase/supabase-js'

const URL = 'https://kfxqlofyhbfvcjxrzwcu.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmeHFsb2Z5aGJmdmNqeHJ6d2N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzODMwODEsImV4cCI6MjA3Nzk1OTA4MX0.6Gg0f4AznACSylKLZW3NuhG2hKc5V-j72mpe8HO2roY'

export const supabase = createClient(URL, API_KEY)
