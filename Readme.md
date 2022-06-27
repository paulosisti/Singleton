![TESTE2LOGO](https://user-images.githubusercontent.com/86803799/175835829-de819602-87f4-4068-aa13-0804153fef77.jpg)
# Singleton
Em engenharia de software, o padrão singleton é um padrão de projeto que **restringe** a instanciação de uma classe para um **único objeto**.
 > Isto é útil quando exatamente um objeto é necessário para coordenar ações por todo o sistema.

## Resumindo
Garante que **apenas um objeto** de uma determinada classe será criado.

## Aplicabilidade

Utilize o padrão Singleton quando uma classe em seu programa deve ter apenas uma instância disponível para todos seus clientes; por exemplo, um objeto de base de dados único compartilhado por diferentes partes do programa.
> O padrão Singleton desabilita todos os outros meios de criar objetos de uma classe exceto pelo método especial de criação. Esse método tanto cria um novo objeto ou retorna um objeto existente se ele já tenha sido criado.

## Estrutura
![imagemEstrutura2](https://user-images.githubusercontent.com/86803799/175925918-ef18f75f-c009-4bd1-a1a5-de31e860f487.png)

## Analogia com o mundo real
Só pode haver **um** presidente de um pais por vez. O mesmo presidente entra em ação quando o dever chama. Presidente aqui é um singleton.


## Exemplo Prático

Este exemplo ilustra a estrutura do padrão de projeto **Singleton**.

```typescript
/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class Singleton {
    private static instance: Singleton;

    /**
 * The Singleton's constructor should always be private to prevent direct
 * construction calls with the `new` operator.
 */
    private constructor() { }

    /**
 * The static method that controls the access to the singleton instance.
 *
 * This implementation let you subclass the Singleton class while keeping
 * just one instance of each subclass around.
 */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    /**
 * Finally, any singleton should define some business logic, which can be
 * executed on its instance.
 */
    public someBusinessLogic() {
        // ...
    }
}

/**
 * The client code.
 */
function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();
```
Conforme informado no site [refactoring.guru](https://refactoring.guru/pt-br/design-patterns/singleton/typescript/example#example-0--index-ts), por mais que o singleton seja um padrão de baixa complexidade e de popularidade média, muitos desenvolvedores consideram o padrão Singleton um antipadrão. É por isso que seu uso está diminuindo com o tempo.

## Prós e Contras

✅ **BOM** 

 - Você pode ter certeza que uma classe só terá uma única instância. 
   
 - Viola o princípio de responsabilidade única. 

 - Você ganha um ponto de acesso global para aquela instância. 

🆘 **RUIM**
- O padrão Singleton pode mascarar um design ruim. 

- O objeto é inicializado somente quando for pedido pela 1ª vez. 

- Pode ser difícil realizar testes unitários no código Singleton. 

## Objetivo
Este projeto tem o objetivo de cumprir com os requisitos solicitados pela disiciplina de Engenharia de Software II. 
> Escolher um design pattern e aprofundar nossos conhecimentos sobre ele, montando um material de consulta aqui no GitHub.

Link da apresentação: [Video de apresentação](https://github.com/paulosisti/Singleton/blob/master/Video/Apresentacao.mp4)

## Como contribuir
Gostaria de contribuir para a evolução deste trabalho, siga os seguintes passos:

- Faça um fork desse repositório;
- Crie uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'Mensagem do commit'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

##  Responsável
<a href="https://github.com/paulosisti"><img src="https://github.com/paulosisti.png" width="45" height="45"></a> &nbsp;
