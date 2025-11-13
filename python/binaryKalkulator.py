# Av Jørn Kanestrøm, 13.11.25. Kilder google Gemini (linje 14-17 og 24-29) og 
# Aschehoug: https://innhold.aunivers.no/fagpakker/tverrfaglige-ressurser/aapne-ressurser/laeringsloep/programmering/python2/grunnkurs-i-programmering-med-python/6-lister-arrayer-og-tilfeldige-tall/arrayer?c=MjEyMDQy 
import os
os.system('cls' ) # denne rydder terminalen for hver kjøring av programmet
import numpy as np
print('Jørns 10 til 2:')
tall = 143
tall1 = tall # tall krymper for hver gang, men tall1 er det vi startet med
binary1 = np.zeros(8, dtype=int) #datatype heltall
for i in range(8):
    print(7-i,'plass i arrayen')
    print('Tallet er nå',tall)
    print(tall,'delt på 2 er',tall/2)
    binary1[7-i] = tall % 2 # finner resten (o eller 1) ved divisjon med 2. 
    # Starter med i som er 0 opp til 7, dermed legges tallene til bakfra:7,6,5,4,3,2,1,0 plass
    print(tall,'% 2 er',tall % 2)
    tall = tall // 2 # heltallsdivisjon for å fjerne den biten vi nettopp fant
    print('----------')
print('Binærtall for',tall1,'er:', binary1)
print()
print('-----------------------------------')
print()
print('Jørns 2 til 10:')
# De 5 linjene under er fra Google: make an array with 8 digits from an 8 digit number
number = input('Tast 8 siffer:')  # Your 8-digit number
binary = [] # Create an empty list to store the digits
for digit_char in number:
    binary.append(int(digit_char)) # Iterate through each character in the string and convert to an integer
binary =np.array(binary)

ti = np.zeros(8)
for n in range(8):
    ti[n] = binary[7-n] *2**n # plass 7-n for å starte bakerst
    print(ti[n])
print('I titallsystemeter det:',np.sum(ti))

'''
# Denne kan brukes om du ikke vil ha brukerinput
print('Jørns 2 til 10:')
# potenser=np.array([1,2,4,8,16,32,64,128])
bin = np.array([1,0,0,0,1,1,1,1])
print('Binærtallet er',bin)
ti = np.zeros(8)
for n in range(8):
    ti[n] = bin[7-n] *2**n # plass 7-n for å starte bakerst
    print(ti[n])
print('I titallsystemeter det:',np.sum(ti))
'''