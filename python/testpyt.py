import os
os.system('cls' )

import numpy as np
number = input('Tast 8 siffer:')  # Your 8-digit number
# Create an empty list to store the digits
binary = []

# Iterate through each character in the string and convert to an integer
for digit_char in number:
    binary.append(int(digit_char))
binary =np.array(binary)
print(binary)
print(type(binary))
