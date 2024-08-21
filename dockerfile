# Use a imagem base do Nginx
FROM nginx:alpine

# Copie os arquivos da aplicação para o diretório padrão do Nginx
COPY assets /usr/share/nginx/html/assets
COPY index.html /usr/share/nginx/html/index.html

# Expõe a porta 80 para acessar a aplicação
EXPOSE 80

# Comando padrão do Nginx
CMD ["nginx", "-g", "daemon off;"]
