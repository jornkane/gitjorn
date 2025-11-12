print('Alt om lister og løkker i Python')
print()

liste1 = ['eple', 'pære','plomme','rips']
liste2 = [4,5,6,8]

print(liste1[0],liste2[0]) # dette henter de første elementene
# i listene. Plass 0. 

for tall in range (2): # denne løkka går fra 0 til 1 - 2 hakk
    print(tall)

for ting in range(len(liste1)):
    print(ting)



      






'''
import sys
import numpy as np
import os
# Clear the terminal
os.system('cls' if os.name == 'nt' else 'clear')
print(sys.version)

print('Fra tall til binærkode med Jørn:')
tall = int(input('Skriv et heltall mellom 0 og 255: '))
tall1 = tall
binary1 = np.zeros(8, dtype=int)

for i in range(8):
    print('i er nå',i)
    print('Tallet er nå',tall)
    print(tall,'delt på 2 er',tall/2)
    binary1[7-i] = tall % 2 # finner resten ved divisjon med 2. Starter med i som er 0 opp til 7
    print(tall,'% 2 er',tall % 2)
    tall = tall // 2 # heltallsdivisjon for å fjerne den biten vi nettopp fant
    print()
print('Binærtall for',tall1,'er:', binary1)
'''
