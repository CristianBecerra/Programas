print ('Bienvenido al sistema de ubicación para zonas públicas WIFI')
##51607 codigo de mi grupo
a= '51607'
b= '70615'

x= input ('Ingresa tu usuario: ')
if x == a:
  print ('Usuario: ' + a )
elif x!=a:
    print ('error')
    exit()
y= input ('Contraseña:')
if y== b:
    print ('Usted ha iniciado sesión correctamente')
elif y!=b:
    print ('error')
    exit()
    
operador1= 607
operador2=int((6*5)/(1+7)*0)
captcha = input (str(operador1) + "+" + str(operador2) + "=")
captchatotal = int (captcha)
if captchatotal == operador1:
   print ('Sesión iniciada')
elif captchatotal != operador1:
    print ('Error')
quit ()
