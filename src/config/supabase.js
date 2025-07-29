import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://catxvpuuwqmmsmdxaqno.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhdHh2cHV1d3FtbXNtZHhhcW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MTI0MjUsImV4cCI6MjA2OTM4ODQyNX0.8Oxdreb__VtQTLJO6z32XiYCsdMNwBUj59Ytqc3YpjI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
