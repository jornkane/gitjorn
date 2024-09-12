# -*- coding: utf-8 -*-
"""
Created: 12.sept.24
@author: jokane
"""
# omgjøringstabell for lengdeenheter

print()
tall = float(input('Skriv inn tallet du skal omgjøre (punktum for komma): '))
mm = 0
dimensjon = int(input('Tast 1 for lengde, 2 for areal, eller 3 for volum: ')) # lengde = 1, areal = 2 og volum = 3

print()
enhet = input('skriv hva slags enhet det er mm, cm, dm eller m: ')
if enhet == 'mm': # starter med å regne ut hva verdien blir i millimeter
  mm = tall
elif enhet =='cm':
  mm = tall*10**dimensjon
elif enhet =='dm':
  mm = tall*100**dimensjon
elif enhet =='m':
  mm = tall*1000**dimensjon

omgjort = [mm] # arrayen omgjort starter med ferdig utregna millimeterverdi 

for i in range(4):
    omgjort.append(omgjort[i]/(10**dimensjon)) # deler på 10 for hver overgang

print()
print(omgjort[0],'mm ',omgjort[1],'cm ',omgjort[2],'dm ',omgjort[3],'m ')
print()
slutt = input('Tast enter for å avslutte: ')