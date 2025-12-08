import os as o
o.system('cls' ) #De to første linjene er for å rydde terminal+
# color themes - klikk på tannhjul og velg themes - color theme
# For å for eksempel fikse kun på kommentarfargen:
# ctrl+shit+og velg settings json og lim inn denne nederst
# kommaet er komma du på legge til på slutten av forrige
'''
,
    "editor.tokenColorCustomizations": {
        "[Tomorrow Night Blue]": {
            "comments": "#00c524"
    }
}
'''


'''
import random as ra
maxpoeng = ra.randint(1,100) # ra = random, randint= tilfeldig tall
tall = ra.randint(0,maxpoeng) 
print('Du har en prøve som gir totalt',maxpoeng,'poeng')
print('Jeg fikk',tall,'poeng!')
if tall < 20*maxpoeng/100:
  print("Karakter: 1")
elif tall <40*maxpoeng/100:
  print('Karakter: 2')
elif tall <60*maxpoeng/100:
  print('Karakter: 3')
elif tall<80*maxpoeng/100:
  print('Karakter: 4')
elif tall<93*maxpoeng/100:
  print('Karakter: 5')
else:
  print('Gratulerer du fikk karakteren 6!')
  '''

print('På bygg 7  har vi 4 etasjer.\n'
      'Hvor høyt er det opp til 4.?')
trapper = 4
trinnprtrapp = 19
trinn = 0.2 # meter

print('Det er:',trapper*trinnprtrapp*trinn)


