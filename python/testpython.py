
import os
os.system('cls' if os.name == 'nt' else 'clear')

import numpy as np

bakterier = np.zeros(30)

bakterier[0] = 3 # vi starter med 3 bakterier

for i in range(1, 3): # viktig å merke seg at 1 er det samme som bakterier[1] og løkken går til og med 2
  bakterier[i] = 2*bakterier[i-1]

print(bakterier)