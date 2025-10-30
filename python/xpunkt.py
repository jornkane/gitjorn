print('Skjæringspunkter for to funksjoner ved hjelp av NumPy og Matplotlib')
import numpy as np
import matplotlib.pyplot as plt
import os
# Clear the terminal
os.system('cls' if os.name == 'nt' else 'clear')
# x-verdier som kan brukes i begge funksjonene
xrange = 30 # x verdiger går opp til det tallet
x = np.arange(-5, xrange, 1) # lager en array med x-verdier fra 5 til xrange-1

def f(x):
    return x**2
def g(x):
    return -x**2 +8

print("x\t f(x)\t g(x)") # \t brukes for tabulator
for i in x: # løkke som går gjennom alle x-verdiene
    print(f"{i}\t {f(i)}\t {g(i)}") # printer ut x, f(x) og g(x) med tabulator mellom
print('----------------------------------------------------------')

print('Skjæringspunkter for funksjonene f(x) og g(x):')
print('Når man ikke vil bruke np.where eller zip, kan man bruke en enkel løkke: ')
sx = []
sy = []
for verdi in x:
    fx = f(verdi)
    gx = g(verdi)
    if fx == gx:
        sx.append(verdi)
        sy.append(fx)
        print(f"Skjæringspunkt: ({verdi}, {fx})")
print('Forklaring på hvordan denne løkken fungerer:')
print('Løkken går gjennom alle x-verdiene i arrayen x.')
print('For hver x-verdi beregnes f(x) og g(x).')
print('Hvis f(x) er lik g(x), betyr det at vi har funnet et skjæringspunkt.')
print('Da legges x-verdien og den tilsvarende y-verdien (f(x) eller g(x)) til i listene sx og sy.')
print('Til slutt printes skjæringspunktet ut.')


