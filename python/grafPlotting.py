import matplotlib.pyplot as plt
import numpy as np
# pylab er en del av matplotlib, men er ikke lenger i bruk  

x = np.linspace(-2, 2, 1000)
y = x**2

plt.plot(x, y, color="red") # lager grafen og endrer farge
plt.xlabel("x") # aksetittel langs x-aksen
plt.ylabel("y") # aksetittel langs y-aksen
plt.axhline(y=0, color="black") # legger til en vannrett linje (x-akse)
plt.axvline(x=0, color="black") # legger til en loddrett linje (y-akse)
plt.grid() # legger til et rutenett
plt.xlim(-2, 2) # begrenser x-verdiene vi vil vise
plt.ylim(-1, 4) # begrenser y-verdiene vi vil vise
plt.show() # viser grafen

