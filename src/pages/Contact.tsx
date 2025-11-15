import { useEffect } from 'react';

export function Contact() {
  useEffect(() => {
    // Redirect to home page contact section
    window.location.href = '/#contact';
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-700">Redirecting to contact...</h1>
      </div>
    </div>
  );
}
