# -*- coding: utf-8 -*-

from funksjoner import primtall, enheter, frekvenstabell

print('Velkommen')

valg = int(input('Tast 1 for primtall, 2 for enheter, 3 for frekvenstabell, for avslutt: '))

if valg == (1):
    primtall()
elif valg == (2):
    enheter()
elif valg ==(3):
    frekvenstabell()
else:
    print('Takk for nå')

