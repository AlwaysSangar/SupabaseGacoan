// File: app/utils/supabase.ts

import { createClient } from '@supabase/supabase-js';

// Pastikan variabel lingkungan dibaca sebagai string
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://emguhegvuometepftfgv.supabase.co';
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtZ3VoZWd2dW9tZXRlcGZ0Zmd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwMjgyMjksImV4cCI6MjA3NjYwNDIyOX0.NkgkIJtTvO4ZkiIqXOY4F38i4UClue4bBkFhJat67lw';

// Melakukan pengecekan saat runtime
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.');
}

// Inisialisasi dan export client Supabase
// Catatan: Jika menggunakan fitur Autentikasi lanjutan,
// Anda disarankan menggunakan helper khusus dari @supabase/ssr.
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
