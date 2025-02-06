# # Operadores aritméticos
# a = 5
# b = 2

# ----------------------------------------------
# print( a + b) # 7
# print( a - b) # 3
# print(a * b) # 10
# print(a / b) # 2.5
# ------------------------------------------

# # ** - exponenciação
# print( a ** b) # 25
# ---------------------------------------------

# # // - divisão de inteiro e não-inteiro
# print( a // b) # 2 -> Divição inteira
# print( a / b) # 2.5 -> divisao
# print(a % b) # 1 -> módulo

# ---------------------------------------------

# #  Operadores de comparação
# x = 10 
# y = 5
# print(x == y) # False
# print(x != y) # True
# print(x > y) # True
# print(x < y) # False

# --------------------------------------------------

# # Verificação da igualdade
# print( 5 >= 5) # maior ou igual - True
# print( 5 <= 1) # menor ou igual - False

# --------------------------------------------------------
# Operadores lógicos: and, or , not, serve para unir comparações

# idade = 20

# possui_carteira = True

# pode_dirigir = (idade >= 18) and possui_carteira

# print(pode_dirigir)

# and: só é verdadeiro quando ambas operações resultam em True
# ou seja, as duas operações sejam verdadeiras.

# ---------------------------------------------------------
# or: é verdadeiro quando PELO MENOS uma operação é True

# eh_estudante = False

# idade = 60

# meia_entrada = eh_estudante == True or idade >= 60

# print(meia_entrada)

# = é atribuição
# == é comparação

# --------------------------------------------------------
# not = inverter um booleano

# chovendo = True
# nao_chovendo = not chovendo

# print("Chovendo: ", chovendo)
# print("Não Chovendo: ", nao_chovendo)

# ----------------------------------------------------------
# exercício sobre and e or, "o aluno passou de ano"
# usando: and

# nota = 8
# frequencia = 60
# passou_de_ano = ( nota > 7) and ( frequencia > 80)
# print("Passou de ano: ", passou_de_ano)

# ----------------------------------------------------------
# # usando: or

# nota = 8
# frequencia = 60
# passou_de_ano = ( nota > 7) or ( frequencia > 80)
# print("Passou de ano: ", passou_de_ano)

# ------------------------------------------------------------
# senhas iguais
# criando um registro do usuario
# senha = "teste123"
# confirmacao_senha = "teste1234"

# aviso_senha_errada = senha != confirmacao_senha
# print("A senha não combina? ", aviso_senha_errada)

# --------  divisão de uma conta  -----------------
# 123.85
# quanto cada pessoa vai pagar? são 3 amigos

# conta = 123.85
# pessoas = 3

# parte_de_cada_um = conta / pessoas

# print("Cada um tem que pagar: ", parte_de_cada_um)

# --------------------------------------------------
#  digite o valor da conta
# conta = float(input("Qual o valor da conta? "))

# Qual a quantidade de amigs para dividir a conta
# amigos = int(input("Digite a quantidade de amigos: "))

# # valor por pessoa
# valor_por_pessoa = conta / amigos

# # verificar se a divisao é exata
# divisao_exata = (conta % amigos) == 0

# print("Cada um deve pagar: R$", valor_por_pessoa)
# print("A divisão é exata? ", divisao_exata)

# -----------------------------------------------------
# para assistir o filme
#  solicitar idade
# idade = int(input("Digite sua idade: "))

# # Verificar permissão
# pode_assistir = idade >= 16

# print("Pode assistir ao filme?", pode_assistir)

# --------------------------------
# # calculadora de IMC
# # Solicitar peso e altura
# peso = float(input("Digite seu peso em Kg: "))
# altura = float(input("Digite sua altura em metros: "))

# # Calcular IMC
# imc = peso / (altura ** 2)

# # Verificar peso ideal
# peso_ideal = (imc >= 18.5) and (imc <= 24.9)

# print("Seu IMC é: ", imc)
# print("Você está no peso ideal?", peso_ideal)

# -----------------------------------------------
# # solicitar número
# numero = int(input("Digite um número inteiro: "))

# # verificar se é par ou ímpar
# eh_par = (numero % 2) == 0

# print("O número é par?", eh_par)

# exemplo01:

numero1 = int(input("Digite um número: "))
eh_Par_ou_Impar = ( numero1 % 2) == 0

print("O número é par? ", eh_Par_ou_Impar)
