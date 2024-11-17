import random

def legg_til_navn():
    while True:
        navn = input("Skriv inn et navn (eller 'ferdig' for å avslutte): ")
        if navn.lower() == 'ferdig':
            break
        
        with open('randomListe.txt', 'a') as fil:
            fil.write(navn + '\n')
    print("Navnene er lagret i filen!")

def trekk_tilfeldig():
    try:
        with open('randomListe.txt', 'r') as fil:
            navn_liste = fil.read().splitlines()
            
        if not navn_liste:
            print("Filen er tom! Legg til noen navn først.")
            return
            
        random.shuffle(navn_liste)
        print("\nTilfeldig rekkefølge:")
        for i, navn in enumerate(navn_liste, 1):
            print(f"{i}. {navn}")
            
    except FileNotFoundError:
        print("Filen 'randomListe.txt' finnes ikke! Opprett den først.")

def main():
    while True:
        print("\nVelg en handling:")
        print("1. Legg til navn")
        print("2. Trekk tilfeldig rekkefølge")
        print("3. Avslutt")
        
        valg = input("Ditt valg (1-3): ")
        
        if valg == '1':
            legg_til_navn()
        elif valg == '2':
            trekk_tilfeldig()
        elif valg == '3':
            break
        else:
            print("Ugyldig valg. Prøv igjen.")

if __name__ == "__main__":
    main()
       
