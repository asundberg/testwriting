function fibonacci(n) {
	if (typeof n === 'undefined') return undefined;

	if (n <= 0) return 0;
	if (n === 1) return 1;

	return fibonacci(n - 1) + fibonacci(n - 2);
}