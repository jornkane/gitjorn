def enheter():
  print()
  print('Omgjøring av lengde, areal og volum:')
  tall = float(input('Skriv inn tallet du skal omgjøre (punktum for komma): '))
  mm = 0
  dimensjon = int(input('Tast 1 for lengde, 2 for areal, eller 3 for volum: ')) # lengde = 1, areal = 2 og volum = 3
  print()
  enhet = input('skriv hva slags enhet det er mm, cm, dm eller m: ')
  if enhet == 'mm': # starter med å regne ut hva verdien blir i millimeter
    mm = tall
  elif enhet =='cm':
    mm = tall*10**dimensjon
  elif enhet =='dm':
    mm = tall*100**dimensjon
  elif enhet =='m':
    mm = tall*1000**dimensjon
  omgjort = [mm] # arrayen omgjort starter med ferdig utregna millimeterverdi 
  for i in range(4):
      omgjort.append(omgjort[i]/(10**dimensjon)) # deler på 10 for hver overgang
  print()
  print(omgjort[0],'mm ',omgjort[1],'cm ',omgjort[2],'dm ',omgjort[3],'m ')
  print()

def primtall ():
  print('Primtallsjekkern:')
  '''Det beste primtallsprogrammet. Sjekker i det området du vil
  Bruker bestemmer fra og til:  '''
  print()
  print('<--********************************************-->')
  print('Program som finner primtallene fra start til slutt som du velger')
  laveste_verdi = 0 # du kan velge å ha brukerinput her også, men jeg synes ikke det er nødvendig
  print('Vi starter på null og sjekker primtallene opp til...')
  overste_verdi = int(input ("Hvor langt opp skal vi se etter primtall?: "))  
  prim=[] # lsite for oppsamling av primtall
  # det er også mulig å printe dem i loopen, men da kommer de nedover og det kan bli mye scrolling..
  for nummer in range (laveste_verdi, overste_verdi + 1):  
      if nummer > 1:  
          for i in range (2, nummer):  # deler nummer på alle tallene opp til nummer
              if (nummer % i) == 0:  
                  break  # stopper om det finner ut at det ikke er primtall
          else:  
              prim.append(nummer)  # hvis det ikke gir null i rest på noen andre en 1 og seg selv er det et primtall
  print()
  print('Primtallene fra',laveste_verdi,'til',overste_verdi,'er',prim)





slutt = input('Tast enter for å avslutte: ')
