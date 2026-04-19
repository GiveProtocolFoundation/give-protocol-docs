---
layout: page
title: 钱包连接
description: 如何将您的加密钱包连接到 Give Protocol。
---

## 支持的钱包

Give Protocol 支持以下钱包：

| 钱包 | 类型 | 推荐人群 |
|------|------|----------|
| MetaMask | 浏览器扩展 / 移动端 | 初学者，大多数用户 |
| WalletConnect | 二维码 | 移动端用户 |
| Coinbase Wallet | 浏览器扩展 / 移动端 | Coinbase 用户 |

## 连接 MetaMask

1. 为您的浏览器安装 [MetaMask 扩展程序](https://metamask.io)
2. 在 MetaMask 中创建或导入钱包
3. 在 Give Protocol 上点击**连接钱包**
4. 从列表中选择 **MetaMask**
5. MetaMask 将要求您批准连接 — 点击**连接**
6. 您的钱包地址现已关联

## 添加 Moonbeam 网络

Give Protocol 运行在 Moonbeam 网络上。将其添加到 MetaMask：

1. 打开 MetaMask → **设置** → **网络** → **添加网络**
2. 输入以下详细信息：
   - **网络名称**：Moonbeam
   - **RPC URL**：`https://rpc.api.moonbeam.network`
   - **链 ID**：`1284`
   - **货币符号**：`GLMR`
   - **区块浏览器**：`https://moonbeam.moonscan.io`

## 故障排除

**钱包无法连接？**
- 确保您的浏览器扩展已解锁
- 尝试刷新页面
- 清除浏览器缓存后重试

**网络错误？**
- 在 MetaMask 中切换到 Moonbeam 网络
- 如果您使用了错误的网络，Give Protocol 会自动提示您

**交易失败？**
- 检查您是否有足够的 GLMR 支付 gas 费用
- 尝试稍微提高 gas 限额

## 安全提示

Give Protocol **绝不会**要求您提供助记词或私钥。只批准来自 `app.giveprotocol.io` 的连接请求。
