

from random import choice
from time import sleep
import os
os.system('cls' if os.name == 'nt' else 'clear') # Clear the terminal

valg = input('Tast j for å trekke:')
elementer = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
print(elementer)


if valg == 'j':
    for i in range(len(elementer)):
        i = choice(elementer)
        print(i)
        elementer.remove(i)
else:
    print('Du har ikke tastet j - programmet avsluttes')



