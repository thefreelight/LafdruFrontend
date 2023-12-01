# 使用官方 Node.js 镜像
FROM node:latest

# 设置工作目录
WORKDIR /app

# 将 package.json 和 yarn.lock 复制到容器中
# 如果您没有 yarn.lock 文件，仅复制 package.json 即可
COPY package.json yarn.lock* ./

# 安装项目依赖
RUN yarn install

# 复制项目文件到容器中
COPY . .

# 暴露端口
EXPOSE 3000

# 指定容器启动时运行的命令
CMD ["yarn", "run", "start-web"]
