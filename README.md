Como temos um arquivo docker-compose, para iniciar servidor Redis e PostgreSQL, via Docker, sem persistência de dados em volume:

```bash
docker-compose up -d
```

Gerar o arquivo tsconfig.json:

```bash
npx tsc --init
```

Altere a configuração 'target' do arquivo tsconfig.json para:

```json
{
  "compilerOptions": {
    "target": "es2020"
  }
}
```
