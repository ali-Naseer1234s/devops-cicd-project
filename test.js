console.log('Running tests...');
// Force test to fail for demonstration
if (false) {
  console.log('Tests passed');
  process.exit(0);
} else {
  console.error('Tests failed');
  process.exit(1);
}
