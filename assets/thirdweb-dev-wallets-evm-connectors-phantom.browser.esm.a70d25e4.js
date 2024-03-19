import{bJ as u,bQ as m,bX as p,bS as d,by as l,bY as w,c0 as g}from"./index.a1beb9a2.js";import{InjectedConnector as f}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.a61b7bf3.js";class _ extends f{constructor(t){const n={...{name:"Phantom",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:g},...t.options};super({chains:t.chains,options:n,connectorStorage:t.connectorStorage}),u(this,"id",m.phantom),this._UNSTABLE_shimOnConnectSelectAccount=n.UNSTABLE_shimOnConnectSelectAccount}async connect(){var c,n;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();if(!e)throw new p;this.setupListeners(),this.emit("message",{type:"connecting"});let o=null;if(this._UNSTABLE_shimOnConnectSelectAccount&&((c=this.options)==null?void 0:c.shimDisconnect)&&!Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))&&(o=await this.getAccount().catch(()=>null),!!o))try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(h){if(this.isUserRejectedRequestError(h))throw new d(h)}if(!o){const i=await e.request({method:"eth_requestAccounts"});o=l(i[0])}let s=await this.getChainId(),r=this.isChainUnsupported(s);if(t.chainId&&s!==t.chainId)try{await this.switchChain(t.chainId),s=t.chainId,r=this.isChainUnsupported(t.chainId)}catch(i){console.error(`Could not switch to chain id : ${t.chainId}`,i)}(n=this.options)!=null&&n.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const a={chain:{id:s,unsupported:r},provider:e,account:o};return this.emit("connect",a),a}catch(e){throw this.isUserRejectedRequestError(e)?new d(e):e.code===-32002?new w(e):e}}async switchAccount(){await(await this.getProvider()).request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}}export{_ as PhantomConnector};
