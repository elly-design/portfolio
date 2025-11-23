import { createClient } from '@supabase/supabase-js';

// Use environment variables for Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://catxvpuuwqmmsmdxaqno.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhdHh2cHV1d3FtbXNtZHhhcW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MTI0MjUsImV4cCI6MjA2OTM4ODQyNX0.8Oxdreb__VtQTLJO6z32XiYCsdMNwBUj59Ytqc3YpjI';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase configuration. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
