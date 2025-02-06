# ========Estrutura Condicionais = if, else  =====

# # ======== exemplo01:  =========
# idade = 16

# # estrutura do if => if (COMPARAÇÃO)
# # O bloco do if, só executado se a condição for verdadeira


# if idade >= 18:
#     print("Você é maior de idade")

# # else: é executado em casos onde o if não executa
# else:
#     print("Você é menor de idade")

# # meia entrada => quem é menor de 18 anos
# # ou esteja estudando em escola pública / faculdade

# # ======== exemplo02:  =========
# estuda_rede_publica = False

# if idade < 18 or estuda_rede_publica:
#     print("Tem direito a meia entrada")

# ======== exemplo03:  =========
# NOTA DO CONCEITO DO ALUNOs: A, B, C
#  nota > 9 = A, nota > 8 = B, nota > 6 = c

# nota = 6.5

# # elif = else if( é uma condição intermediara entre if e else)

# if nota > 9:
#     print("O seu conceito é A")
# elif nota > 8:
#     print("O seu conceito é B")
# elif nota > 6:
#     print("O seu conceito é C")
# else:
#     print("Você deve melhorar sua nota...")

# =============================================

# climas: ensolarado, chuvoso, nublado

# clima = "nublado"
# if clima == "ensolarado":
#     print("O dia hoje está ensolarado")
# elif clima == "chuvoso":
#     print("O dia hoje está chuvoso")
# elif clima == "nublado":
#     print("O seu hoje está nublado")
# else:
#     print("o dia está nem-nem-nem")

# =========================================

# COMISSÃO DE VENDAS:
# valor_produto > 1000 = .5%
# valor_produto > 500 = 1%
# valor_produto > 2%

# venda = 2500

# if venda >= 1000:
#     comissao = venda * .005
#     print("Você ganhou: R$ ", comissao)
# elif venda >= 500:
#     comissao = venda * .01
#     print("Você ganhou: R$ ", comissao)
# else:
#     comissao = venda * .02
#     print("você não bateu a sua meta do mês", comissao)

#  ========================================================

# baseada numa entrada do usuario se o número é maior
# ou menor que zero

numero = float(input("Digite o número: "))

if numero > 0:
    print("O numero é maior que 0", numero)
elif numero < 0:
    print("O número é maior que 0", numero)
else:
    print("O número não existe")

