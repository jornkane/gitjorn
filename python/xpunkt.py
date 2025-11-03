import numpy as np
import matplotlib.pyplot as plt
import os
os.system('cls' if os.name == 'nt' else 'clear') # Clear the terminal
# x-verdier som kan brukes i begge funksjonene
xrange = 5 # x verdiger går opp til det tallet
x = np.arange(-5, xrange, 1) # lager en array med x-verdier fra 5 til xrange-1

def f(x):
    return x**2 +2*x -2
def g(x):
    return -x**2 +8

print('Tabell for funksjonene f(x) = x^2 og g(x) = -x^2 + 8:')
print("x\t f(x)\t g(x)") # \t brukes for tabulator
for i in x: # løkke som går gjennom alle x-verdiene
    print(f"{i}\t {f(i)}\t {g(i)}") # printer ut x, f(x) og g(x) med tabulator mellom
print('-----------------------------------------------')

print('Skjæringspunkter for funksjonene f(x) og g(x):') # Man kan bruke np.where, zip, eller en løkke
sx = []
sy = []
for i in x:
    fx = f(i) # fx er y-verdier hentet fra funksjonen f
    gx = g(i) # gx er y-verdier hentet fra funksjonen g
    if fx == gx: # når begge y-verdiene er like, har vi et skjæringspunkt
        sx.append(x) # legger til x-verdien i listen sx
        sy.append(fx) # legger til y-verdien i listen sy
        print('Skjæringspunkt: (',x, ',', fx,')') # printer ut skjæringspunktet")
print('-----------------------------------------------')


plt.plot(x, f(x), label='f(x) = x^2', marker='^') # plotter funksjon f med markører
plt.plot(x, g(x), label='g(x) = -x^2 + 8', marker='p') # plotter funksjon g med markører
# marker = 's' gir firkantede markører, 'o' gir runde markører, 'p' pentagon osv. https://matplotlib.org/stable/api/markers_api.html
plt.axhline(0, color="purple")
plt.axvline(0, color="purple")
plt.title('Plot av funksjonene f(x) og g(x)') # tittel
plt.grid() # lager koordinatsystem
plt.show() # må dessverre skrives for å vise grafen
