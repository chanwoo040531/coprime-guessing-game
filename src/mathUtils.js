export function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

export function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}