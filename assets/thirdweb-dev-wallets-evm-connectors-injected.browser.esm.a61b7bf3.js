import{bP as g,bJ as d,by as l,bO as f,bX as h,bS as m,bY as w,bR as C,bC as p,bT as y,bU as I,bV as v,bW as b,b_ as P}from"./index.a1beb9a2.js";function E(c){var n,s,o;if(!c)return"Injected";const t=e=>{if(e.isAvalanche)return"Core Wallet";if(e.isBitKeep)return"BitKeep";if(e.isBraveWallet)return"Brave Wallet";if(e.isCoinbaseWallet)return"Coinbase Wallet";if(e.isExodus)return"Exodus";if(e.isFrame)return"Frame";if(e.isKuCoinWallet)return"KuCoin Wallet";if(e.isMathWallet)return"MathWallet";if(e.isOneInchIOSWallet||e.isOneInchAndroidWallet)return"1inch Wallet";if(e.isOpera)return"Opera";if(e.isPortal)return"Ripio Portal";if(e.isTally)return"Tally";if(e.isTokenPocket)return"TokenPocket";if(e.isTokenary)return"Tokenary";if(e.isTrust||e.isTrustWallet)return"Trust Wallet";if(e.isMetaMask)return"MetaMask"};if((n=c.providers)!=null&&n.length){const e=new Set;let i=1;for(const a of c.providers){let u=t(a);u||(u=`Unknown Wallet #${i}`,i+=1),e.add(u)}const r=[...e];return r.length?r:(s=r[0])!=null?s:"Injected"}return(o=t(c))!=null?o:"Injected"}class A extends g{constructor(t){const s={...{shimDisconnect:!0,getProvider:()=>{if(P(globalThis.window))return globalThis.window.ethereum}},...t.options};super({chains:t.chains,options:s}),d(this,"shimDisconnectKey","injected.shimDisconnect"),d(this,"onAccountsChanged",async e=>{e.length===0?this.emit("disconnect"):this.emit("change",{account:l(e[0])})}),d(this,"onChainChanged",e=>{const i=f(e),r=this.isChainUnsupported(i);this.emit("change",{chain:{id:i,unsupported:r}})}),d(this,"onDisconnect",async e=>{if(e.code===1013&&await this.getProvider())try{if(await this.getAccount())return}catch{}this.emit("disconnect"),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey)});const o=s.getProvider();if(typeof s.name=="string")this.name=s.name;else if(o){const e=E(o);s.name?this.name=s.name(e):typeof e=="string"?this.name=e:this.name=e[0]}else this.name="Injected";this.id="injected",this.ready=!!o,this.connectorStorage=t.connectorStorage}async connect(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const n=await this.getProvider();if(!n)throw new h;this.setupListeners(),this.emit("message",{type:"connecting"});const s=await n.request({method:"eth_requestAccounts"}),o=l(s[0]);let e=await this.getChainId(),i=this.isChainUnsupported(e);if(t.chainId&&e!==t.chainId)try{await this.switchChain(t.chainId),e=t.chainId,i=this.isChainUnsupported(t.chainId)}catch(a){console.error(`Could not switch to chain id: ${t.chainId}`,a)}this.options.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const r={account:o,chain:{id:e,unsupported:i},provider:n};return this.emit("connect",r),r}catch(n){throw this.isUserRejectedRequestError(n)?new m(n):n.code===-32002?new w(n):n}}async disconnect(){const t=await this.getProvider();!(t!=null&&t.removeListener)||(t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey))}async getAccount(){const t=await this.getProvider();if(!t)throw new h;const n=await t.request({method:"eth_accounts"});return l(n[0])}async getChainId(){const t=await this.getProvider();if(!t)throw new h;return t.request({method:"eth_chainId"}).then(f)}async getProvider(){const t=this.options.getProvider();return t&&(this._provider=t),this._provider}async getSigner(){let{chainId:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[n,s]=await Promise.all([this.getProvider(),this.getAccount()]);return new C(n,t).getSigner(s)}async isAuthorized(){try{if(this.options.shimDisconnect&&!Boolean(await this.connectorStorage.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new h;return!!await this.getAccount()}catch{return!1}}async switchChain(t){var o,e;const n=await this.getProvider();if(!n)throw new h;const s=p(t);try{await n.request({method:"wallet_switchEthereumChain",params:[{chainId:s}]});const i=this.chains.find(r=>r.chainId===t);return i||{chainId:t,name:`Chain ${s}`,slug:`${s}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0}}catch(i){const r=this.chains.find(a=>a.chainId===t);if(!r)throw new y({chainId:t,connectorId:this.id});if(i.code===4902||((e=(o=i==null?void 0:i.data)==null?void 0:o.originalError)==null?void 0:e.code)===4902)try{return await n.request({method:"wallet_addEthereumChain",params:[{chainId:s,chainName:r.name,nativeCurrency:r.nativeCurrency,rpcUrls:I(r),blockExplorerUrls:this.getBlockExplorerUrls(r)}]}),r}catch(a){throw this.isUserRejectedRequestError(a)?new m(i):new v}throw this.isUserRejectedRequestError(i)?new m(i):new b(i)}}async setupListeners(){const t=await this.getProvider();t.on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect))}isUserRejectedRequestError(t){return t.code===4001}}export{A as InjectedConnector};
