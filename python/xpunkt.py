import numpy as np
import matplotlib.pyplot as plt
import os
os.system('cls' if os.name == 'nt' else 'clear') # Clear the terminal

x = np.arange(-5, 5, 1) # lager en array med x-verdier fra 5 til xrange-1

def f(x):
    return x**2
def g(x):
    return -x**2 +8

print('Tabell for funksjonene:') # denne løkka er kun for å VISE verditabell.
print("x\t f(x)\t g(x)") # \t brukes for tabulator
for i in x: # løkke som går gjennom alle x-verdiene
    print(f"{i}\t {f(i)}\t {g(i)}") # printer ut x, f(x) og g(x) med tabulator mellom
print('-----------------------------------------------')

F = []
G = []
for i in x: # husk at x er 
    if f(i) == g(i): # når begge y-verdiene er like, har vi et skjæringspunkt
        F.append(i) # legger til x-verdien i listen sx
        G.append(f(i)) # legger til y-verdien i listen sy
        print ('Skjæringspunkt:',(i),',',f(i)) 
if len(F) == 0:
    print('Ingen skjæringspunkter funnet')
print('-----------------------------------------------')
# Resten her nå er for å vise graf 
plt.plot(x, f(x), label='f(x) = x^2', marker='^') # plotter funksjon f med markører
plt.plot(x, g(x), label='g(x) = -x^2 + 8', marker='p') # plotter funksjon g med markører
# marker = 's' gir firkantede markører, 'o' gir runde markører, 'p' pentagon osv. https://matplotlib.org/stable/api/markers_api.html
plt.axhline(0, color="darkred") # x-linja
plt.axvline(0, color="darkblue") # y-linja
plt.title('Funksjonene f(x)=x**2 og g(x)= -x**2+8') # tittel
plt.grid() # lager koordinatsystem
plt.show() # må dessverre skrives for å vise grafen


'''
farray = f(x) # lager en array med y-verdier for funksjon f
garray = g(x) # lager en array med y-verdier for funksjon g
'''