import{bJ as u,bQ as p,bX as l,bS as d,by as m,bY as w,cW as f}from"./index.a1beb9a2.js";import{InjectedConnector as g}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.a61b7bf3.js";class b extends g{constructor(t){const s={...{name:"OneKey Wallet",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:f},...t.options};super({chains:t.chains,options:s,connectorStorage:t.connectorStorage}),u(this,"id",p.oneKey)}async connect(){var r,s;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();if(!e)throw new l;this.setupListeners(),this.emit("message",{type:"connecting"});let n=null;if(((r=this.options)==null?void 0:r.shimDisconnect)&&!Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))&&(n=await this.getAccount().catch(()=>null),!!n))try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(h){if(this.isUserRejectedRequestError(h))throw new d(h)}if(!n){const i=await e.request({method:"eth_requestAccounts"});n=m(i[0])}let o=await this.getChainId(),c=this.isChainUnsupported(o);if(t.chainId&&o!==t.chainId)try{await this.switchChain(t.chainId),o=t.chainId,c=this.isChainUnsupported(t.chainId)}catch(i){console.error(`Could not switch to chain id : ${t.chainId}`,i)}(s=this.options)!=null&&s.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const a={chain:{id:o,unsupported:c},provider:e,account:n};return this.emit("connect",a),a}catch(e){throw this.isUserRejectedRequestError(e)?new d(e):e.code===-32002?new w(e):e}}}export{b as OneKeyConnector};
