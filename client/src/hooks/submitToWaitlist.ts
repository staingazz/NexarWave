// /hooks/useWaitlist.ts

export async function submitToWaitlist(email: string) {
    const endpoint = 'http://localhost:6001/api/waitlist'; 
    const payload = { email };
  
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        return { success: false, message: errorData.message || 'Failed to join waitlist.' };
      }
  
      const data = await response.json();
      return { success: true, message: data.message || 'Successfully joined the waitlist!' };
    } catch (error) {
      console.error('API error:', error);
      return { success: false, message: 'An error occurred while submitting the waitlist request.' };
    }
  }
  