import { Database, Lock, Layers, Zap } from 'lucide-react'
import BookingCTA from '../components/BookingCTA'

export default function BlockchainDevelopment() {
  const offerings = [
    { title: 'Smart Contract Development & Audits', desc: 'Secure, audited Solidity and Rust smart contracts conforming to ERC-20, ERC-721, and ERC-1155 standards.' },
    { title: 'Decentralized Apps (dApps)', desc: 'Full-stack dApps with Web3 wallet authentication (MetaMask, WalletConnect), sub-graph indexing, and IPFS storage.' },
    { title: 'Layer-2 & Zero-Knowledge Scaling', desc: 'Rollups, state channels, and ZK-SNARK protocols designed to slash gas fees and achieve enterprise transaction speed.' },
    { title: 'Private & Enterprise Consortiums', desc: 'Permissioned blockchain networks built on Hyperledger Fabric and Avalanche subnets for regulated industries.' }
  ]

  return (
    <div className="pt-32 sm:pt-40 pb-20">
      <section className="px-4 sm:px-8 mb-20">
        <div className="w-full mx-auto xl:max-w-[1440px] 2xl:max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111419] border border-white/10 text-[#00CE44] text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />
            Decentralized Architecture
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Blockchain Development <br />
            <span className="text-[#00CE44]">Services USA</span>
          </h1>
          <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Leading blockchain development company building decentralized apps, audited smart contracts, and secure institutional solutions for maximum efficiency and transparency.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-8 mb-24">
        <div className="w-full mx-auto xl:max-w-[1440px] 2xl:max-w-[1600px] grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((o) => (
            <div key={o.title} className="p-8 sm:p-10 rounded-3xl bg-[#0c0e12] border border-white/[0.08] hover:border-[#00CE44]/40 transition">
              <h3 className="text-2xl font-bold text-white mb-3">{o.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <BookingCTA />
    </div>
  )
}
