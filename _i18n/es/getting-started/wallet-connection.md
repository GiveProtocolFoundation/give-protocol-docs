---
layout: page
title: Conexión de billetera
description: Cómo conectar tu billetera de criptomonedas a Give Protocol.
---

## Billeteras compatibles

Give Protocol es compatible con las siguientes billeteras:

| Billetera | Tipo | Recomendado para |
|-----------|------|------------------|
| MetaMask | Extensión de navegador / Móvil | Principiantes, la mayoría de usuarios |
| WalletConnect | Basado en código QR | Usuarios móviles |
| Coinbase Wallet | Extensión de navegador / Móvil | Usuarios de Coinbase |

## Conectar MetaMask

1. Instala la [extensión MetaMask](https://metamask.io) para tu navegador
2. Crea o importa una billetera en MetaMask
3. En Give Protocol, haz clic en **Conectar billetera**
4. Selecciona **MetaMask** de la lista
5. MetaMask te pedirá que apruebes la conexión — haz clic en **Conectar**
6. Tu dirección de billetera ya está vinculada

## Agregar la red Moonbeam

Give Protocol funciona en la red Moonbeam. Agrégala a MetaMask:

1. Abre MetaMask → **Configuración** → **Redes** → **Agregar red**
2. Introduce los siguientes datos:
   - **Nombre de la red**: Moonbeam
   - **URL de RPC**: `https://rpc.api.moonbeam.network`
   - **ID de cadena**: `1284`
   - **Símbolo de moneda**: `GLMR`
   - **Explorador de bloques**: `https://moonbeam.moonscan.io`

## Solución de problemas

**¿La billetera no se conecta?**
- Asegúrate de que tu extensión de navegador esté desbloqueada
- Intenta actualizar la página
- Limpia la caché del navegador y vuelve a intentarlo

**¿Red incorrecta?**
- Cambia a la red Moonbeam en MetaMask
- Give Protocol te avisará automáticamente si estás en la red incorrecta

**¿La transacción falla?**
- Verifica que tienes suficiente GLMR para las tarifas de gas
- Intenta aumentar ligeramente el límite de gas

## Nota de seguridad

Give Protocol **nunca** te pedirá tu frase semilla o clave privada. Solo aprueba solicitudes de conexión desde `app.giveprotocol.io`.
