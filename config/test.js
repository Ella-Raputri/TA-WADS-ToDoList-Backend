import supabase from "./supabase_client.js"

async function testConnection() {
  const { data, error } = await supabase.from('user').select('*').limit(1)

  if (error) {
    console.error('❌ Supabase error:', error)
  } else {
    console.log('✅ Supabase connected. Data:', data)
  }
}

testConnection()
