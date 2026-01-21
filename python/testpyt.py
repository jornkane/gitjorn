import os as o
o.system('cls' ) #De to første linjene er for å rydde terminal+

import numpy as np
import matplotlib.pyplot as plt

x = np.arange(-3,3,0.5) # lager matteliste (array)

def f(x):
  return x**2-1

for tall in x:
  if f(tall)==0:
    print('f(x)=0 når x =',tall)

print('--------------------')
plt.plot(x, f(x)) # velger hva som skal vises i grafikkfeltet
plt.title('Grafisk framstilling av f(x)=x**2-1') # tittel på grafen
plt.xlabel('x-akse') # navn på x-aksen
plt.ylabel('f(x)-akse') # navn på y-aksen
plt.axhline(0, color="darkred", linewidth=1.5) # farge på x-aksen
plt.axvline(0, color="forestgreen", linewidth=1.5) # farge på y-aksen
plt.grid()
plt.show() # viser den grafiske framstillingen
