import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { schema } from './schema'
 
// 使用 GraphQL schema 创建一个 Yoga 实例。
const yoga = createYoga({ schema })
 
// 将其传递给服务器以挂钩到请求处理程序。
const server = createServer(yoga)
 
// 启动服务器，就完成了！
server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})