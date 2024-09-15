import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming webhook payload
    const { event, data } = await req.json();

    switch (event) {
      case 'user.created':
        // Insert a new user into the `users` table
        await supabase
          .from('users')
          .insert([{ userid: data.id, name: data.first_name + ' ' + data.last_name, email: data.email }]);
        break;

      case 'user.updated':
        // Update an existing user in the `users` table
        await supabase
          .from('users')
          .update({ name: data.first_name + ' ' + data.last_name, email: data.email })
          .eq('userid', data.id);
        break;

      case 'user.deleted':
        // Delete a user from the `users` table
        await supabase
          .from('users')
          .delete()
          .eq('userid', data.id);
        break;

      case 'user.createdAtEdge':
        // Handle user creation at edge event if necessary
        console.log('user.createdAtEdge event received:', data);
        break;

      case 'email.created':
        // Handle email creation event if necessary
        console.log('email.created event received:', data);
        break;

      default:
        console.log(`Unhandled event type: ${event}`);
    }

    // Return a success response
    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Error processing webhook event:', error);
    return NextResponse.json({ status: 'error', message: 'Error processing webhook event' }, { status: 500 });
  }
}
