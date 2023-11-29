# 使用官方 Node.js 镜像
FROM node:latest

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json（如果存在）复制到容器中
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件到容器中
COPY . .

# 暴露端口
EXPOSE 3000

# 指定容器启动时运行的命令
CMD ["npm", "run", "start-web"]
