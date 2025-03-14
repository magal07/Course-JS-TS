/**
 * A função demonstra a diferença entre as palavras-chave `var`, `let` e `const` no JavaScript.
 * 
 * `var`:
 * - Tem escopo de função ou escopo global, se declarada fora de uma função.
 * - Pode ser redeclarada e atualizada dentro do mesmo escopo.
 * - É "hoisted" (elevada) para o topo do seu escopo, mas a inicialização não é elevada.
 * 
 * `let`:
 * - Tem escopo de bloco, ou seja, é limitada ao bloco onde foi declarada.
 * - Não pode ser redeclarada no mesmo escopo, mas pode ser atualizada.
 * - Também é "hoisted", mas não é inicializada, resultando em um erro se acessada antes da declaração.
 * 
 * `const`:
 * - Tem escopo de bloco, semelhante ao `let`.
 * - Não pode ser redeclarada ou atualizada no mesmo escopo.
 * - Deve ser inicializada no momento da declaração.
 * - Também é "hoisted", mas não é inicializada, resultando em um erro se acessada antes da declaração.
 * 
 */