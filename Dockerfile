FROM node:18.16.0
COPY . /app
WORKDIR /app
RUN curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=7.29.3 sh - \
    && pnpm install 
EXPOSE 3000
CMD pnpm start
 
