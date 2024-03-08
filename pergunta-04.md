# Pergunta 04

| Interruptores  |
|----------------|
| Interruptor 01 |
| Interruptor 02 |
| Interruptor 03 |

| Salas      |
|------------|
| Sala Red   |
| Sala Blue  |
| Sala Green |
---
1. Ligo o interruptor 01 e 02 e vou a sala green;
2. Se a **sala green** estiver apagada, eu sei que o **interruptor 03** liga a **sala green**, se estiver acessa, o interruptor 03 liga a sala red ou blue e a **sala green** liga ou com o **01** ou com o **02**.
---
### A partir daqui vamos trilhar dois caminhos:

1. **Caminho A** - caso a sala green liga com o interruptor 03
2. **Caminho B** - caso a sala green liga com o interruptor 01 ou 02
---

### Caminho A:
1. Desligo o **interruptor 01** (deixando só o interruptor 02 ligado) e vou para a sala red;
2. Se a **sala red** estiver apagada, eu sei que o **interruptor 01** liga a sala red, se a sala estiver acessa, eu sei que o **interruptor 02** liga a sala red.

#### Resposta:
No começo liguei o **interruptor 01 e 02** e indo a sala green, descobri que por ela estar apagada, o **interruptor 03** seria o que liga ela, e ao desligar o interruptor 01 e deixar o interruptor 02 ligado indo a **sala red** e vou saber exatamente qual interruptor liga a sala red, e por eliminição, vou saber qual interruptor liga a **sala blue**:

- Sala green: **Interruptor 03**;
- Sala red: **Interruptor 01** caso ela esteja apagada || **Interruptor 02** caso ela esteja acesa;
- Sala blue: **Interruptor 02** caso a sala red esteja apaga || **Interruptor 01** caso a sala red esteja acesa.
---

### Caminho B: 
0. Sabemos que o interruptor 03 **não** liga a sala green;
1. Agora eu apenas ligo o **interruptor 03** e vou a sala red, se estiver acessa eu sei que o interruptor 03 **liga a sala red**, se estive apagado, eu sei que o interruptor 03 **liga a sala blue**;


#### Resposta:

O único problema que encontramos aqui é, não podemos mais ir visitar as salas, mas sabemos com certeza qual sala o interruptor 03 liga, e temos 50% de chance de saber qual interruptor liga a sala green (01 ou 02). Ou seja, a **única forma de saber com dois passos qual interruptor liga qual sala, é pelo _caminho A_.**
