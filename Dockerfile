# Usar la imagen oficial de Bun
FROM oven/bun:1 as base
WORKDIR /usr/src/app

# 1. Instalar dependencias
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# 2. Copiar el código fuente
COPY . .

# 3. Configurar variables de entorno para producción
ENV NODE_ENV=production
ENV PORT=3000

# 4. Exponer el puerto
EXPOSE 3000

# 5. Comando de inicio (ejecuta tu servidor Bun)
CMD ["bun", "run", "src/api/index.ts"]