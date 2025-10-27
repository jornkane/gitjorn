# -*- coding: utf-8 -*-
from funksjoner import primtall, enheter

print('Velkommen')

valg = int(input('Tast 1 for primtall, 2 for enheter, 3 for avslutt: '))

if valg == (1):
    primtall()
elif valg == (2):
    enheter()
else:
    print('Takk for nå')

