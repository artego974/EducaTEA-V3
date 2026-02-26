import LegalLayout from "@/frontend/components/LegalLayout";

export default function CookiesPage() {
  return (
    <LegalLayout title="Política de Cookies" date="21 de Janeiro de 2026">
      <h3>O que são cookies?</h3>
      <p>
        Como é prática comum em quase todos os sites profissionais, este site
        usa cookies, que são pequenos arquivos baixados no seu computador, para
        melhorar sua experiência. Esta página descreve quais informações eles
        coletam, como as usamos e por que às vezes precisamos armazenar esses
        cookies.
      </p>

      <h3>Como usamos os cookies</h3>
      <p>
        Utilizamos cookies por vários motivos detalhados abaixo. Infelizmente,
        na maioria dos casos, não existem opções padrão do setor para desativar
        os cookies sem desativar completamente a funcionalidade e os recursos
        que eles adicionam a este site.
      </p>

      <h3>Cookies que definimos</h3>

      <div className="space-y-6 mt-6">
        <div className="border-l-4 border-[#1A3879] pl-4">
          <h4 className="font-bold text-gray-900 m-0">
            Cookies relacionados à conta
          </h4>
          <p className="m-0 text-sm text-gray-600 mt-1">
            Se você criar uma conta conosco, usaremos cookies para o
            gerenciamento do processo de inscrição e administração geral.
          </p>
        </div>

        <div className="border-l-4 border-[#1A3879] pl-4">
          <h4 className="font-bold text-gray-900 m-0">Cookies de Login</h4>
          <p className="m-0 text-sm text-gray-600 mt-1">
            Utilizamos cookies quando você está logado, para que possamos
            lembrar dessa ação. Isso evita que você precise fazer login sempre
            que visitar uma nova página.
          </p>
        </div>
      </div>

      <h3 className="mt-8">Desativando Cookies</h3>
      <p>
        Você pode impedir a configuração de cookies ajustando as configurações
        do seu navegador (consulte a Ajuda do navegador para saber como fazer
        isso). Esteja ciente de que a desativação de cookies afetará a
        funcionalidade deste e de muitos outros sites que você visita.
      </p>
    </LegalLayout>
  );
}
