# ==============================================================================
# STAGE 1: Build Static Assets (Vite + React)
# ==============================================================================
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build

# ==============================================================================
# STAGE 2: Lightweight Nginx Web Server
# ==============================================================================
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Limpiar archivos por defecto
RUN rm -rf ./*

# Copiar build estático generado
COPY --from=builder /app/dist ./

# Configuración Nginx básica para SPA con fallback index.html y puerto 80
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /index.html; \
    } \
    location /health { \
        access_log off; \
        return 200 "healthy\n"; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:80/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
