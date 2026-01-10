// src/pages/Funtastico/Test.jsx
import React from 'react';
import Layout from '../../components/Layout'; // Correct path

export default function TestPage() {
  return (
    <Layout resort="funtastico">
      <div style={{ padding: '20px' }}>
        <h1>Test Page</h1>
        <p>This is a test page to check if the footer works.</p>
        <p>You should see the Funtastico footer below this content.</p>
        
        {/* Add some content to see the footer at bottom */}
        <div style={{ height: '500px', background: '#f0f9ff', padding: '20px' }}>
          <h2>Page Content</h2>
          <p>Scroll down to see the footer...</p>
        </div>
      </div>
    </Layout>
  );
}