# -*- coding: utf-8 -*-
"""
Created 14.nov 2025. @author: jornkane
Program for å lage verditabell til funksjon - input for x-verdier
"""
import matplotlib.pyplot as plt
import numpy as np
import os
# Clear the terminal
os.system('cls' if os.name == 'nt' else 'clear')

# x-verdier som kan brukes i begge funksjonene
xrange = 30 # x verdiger går opp til det tallet
x = np.arange(5, xrange, 1)

def y (eks):
    return 40-eks
def y2 (eks):
    return (125-5*eks)/2

print("x\t y(x)\t y2(x)") # \t brukes for tabulator
for i in x: # løkke som går gjennom alle x-verdiene
    print(f"{i}\t {y(i)}\t {y2(i)}") # printer ut x, y(x) og y2(x) med tabulator mellom
print('------------------------------------------------')

print('Det er tre måter å finne skjæringspunktene på:')
yi = y(x) # numpy.ndarray som henter fra funksjon y. Y-verdi for alle x-verdier ligger nå i denne
yi2 = y2(x) # nympy.ndarray som henter fra funksjon y2
print('Den enkleste måten er å bruke np.where:')
print('y-verdiene her er av typen',type(yi))  # numpy.ndarray
idx = np.where(yi == yi2)   #Sette koordinatene i en variabel
print('idx er',type(idx))  # Dette er en tuple
# en tuple er en samling som ligner på en liste, men som er uforanderlig (immutable)
# np.where returnerer en tuple med en array inni som inneholder indeksene der betingelsen er sann
print("Skjæringspunkt:", x[idx], yi[idx]) # Deretter printe koordinatene
# eller printe alt i en linje:  print('nr 2:', x[np.where(yi == yi2)], yi[np.where(yi == yi2)])

print('++++++++++++++++++++++++++++++++++++++++++++++++')
print('Skjæringspunker med zip av to lister:')
skj_x = []
skj_y = []
# zip-kommandoen i Python brukes til å "pakke sammen" flere lister slik at 
# #du kan iterere over dem samtidig, eller lage par av verdier.
print('Skjæringskoordinatene er av typen',type(skj_x))  # Dette er en liste
for xv, yv, y2v in zip(x, yi, yi2):
    if yv == y2v:
        skj_x.append(xv)
        skj_y.append(yv)
        print(f"Skjæringspunkt: ({xv}, {yv})")

print('++++++++++++++++++++++++++++++++++++++++++++++++')
print('Skjæringspunkter med enkel løkke:')
sk_x = []
sk_y = []
for xv in x:
    yv = y(xv)
    y2v = y2(xv)

    if yv == y2v:
        sk_x.append(xv)
        sk_y.append(yv)
        print(f"Skjæringspunkt: ({xv}, {yv})")
print('------------------------------------------------')


plt.plot(x, yi, color="red") # lager grafen og endrer farge. Angir hvor vi tar x og y-verdier fra
plt.plot(x, yi2, color="purple") # lager grafen og endrer farge. Angir hvor vi tar x og y-verdier fra
plt.title("Graf for to funksjoner") # tittel på grafen
#plt.plot(s1, s2, marker="o", color="blue") # markerer skjæringspunktet med en blå prikk
plt.xlabel("x") # aksetittel langs x-aksen
plt.ylabel("y") # aksetittel langs y-aksen
plt.axhline(y=0, color="black") # legger til en vannrett linje (x-akse)
plt.axvline(x=0, color="black") # legger til en loddrett linje (y-akse)
plt.grid() # legger til et rutenett
plt.xlim(-5, xrange) # begrenser x-verdiene vi vil vise
plt.ylim(-5, 60) # begrenser y-verdiene vi vil vise
# Plot skjæringspunkter med blå sirkel
plt.scatter(skj_x, skj_y, color="blue", marker="o", label="Skjæringspunkt")
for x_val, y_val in zip(skj_x, skj_y):# henter verdier fra begge 
    plt.text(x_val, y_val + 2, f"skjæringspunkt-> ({x_val}, {y_val})", color="blue", fontsize=10) #+2 for å plassere teksten litt over punktet
plt.legend() # viser forklaring på grafen
plt.show() # viser grafen
