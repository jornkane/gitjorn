import numpy as np
import matplotlib.pyplot as plt

# Eksempel: f(x) = x^2 - 6x + 5
a = 1
b = -6
c = 5

def f(x):
    return a*x**2 + b*x + c

# Finn skjæringer med x-aksen (løsningene til f(x)=0)
x_skj = np.roots([a, b, c])

# Skjæring med y-aksen (x=0)
y_skj = f(0)

# Ekstremalpunkt (bunnpunkt/toppunkt): x = -b/(2a)
x_ekstrem = -b/(2*a)
y_ekstrem = f(x_ekstrem)

print(f"Skjæringer med x-aksen: x = {x_skj}")
print(f"Skjæring med y-aksen: y = {y_skj}")
print(f"Bunnpunkt/toppunkt: ({x_ekstrem}, {y_ekstrem})")

x = np.linspace(min(x_skj)-2, max(x_skj)+2, 100)

# Tegn grafen
plt.plot(x, f(x), label="f(x)")
plt.axhline(0, color="black")
plt.axvline(0, color="black")
plt.scatter(x_skj, [0,0], color="red", label="x-skjæringer")
plt.scatter(0, y_skj, color="green", label="y-skjæring")
plt.scatter(x_ekstrem, y_ekstrem, color="blue", label="Ekstremalpunkt")
plt.text(x_ekstrem, y_ekstrem+2, f"({x_ekstrem:.2f}, {y_ekstrem:.2f})", color="blue")
# Skriv ut koordinatene til x-skjæringspunktene
for xs in x_skj:
    plt.text(xs, 0.5, f"({xs:.2f}, 0)", color="red", fontsize=10)

# Skriv ut koordinaten til y-skjæringen
plt.text(0, y_skj + 2, f"(0, {y_skj:.2f})", color="green", fontsize=10)

# Skriv ut koordinaten til ekstremalpunktet (bunnpunkt/toppunkt)
plt.text(x_ekstrem, y_ekstrem + 2, f"({x_ekstrem:.2f}, {y_ekstrem:.2f})", color="blue", fontsize=10)

plt.legend()
plt.grid()
plt.show()
