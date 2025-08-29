import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./components/ui/Button";
import { Card, CardContent } from "./components/ui/Card";
import Input from "./components/ui/Input";
const nav=["臻品系列","工艺堂","灵感志","预约到店"];
const collections=[{title:"江山·簪",desc:"18K黄K金 / 青金石 / 珐琅",img:"https://picsum.photos/seed/sgq1/900/1125"},
{title:"云岚·戒",desc:"PT950 / D VVS1 / 珐琅彩",img:"https://picsum.photos/seed/sgq2/900/1125"},
{title:"流霞·坠",desc:"18K白K金 / 白玉 / 点翠工艺",img:"https://picsum.photos/seed/sgq3/900/1125"},
{title:"碧山·镯",desc:"18K黄K金 / 和田玉 / 手工錾刻",img:"https://picsum.photos/seed/sgq4/900/1125"}];
export default function App(){
  const [showForm,setShowForm]=useState(false);
  return (<div className="min-h-screen bg-[var(--mist)] text-[var(--ink)]">
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-[var(--jade)] ring-2 ring-[var(--gold)]"/>
          <div className="font-semibold tracking-[0.35em] text-sm md:text-base">思倾国 · SIQINGGUO</div>
        </div>
        <nav className="hidden md:flex gap-8 text-sm">{nav.map(n=><a key={n} href={`#${n}`} className="hover:opacity-70 transition-opacity">{n}</a>)}</nav>
        <Button onClick={()=>setShowForm(true)} className="px-4">预约</Button>
      </div>
    </header>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--jade)] via-[var(--jadeLight)] to-[#e6f2ec]"/>
        <svg className="absolute inset-x-0 bottom-[-10%] w-[140%] h-[60vh] opacity-40" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="#ffffff" d="M0,128L60,133.3C120,139,240,149,360,160C480,171,600,181,720,181.3C840,181,960,171,1080,149.3C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"/></svg>
        <div className="absolute inset-0 mix-blend-multiply" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2400&auto=format&fit=crop')`, backgroundSize:'cover', backgroundPosition:'center', opacity:.18 }}/>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-24 md:py-36 text-white">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-3xl md:text-6xl font-light leading-tight">思倾国 · 青绿匠心 • 国风臻艺</motion.h1>
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6, delay:.1}} className="mt-4 text-base md:text-lg text-white/90 max-w-2xl">取青绿之色，承金玉之韵。工坊级錾刻、珐琅、点翠与高阶镶嵌，凝练东方山水气象与当代审美。</motion.p>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6, delay:.2}} className="mt-8 flex flex-wrap gap-3">
          <Button onClick={()=>setShowForm(true)} className="bg白 text-[var(--ink)] hover:bg-white/90">预约到店</Button>
          <Button onClick={()=>document.getElementById('臻品系列')?.scrollIntoView({behavior:'smooth'})} className="bg-transparent border border-white/70 text白 hover:bg-white/10">浏览系列</Button>
        </motion.div>
      </div>
    </section>
    <section id="臻品系列" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-xl md:text-2xl tracking-[0.35em] uppercase text-neutral-800 mb-2">臻品系列</h2>
      <p className="text-sm text-neutral-500 mb-6">甄选材质 · 匠作细节 · 不展示价格</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((p,i)=>(<div key={p.title} className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
          <div className="aspect-[4/5] overflow-hidden"><img src={p.img} alt={p.title} className="w-full h-full object-cover"/></div>
          <div className="p-4"><div className="text-[var(--jade)] tracking-wide">{p.title}</div><div className="text-sm text-neutral-600 mt-1">{p.desc}</div></div>
        </div>))}
      </div>
    </section>
    <section id="工艺堂" className="max-w-6xl mx-auto px-4 pb-20">
      <h2 className="text-xl md:text-2xl tracking-[0.35em] uppercase text-neutral-800 mb-2">工艺堂</h2>
      <p className="text-sm text-neutral-500 mb-6">錾刻 / 珐琅 / 点翠 / 密钉镶</p>
      <div className="grid md:grid-cols-3 gap-6">{[1,2,3].map(n=>(<div key={n} className="rounded-2xl overflow-hidden border border-neutral-200 bg白">
        <img src={`https://picsum.photos/seed/craft${n}/900/700`} alt="craft" className="w-full h-full object-cover"/></div>))}</div>
    </section>
    <section id="灵感志" className="bg白 border-y border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-xl md:text-2xl tracking-[0.35em] uppercase text-neutral-800 mb-2">灵感志</h2>
        <p className="text-sm text-neutral-500 mb-6">山水、花鸟、金玉的现代重构</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden relative"><img src="https://picsum.photos/seed/look1/1200/1600" className="w-full h-full object-cover"/><div className="absolute bottom-4 left-4 text白">山色入怀</div></div>
          <div className="rounded-2xl overflow-hidden relative"><img src="https://picsum.photos/seed/look2/1200/1600" className="w-full h-full object-cover"/><div className="absolute bottom-4 left-4 text白">金玉其华</div></div>
        </div>
      </div>
    </section>
    <section id="预约到店" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-xl md:text-2xl tracking-[0.35em] uppercase text-neutral-800 mb-2">预约到店</h2>
      <p className="text-sm text-neutral-500 mb-6">上野·东京 展厅 预约参观</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg白 border border-neutral-200 rounded-2xl p-6">
          <form className="grid gap-4" onSubmit={(e)=>{e.preventDefault(); [void(0)]; alert('预约提交成功，我们将尽快与您确认来店时间。');}}>
            <div className="grid gap-2"><label className="text-sm">姓名</label><input className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--jade)]" placeholder="请输入您的姓名" required/></div>
            <div className="grid gap-2"><label className="text-sm">联系方式（手机/邮箱）</label><input className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--jade)]" placeholder="请填写便于联系的方式" required/></div>
            <div className="grid gap-2"><label className="text-sm">意向（戒/镯/坠/胸针/定制等）</label><input className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--jade)]" placeholder="例如：定制戒指 / 翡翠镯甄别 / 维护保养"/></div>
            <div className="grid gap-2"><label className="text-sm">期望到店日期</label><input type="date" className="w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--jade)]" required/></div>
            <button className="rounded-2xl px-5 py-2 bg-[var(--jade)] text白 hover:opacity-90">提交预约</button>
          </form>
        </div>
        <div className="bg白 border border-neutral-200 rounded-2xl min-h-[320px] flex items-center justify-center text-neutral-500">地图占位（可接入高德/Google Maps）</div>
      </div>
    </section>
    <footer className="py-10 border-t border-neutral-200 text-center text-sm text-neutral-600"><div className="mb-1">© 2025 思倾国 · SIQINGGUO</div><div>不展示价格 · 仅提供定制与预约鉴赏 | 上野·东京 展厅</div></footer>
  </div>);
}
