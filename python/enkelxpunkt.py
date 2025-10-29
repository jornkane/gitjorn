import matplotlib.pyplot as plt
import numpy as np
import os
# Clear the terminal
os.system('cls' if os.name == 'nt' else 'clear')

# x-verdier
xrange = 30  # x-verdier opp til dette tallet
xverdier = np.arange(5, xrange, 1)
print()
print('Kjapp måte å finne skjæringspunktet på:')

# Definer funksjonene (bruk return)
def f(x):
    return 40 - x

def g(x):
    return (125 - 5*x) / 2

# vi putter xverdier inn i funksjonene og får ut y-verdier
fx = f(xverdier) # NumPy-arrays med verdiene
gx = g(xverdier)
spunkt = np.where(fx == gx) # nr 10 i arrayen xverdier er skjæringspunktet
px = fx[spunkt] # y-verdien til skjæringspunktet
py = gx[spunkt] # y-verdien til skjæringspunktet
x1 = xverdier[spunkt] # x-verdien til skjæringspunktet
print("Skjæringspunkt: x =", x1,"f(x)=",px,"g(x)=",py)

print('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
# Lag grafen 
plt.title("Graf for to funksjoner") # tittel på grafen
plt.plot(xverdier, fx, color="red") # lager grafen og endrer farge
plt.plot(xverdier, gx, color="green") # lager grafen og endrer farge
plt.plot((x1),(px), marker="o", color="blue", label="Skjæringspunkt") # markerer skjæringspunktet med en blå prikk

# GPT hjalp til med denne. Skriv ut koordinatene på grafen uten zip
for x, y in zip(x1, px):
    plt.text(x, y + 2, f"({x}, {y})", color="blue", fontsize=10)

#plt.plot(s1, s2, marker="o", color="blue") # markerer skjæringspunktet med en blå prikk
plt.xlabel("x") # aksetittel langs x-aksen
plt.ylabel("y") # aksetittel langs y-aksen
plt.axhline(y=0, color="black") # legger til en vannrett linje (x-akse)
plt.axvline(x=0, color="black") # legger til en loddrett linje (y-akse)
plt.grid() # legger til et rutenett
plt.xlim(-5, xrange) # begrenser x-verdiene vi vil vise
plt.ylim(-5, 60) # begrenser y-verdiene vi vil vise
# Plot skjæringspunkter med blå sirkel
plt.show() # viser grafen
