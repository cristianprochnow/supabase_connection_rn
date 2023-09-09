import { createClient } from '@supabase/supabase-js';

import { API_URL, API_KEY } from '@env';

const supabaseConnection = createClient(API_URL, API_KEY);

const supabase = {
  Supabase: supabaseConnection,
  Colaborators: supabaseConnection.from('colaborators'),
  Tasks: supabaseConnection.from('tasks'),
};

export default supabase;
