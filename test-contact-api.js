// Test script for the contact API endpoint
const testData = {
  name: "Test User",
  email: "test@example.com",
  subject: "Test Subject",
  message: "This is a test message to verify the contact form is working properly."
};

console.log('Testing contact form API...');
console.log('Test data:', testData);

// Simulate API call (in a real browser, this would be a fetch call)
console.log('\nTo test the contact form:');
console.log('1. Visit http://localhost:3000/contact');
console.log('2. Fill out the form with the test data above');
console.log('3. Click "Send Message"');
console.log('4. You should see a success toast notification');
console.log('5. Check the server console for the submitted data');