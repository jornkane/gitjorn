import os
# Clear the terminal
os.system('cls' if os.name == 'nt' else 'clear')

'''
print('Operators (for matematiske operasjoner) i Python:')
print()

opp1a = (3+4**2 )
print(opp1a)

opp1b = (5*3-4**3 )
print(opp1b)

opp1c = (4+(2/(3-4**2)))
print(opp1c)

opp1c2 = (4+2/(3-4**2)) # Pål fant ut at parentes rundt hele brøken ikke er nødvendig
print(opp1c2)

# Kilde: https://programmeringskurs.no/nettkurs/side01.html 
'''
a = 6
b = 4

print(a,'/',b,'=',a/b)
print(a,'//',b,'=',a//b,'heltalltsdivisjon')
print(a,'%',b,'=',a%b,'det du får i rest')

#eksempel
for a in range(16):
    if a%3==0:
        print(a,'er delelig med 3')
    elif a%3==1:
        print(a,'har 1 i rest ved deling med 3')
    else:
        print(a,'har 2 i rest ved deling med 3')


