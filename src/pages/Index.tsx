
import React from 'react';

const Index = () => {
  // Redirect to the static HTML file
  React.useEffect(() => {
    window.location.href = '/index.html';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to site...</p>
    </div>
  );
};

export default Index;
