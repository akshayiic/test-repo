"""
A simple calculator module for testing code reviews.
This version intentionally has some issues for CodeRabbit to catch.
"""


def add(a, b):
    """Add two numbers."""
    return a + b


def subtract(a, b):
    """Subtract b from a."""
    return a - b


def multiply(a, b):
    """Multiply two numbers."""
    return a * b


def divide(a, b):
    """Divide a by b."""
    # TODO: Handle division by zero
    return a / b


def factorial(n):
    """Calculate factorial of n."""
    if n <= 1:
        return 1
    return n * factorial(n - 1)


# Missing docstring
def power(base, exp):
    result = 1
    for _ in range(exp):
        result *= base
    return result
