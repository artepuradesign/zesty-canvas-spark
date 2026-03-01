

## Plano de Correção

### Problema 1: Domínio antigo nas URLs do QR Code
Todas as referências a `https://qr.atito.com.br` precisam ser atualizadas para `https://qr.apipainel.com.br`. Isso afeta **10 arquivos** no frontend:

- `src/pages/dashboard/QRCodeRg1m.tsx`
- `src/pages/dashboard/QRCodeRg3mTodos.tsx`
- `src/pages/dashboard/QRCodeRg6m.tsx`
- `src/pages/dashboard/QRCodeRg6mTodos.tsx`
- `src/pages/dashboard/Rg2026.tsx`
- `src/pages/dashboard/Rg2026Todos.tsx`
- E os demais arquivos encontrados (192 ocorrências no total)

**Ação:** Substituir globalmente `qr.atito.com.br` por `qr.apipainel.com.br` em todos os arquivos `.tsx`.

### Problema 2: Nome Social obrigatório no RG-2026
Em `src/pages/dashboard/Rg2026.tsx` (linha 368), remover a validação:
```
if (!formData.nomeSocial.trim()) { toast.error('Nome Social é obrigatório'); return; }
```

### Problema 3: Conexão com banco (`conexao-qrcode.php`)
O arquivo `api/config/conexao-qrcode.php` já foi atualizado no último diff com `host=127.0.0.1`, `username=qrapipainel`, `database=qrapipainel`. Isso indica que o banco está local na nova VPS -- parece correto.

O arquivo `qrcode/db.php` ainda referencia o IP antigo `45.151.120.2` para produção. Se o banco agora é local na nova VPS, esse IP também precisa ser atualizado para `127.0.0.1` (ou o novo IP).

**Ação:** Atualizar `qrcode/db.php` para usar as mesmas credenciais de `conexao-qrcode.php` (`127.0.0.1`, `qrapipainel`, `Acerola@2026`, `qrapipainel`).

### Sobre permissões na VPS
Executar no servidor:
```text
mkdir -p /caminho/qrvalidation/Uploads /caminho/qrvalidation/qrcodes
chmod 775 /caminho/qrvalidation/Uploads /caminho/qrvalidation/qrcodes
chown www-data:www-data /caminho/qrvalidation/Uploads /caminho/qrvalidation/qrcodes
```

### Resumo das alterações
1. Substituir `qr.atito.com.br` por `qr.apipainel.com.br` em todos os 10 arquivos TSX
2. Remover validação obrigatória do `nomeSocial` em `Rg2026.tsx` (linha 368)
3. Atualizar `qrcode/db.php` com IP/credenciais da nova VPS

