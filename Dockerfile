FROM denoland/deno:latest

WORKDIR /app

COPY . .

EXPOSE 3001

CMD ["run", "--allow-net", "--allow-env", "--allow-read", "--allow-sys", "main.ts"]