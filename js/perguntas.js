const perguntas = [
    {
        professor: "Bruno",
        categoria: "Regras de Negócio",
        dificuldade: "Média",
        pergunta: "Por que o sistema permite apenas um semestre ativo por curso, mas permite semestres ativos em cursos diferentes?",
        resposta: "Porque cada curso possui seu próprio contexto acadêmico. Dentro do mesmo curso, manter apenas um semestre ativo evita misturar períodos, disciplinas e atividades."
    },
    {
        professor: "Bruno",
        categoria: "Regras de Negócio",
        dificuldade: "Difícil",
        pergunta: "Por que o sistema permite registrar faltas mesmo depois que o aluno ultrapassa o limite definido?",
        resposta: "Porque o sistema deve registrar a realidade acadêmica. Ele sinaliza o excesso, mas não bloqueia novos registros nem substitui a decisão da instituição."
    },
    {
        professor: "Bruno",
        categoria: "Regras de Negócio",
        dificuldade: "Difícil",
        pergunta: "Por que o sistema não permite cadastrar um semestre em um curso que pertence a outro usuário?",
        resposta: "Porque os dados acadêmicos devem respeitar a propriedade da conta. O usuário só pode criar e manipular informações vinculadas aos próprios cursos."
    },
    {
        professor: "Bruno",
        categoria: "Documentos",
        dificuldade: "Difícil",
        pergunta: "Por que o sistema separa documentos por atividade em vez de armazenar todos os arquivos sem vínculo?",
        resposta: "Porque o vínculo mantém o contexto do documento e permite identificar a atividade e a disciplina às quais ele pertence."
    },
    {
        professor: "Bruno",
        categoria: "Regras de Negócio",
        dificuldade: "Difícil",
        pergunta: "Qual é a diferença entre uma validação técnica e uma regra de negócio no Organizador Acadêmico?",
        resposta: "Uma validação verifica se um dado é válido. Uma regra de negócio define como o sistema deve funcionar dentro do contexto acadêmico."
    },
    {
        professor: "Bruno",
        categoria: "Organização Acadêmica",
        dificuldade: "Média",
        pergunta: "Por que o sistema utiliza a hierarquia Curso → Semestre → Disciplina → Atividade?",
        resposta: "Para manter os dados organizados, relacionados e dentro do contexto acadêmico correto."
    },
    {
        professor: "Bruno",
        categoria: "Faltas",
        dificuldade: "Média",
        pergunta: "Por que a quantidade de faltas não pode ser negativa?",
        resposta: "Porque um valor negativo não representa uma situação acadêmica válida e deixaria os dados inconsistentes."
    },
    {
        professor: "Bruno",
        categoria: "Disciplinas",
        dificuldade: "Média",
        pergunta: "Por que o horário final de uma disciplina deve ser posterior ao horário inicial?",
        resposta: "Para impedir o cadastro de um intervalo de aula inválido."
    },
    {
        professor: "Bruno",
        categoria: "Atividades",
        dificuldade: "Média",
        pergunta: "Por que a nota obtida não pode ser maior que a nota máxima da atividade?",
        resposta: "Para manter a consistência dos dados, pois a nota obtida não pode ultrapassar o valor máximo definido."
    },
    {
        professor: "Bruno",
        categoria: "Semestres",
        dificuldade: "Média",
        pergunta: "Por que a data final do semestre não pode ser anterior à data inicial?",
        resposta: "Porque isso representaria um período acadêmico cronologicamente inválido."
    },
    {
        professor: "Bruno",
        categoria: "Propriedade dos Dados",
        dificuldade: "Difícil",
        pergunta: "Por que um curso deve ser associado ao usuário autenticado e não a um idUsuario enviado livremente pelo frontend?",
        resposta: "Para garantir a propriedade dos dados e impedir que alguém associe informações à conta de outro usuário."
    },
    {
        professor: "Bruno",
        categoria: "Segurança",
        dificuldade: "Difícil",
        pergunta: "Por que alteração de senha e exclusão da conta exigem novamente a senha atual?",
        resposta: "Porque são operações sensíveis e exigem uma nova confirmação antes de executar uma ação crítica."
    },
    {
        professor: "Bruno",
        categoria: "Atividades",
        dificuldade: "Média",
        pergunta: "Por que uma atividade precisa estar vinculada a uma disciplina?",
        resposta: "Porque ela precisa possuir um contexto acadêmico definido dentro da organização do sistema."
    },
    {
        professor: "Bruno",
        categoria: "Auditoria",
        dificuldade: "Difícil",
        pergunta: "Por que o sistema registra ações relevantes do usuário em logs de auditoria?",
        resposta: "Para manter rastreabilidade, permitindo identificar quem realizou determinada ação e quando ela ocorreu."
    },
    {
        professor: "Bruno",
        categoria: "Cursos",
        dificuldade: "Média",
        pergunta: "Por que o sistema permite cadastrar vários cursos para o mesmo usuário?",
        resposta: "Porque foi criado para organizar diferentes formações, como graduação, outros cursos e atividades acadêmicas."
    },
    {
        professor: "Bruno",
        categoria: "Disciplinas",
        dificuldade: "Difícil",
        pergunta: "Por que professor, horários, médias e limite de faltas podem ser opcionais em uma disciplina?",
        resposta: "Porque essas informações podem não estar disponíveis no momento do cadastro e podem ser preenchidas posteriormente."
    },
    {
        professor: "Bruno",
        categoria: "Atividades",
        dificuldade: "Difícil",
        pergunta: "Por que descrição, prazo, status e nota podem ser opcionais em uma atividade?",
        resposta: "Porque o usuário pode registrar a atividade mesmo sem possuir todas essas informações naquele momento."
    },
    {
        professor: "Bruno",
        categoria: "Regras de Negócio",
        dificuldade: "Difícil",
        pergunta: "Se uma regra de negócio for violada, por que não basta deixar o banco aceitar o dado e corrigir depois?",
        resposta: "Porque as regras devem impedir estados inconsistentes antes da persistência, mantendo os dados acadêmicos válidos desde a entrada no sistema."
    },
    {
        professor: "Léo",
        categoria: "Fluxo da Requisição",
        dificuldade: "Difícil",
        pergunta: "Mostre e explique o caminho do cadastro de um curso desde o frontend até o PostgreSQL.",
        resposta: "O `cursos.js` envia um POST para `/Cursos`. O Controller recebe, identifica o usuário, o Service aplica as regras e chama o Repository, que persiste a Entity Curso no PostgreSQL."
    },
    {
        professor: "Léo",
        categoria: "Frontend e API",
        dificuldade: "Média",
        pergunta: "Onde começa a requisição de cadastro de curso no frontend?",
        resposta: "No `cursos.js`, através do `fetch` que envia uma requisição POST para o endpoint `/Cursos`."
    },
    {
        professor: "Léo",
        categoria: "Frontend e API",
        dificuldade: "Média",
        pergunta: "Por que o frontend utiliza `JSON.stringify(dadosCurso)` no cadastro?",
        resposta: "Para transformar o objeto JavaScript em JSON antes de enviá-lo no corpo da requisição para o backend."
    },
    {
        professor: "Léo",
        categoria: "JWT",
        dificuldade: "Difícil",
        pergunta: "Por que o JWT é enviado no header `Authorization` da requisição?",
        resposta: "Para que o backend consiga validar a autenticação e identificar qual usuário está realizando aquela operação."
    },
    {
        professor: "Léo",
        categoria: "Controller",
        dificuldade: "Média",
        pergunta: "Qual é a função do `@PostMapping(\"/Cursos\")` no `CursoController`?",
        resposta: "Mapear requisições HTTP POST feitas para `/Cursos` ao método responsável pelo cadastro."
    },
    {
        professor: "Léo",
        categoria: "Controller",
        dificuldade: "Média",
        pergunta: "Qual é a função do `@RequestBody` no cadastro de curso?",
        resposta: "Converter os dados JSON enviados no corpo da requisição em um objeto Java utilizado pelo backend."
    },
    {
        professor: "Léo",
        categoria: "Controller",
        dificuldade: "Média",
        pergunta: "Qual é a função do `@RequestHeader(\"Authorization\")`?",
        resposta: "Capturar o header que contém o JWT enviado pelo frontend."
    },
    {
        professor: "Léo",
        categoria: "JWT",
        dificuldade: "Difícil",
        pergunta: "Como o backend identifica qual usuário está fazendo a requisição?",
        resposta: "Ele valida o JWT, extrai o e-mail armazenado no `subject` e busca o usuário correspondente no banco."
    },
    {
        professor: "Léo",
        categoria: "JWT",
        dificuldade: "Difícil",
        pergunta: "O ID do usuário precisa estar armazenado diretamente no JWT?",
        resposta: "Não. No projeto, o JWT utiliza o e-mail no `subject`, e o backend usa esse e-mail para buscar o usuário e obter seu ID."
    },
    {
        professor: "Léo",
        categoria: "Segurança e Código",
        dificuldade: "Difícil",
        pergunta: "Se alguém alterar manualmente o `idUsuario` no frontend, consegue cadastrar um curso na conta de outra pessoa?",
        resposta: "Não. O Service associa o curso ao usuário identificado pelo JWT e não confia no `idUsuario` enviado pelo frontend."
    },
    {
        professor: "Léo",
        categoria: "Service",
        dificuldade: "Difícil",
        pergunta: "Mostre no código onde o curso é vinculado ao usuário autenticado.",
        resposta: "No `CursoService`, através de `curso.setIdUsuario(usuario.getId())`, utilizando o usuário recuperado pela autenticação."
    },
    {
        professor: "Léo",
        categoria: "Service",
        dificuldade: "Média",
        pergunta: "Se o Repository já possui `save()`, por que existe o Service?",
        resposta: "Porque o Service aplica regras de negócio e validações antes de acessar ou persistir os dados."
    },
    {
        professor: "Léo",
        categoria: "Repository",
        dificuldade: "Média",
        pergunta: "Onde está implementado o método `save()` utilizado no `CursoRepository`?",
        resposta: "Ele não foi implementado manualmente. É herdado do `JpaRepository` através do Spring Data JPA."
    },
    {
        professor: "Léo",
        categoria: "Repository",
        dificuldade: "Difícil",
        pergunta: "Para que serve `findByIdCursoAndIdUsuario` no `CursoRepository`?",
        resposta: "Para buscar um curso considerando simultaneamente o ID do curso e o usuário proprietário daquele registro."
    },
    {
        professor: "Léo",
        categoria: "Persistência",
        dificuldade: "Difícil",
        pergunta: "O que acontece quando o código executa `cursoRepository.save(curso)`?",
        resposta: "O Spring Data JPA utiliza a infraestrutura JPA e o Hibernate para persistir ou atualizar a entidade no PostgreSQL."
    },
    {
        professor: "Léo",
        categoria: "Entity",
        dificuldade: "Média",
        pergunta: "Qual é a função da classe `Curso.java` no processo de persistência?",
        resposta: "Ela representa o curso no backend e, como Entity, faz o mapeamento entre o objeto Java e a tabela `cursos`."
    },
    {
        professor: "Léo",
        categoria: "Persistência",
        dificuldade: "Difícil",
        pergunta: "Qual é a diferença entre JPA, Hibernate e Spring Data JPA nesse fluxo?",
        resposta: "A JPA define o padrão de persistência, o Hibernate implementa esse padrão e o Spring Data JPA simplifica o acesso através dos Repositories."
    },
    {
        professor: "Léo",
        categoria: "API REST",
        dificuldade: "Média",
        pergunta: "Qual é a função de GET, POST, PUT e DELETE no sistema?",
        resposta: "GET consulta dados, POST cria, PUT atualiza e DELETE exclui registros."
    },
    {
        professor: "Léo",
        categoria: "Requisições",
        dificuldade: "Difícil",
        pergunta: "Explique o caminho de uma atualização de curso.",
        resposta: "O frontend envia um PUT com o ID do curso, o Controller recebe, o Service valida a operação e o Repository persiste as alterações."
    },
    {
        professor: "Léo",
        categoria: "Requisições",
        dificuldade: "Difícil",
        pergunta: "Explique o caminho da exclusão de um curso.",
        resposta: "O frontend envia um DELETE, o backend identifica o usuário, valida se o curso pertence a ele e utiliza o Repository para realizar a exclusão."
    },
    {
        professor: "Léo",
        categoria: "DTO e Entity",
        dificuldade: "Média",
        pergunta: "Qual é a diferença entre uma Entity e um DTO no projeto?",
        resposta: "A Entity representa um objeto persistido e pode ser mapeada para o banco. O DTO transporta somente os dados necessários para uma operação."
    },
    {
        professor: "Léo",
        categoria: "Código e Auditoria",
        dificuldade: "Difícil",
        pergunta: "Depois que um curso é salvo, como o sistema mantém rastreabilidade daquela operação?",
        resposta: "Após a persistência, o sistema registra a ação na auditoria, relacionando o usuário à operação realizada."
    },
    {
        professor: "Fabiano",
        categoria: "LGPD e Dados",
        dificuldade: "Média",
        pergunta: "Como o sistema impede que um usuário acesse os cursos de outro usuário?",
        resposta: "O backend identifica o usuário pelo JWT e realiza as operações considerando apenas os dados vinculados àquela conta."
    },
    {
        professor: "Fabiano",
        categoria: "Banco de Dados",
        dificuldade: "Média",
        pergunta: "Por que o projeto utiliza PostgreSQL em vez de um banco NoSQL?",
        resposta: "Porque o sistema possui dados fortemente relacionados, como usuário, curso, semestre, disciplina e atividade."
    },
    {
        professor: "Fabiano",
        categoria: "Banco de Dados",
        dificuldade: "Média",
        pergunta: "Qual é a função de uma chave primária no banco?",
        resposta: "Identificar de forma única cada registro de uma tabela."
    },
    {
        professor: "Fabiano",
        categoria: "Banco de Dados",
        dificuldade: "Média",
        pergunta: "Qual é a função de uma chave estrangeira no banco?",
        resposta: "Relacionar registros de tabelas diferentes e manter a ligação entre os dados."
    },
    {
        professor: "Fabiano",
        categoria: "Banco de Dados",
        dificuldade: "Difícil",
        pergunta: "Como a tabela `cursos` consegue identificar qual usuário é proprietário de cada curso?",
        resposta: "Através do campo `id_usuario`, que funciona como chave estrangeira relacionada ao usuário."
    },
    {
        professor: "Fabiano",
        categoria: "LGPD",
        dificuldade: "Difícil",
        pergunta: "Como o projeto trata a propriedade dos dados acadêmicos de cada usuário?",
        resposta: "Os dados ficam vinculados ao usuário autenticado, e o backend verifica essa propriedade antes de permitir consultas ou alterações."
    },
    {
        professor: "Fabiano",
        categoria: "Segurança",
        dificuldade: "Média",
        pergunta: "As senhas dos usuários ficam armazenadas em texto puro no banco?",
        resposta: "Não. As senhas são transformadas em hash com BCrypt antes de serem armazenadas."
    },
    {
        professor: "Fabiano",
        categoria: "Segurança",
        dificuldade: "Difícil",
        pergunta: "Por que BCrypt é mais adequado do que simplesmente criptografar a senha?",
        resposta: "Porque BCrypt gera um hash não reversível, permitindo validar a senha sem precisar recuperar seu valor original."
    },
    {
        professor: "Fabiano",
        categoria: "Segurança",
        dificuldade: "Média",
        pergunta: "Por que as credenciais do banco e chaves de API não ficam diretamente no código-fonte?",
        resposta: "Para evitar exposição de dados sensíveis. Essas informações são armazenadas em variáveis de ambiente."
    },
    {
        professor: "Fabiano",
        categoria: "LGPD",
        dificuldade: "Média",
        pergunta: "Quais medidas relacionadas à LGPD foram implementadas no sistema?",
        resposta: "Termos de Uso, Política de Privacidade, registro de aceite, controle de acesso aos próprios dados e possibilidade de exclusão da conta."
    },
    {
        professor: "Fabiano",
        categoria: "LGPD",
        dificuldade: "Difícil",
        pergunta: "Por que o sistema registra o aceite dos Termos de Uso e da Política de Privacidade?",
        resposta: "Para manter evidência de que o usuário recebeu e aceitou as condições e informações sobre o tratamento de seus dados."
    },
    {
        professor: "Fabiano",
        categoria: "Exclusão de Dados",
        dificuldade: "Difícil",
        pergunta: "O que deve acontecer com os dados vinculados ao usuário quando ele solicita a exclusão da conta?",
        resposta: "Os dados vinculados à conta devem ser removidos conforme as regras definidas pelo sistema e pela Política de Privacidade."
    },
    {
        professor: "Fabiano",
        categoria: "Segurança",
        dificuldade: "Difícil",
        pergunta: "Por que a exclusão da conta exige novamente a senha atual?",
        resposta: "Porque é uma operação sensível e a confirmação da senha reduz o risco de exclusão indevida da conta."
    },
    {
        professor: "Fabiano",
        categoria: "Banco de Dados",
        dificuldade: "Difícil",
        pergunta: "Qual é o benefício de manter relações entre usuário, curso, semestre, disciplina e atividade no banco?",
        resposta: "Manter integridade e contexto entre os dados, permitindo saber a origem e a propriedade de cada informação acadêmica."
    },
    {
        professor: "Fabiano",
        categoria: "Persistência",
        dificuldade: "Média",
        pergunta: "O que significa dizer que os dados possuem persistência?",
        resposta: "Significa que os dados continuam armazenados no banco mesmo depois de fechar o navegador ou reiniciar a aplicação."
    },
    {
        professor: "Fabiano",
        categoria: "Auditoria e Privacidade",
        dificuldade: "Difícil",
        pergunta: "Qual é a diferença entre logs de auditoria e logs técnicos da aplicação?",
        resposta: "Auditoria registra ações relevantes dos usuários. Logs técnicos registram erros e informações internas da aplicação ou servidor."
    },
    {
        professor: "Fabiano",
        categoria: "LGPD e Segurança",
        dificuldade: "Difícil",
        pergunta: "O JWT sozinho garante que um usuário não acesse dados de outro usuário?",
        resposta: "Não. O JWT identifica o usuário, mas o backend também precisa verificar a propriedade dos dados antes de permitir a operação."
    },
    {
        professor: "Fabiano",
        categoria: "Banco e Segurança",
        dificuldade: "Difícil",
        pergunta: "Se alguém descobrir o ID de um curso pertencente a outro usuário, isso deveria ser suficiente para acessar esse curso?",
        resposta: "Não. O backend deve validar também o usuário autenticado e garantir que aquele registro realmente pertence à conta que fez a requisição."
    },
    {
        professor: "Alessandro",
        categoria: "Arquitetura",
        dificuldade: "Média",
        pergunta: "Qual é a responsabilidade do Controller, Service e Repository no projeto?",
        resposta: "O Controller recebe as requisições, o Service aplica regras e validações, e o Repository realiza o acesso e a persistência dos dados."
    },
    {
        professor: "Alessandro",
        categoria: "Arquitetura",
        dificuldade: "Difícil",
        pergunta: "Explique resumidamente a arquitetura completa do Organizador Acadêmico.",
        resposta: "O frontend envia requisições para a API, que passa pelo Nginx até o Spring Boot no Docker. O backend processa os dados e acessa o PostgreSQL ou serviços externos."
    },
    {
        professor: "Alessandro",
        categoria: "Backend",
        dificuldade: "Média",
        pergunta: "Por que o projeto utiliza Spring Boot?",
        resposta: "Porque ele facilita a criação da API REST, integração das camadas, injeção de dependências e configuração da aplicação Java."
    },
    {
        professor: "Alessandro",
        categoria: "API REST",
        dificuldade: "Média",
        pergunta: "Qual é a função da API REST no Organizador Acadêmico?",
        resposta: "Permitir a comunicação entre o frontend e o backend através de requisições HTTP e troca de dados em JSON."
    },
    {
        professor: "Alessandro",
        categoria: "Frontend",
        dificuldade: "Média",
        pergunta: "Qual é a função do JavaScript no frontend do projeto?",
        resposta: "Controlar o comportamento das páginas, capturar dados do usuário e realizar as requisições para o backend."
    },
    {
        professor: "Alessandro",
        categoria: "Frontend",
        dificuldade: "Média",
        pergunta: "Qual é a função do Bootstrap no projeto?",
        resposta: "Auxiliar na estrutura visual e responsividade da interface através de componentes e sistema de grid."
    },
    {
        professor: "Alessandro",
        categoria: "Dashboard",
        dificuldade: "Média",
        pergunta: "Por que o projeto utiliza Chart.js no Dashboard?",
        resposta: "Para transformar os dados recebidos do backend em gráficos apresentados ao usuário."
    },
    {
        professor: "Alessandro",
        categoria: "Infraestrutura",
        dificuldade: "Difícil",
        pergunta: "Onde estão hospedados o frontend, o backend e o banco de dados?",
        resposta: "O frontend está na Vercel, o backend em uma VPS da Hostinger e o PostgreSQL está hospedado no Supabase."
    },
    {
        professor: "Alessandro",
        categoria: "Docker",
        dificuldade: "Média",
        pergunta: "Qual é a função do Docker no backend?",
        resposta: "Empacotar a aplicação e suas dependências em um ambiente padronizado para execução no servidor."
    },
    {
        professor: "Alessandro",
        categoria: "Nginx",
        dificuldade: "Difícil",
        pergunta: "Qual é a função do Nginx na infraestrutura do projeto?",
        resposta: "Atuar como proxy reverso, recebendo as requisições HTTPS e encaminhando-as para o backend Spring Boot."
    },
    {
        professor: "Alessandro",
        categoria: "Infraestrutura",
        dificuldade: "Difícil",
        pergunta: "O backend está hospedado no Docker ou na Hostinger?",
        resposta: "Ele está hospedado na VPS da Hostinger e executa dentro de um container Docker nessa infraestrutura."
    },
    {
        professor: "Alessandro",
        categoria: "Banco de Dados",
        dificuldade: "Difícil",
        pergunta: "Se o container Docker do backend for encerrado, os dados do sistema são apagados?",
        resposta: "Não. O PostgreSQL está hospedado separadamente no Supabase, então os dados permanecem persistidos."
    },
    {
        professor: "Alessandro",
        categoria: "Integrações",
        dificuldade: "Média",
        pergunta: "Para que o projeto utiliza a Resend?",
        resposta: "Para envio de e-mails relacionados à autenticação em duas etapas e recuperação de senha."
    },
    {
        professor: "Alessandro",
        categoria: "Integrações",
        dificuldade: "Média",
        pergunta: "Para que o projeto utiliza o Supabase Storage?",
        resposta: "Para armazenar os arquivos e documentos anexados às atividades acadêmicas."
    },
    {
        professor: "Alessandro",
        categoria: "Segurança",
        dificuldade: "Difícil",
        pergunta: "Por que segredos como senha do banco, chave da Resend e segredo do JWT ficam em variáveis de ambiente?",
        resposta: "Para evitar que credenciais sensíveis fiquem expostas diretamente no código-fonte ou no repositório."
    },
    {
        professor: "Alessandro",
        categoria: "Arquitetura",
        dificuldade: "Difícil",
        pergunta: "Por que separar o sistema em frontend, backend e banco de dados?",
        resposta: "Para separar responsabilidades, facilitar manutenção e permitir que cada parte evolua ou seja implantada de forma independente."
    },
    {
        professor: "Alessandro",
        categoria: "Integrações",
        dificuldade: "Difícil",
        pergunta: "Qual é a diferença entre PostgreSQL no Supabase e Supabase Storage no projeto?",
        resposta: "O PostgreSQL armazena dados estruturados do sistema, enquanto o Storage armazena os arquivos anexados às atividades."
    },
    {
        professor: "Alessandro",
        categoria: "Arquitetura",
        dificuldade: "Difícil",
        pergunta: "Descreva o caminho de uma requisição feita pelo usuário até chegar ao banco de dados.",
        resposta: "Usuário → frontend na Vercel → API HTTPS → Nginx na VPS → Docker → Spring Boot → Repository → PostgreSQL no Supabase."
    }
];
