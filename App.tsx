
import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award as AwardIcon, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Star,
  ShieldCheck,
  Layout,
  TrendingUp,
  Monitor,
  X,
  MessageSquare,
  Copy,
  Check,
  Zap,
  Target,
  Users,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, EDUCATION, AWARDS } from './constants';

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  },
  viewport: { once: false, amount: 0.15 }
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 0 }}
            className="relative w-full max-w-md bg-white rounded-[3rem] shadow-2xl z-[110] p-10 border border-gray-100 overflow-hidden"
          >
            {/* Decorative background for modal */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
            
            <div className="flex justify-between items-center mb-10">
              <div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">联系我</h2>
                <p className="text-sm text-gray-500 font-medium mt-1">期待与您的沟通交流</p>
              </div>
              <button 
                onClick={onClose} 
                className="p-3 hover:bg-gray-100 rounded-full transition-all hover:rotate-90 duration-300"
              >
                <X size={24} className="text-gray-400" />
              </button>
            </div>

            <div className="space-y-5">
              <div className="flex items-center justify-between p-5 bg-gray-50/80 rounded-3xl group border border-transparent hover:border-green-100 transition-all">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shadow-sm">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">WeChat / 微信</div>
                    <div className="text-gray-900 font-bold text-lg">{PERSONAL_INFO.wechat}</div>
                  </div>
                </div>
                <button 
                  onClick={() => copyToClipboard(PERSONAL_INFO.wechat, 'wechat')}
                  className="p-3 hover:bg-white rounded-xl transition-all text-gray-400 hover:text-blue-600 shadow-none hover:shadow-md"
                >
                  {copiedType === 'wechat' ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                </button>
              </div>

              <div className="flex items-center justify-between p-5 bg-gray-50/80 rounded-3xl group border border-transparent hover:border-blue-100 transition-all">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Email / 邮箱</div>
                    <div className="text-gray-900 font-bold text-lg">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <button 
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-3 hover:bg-white rounded-xl transition-all text-gray-400 hover:text-blue-600 shadow-none hover:shadow-md"
                >
                  {copiedType === 'email' ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                </button>
              </div>

              <div className="flex items-center justify-between p-5 bg-gray-50/80 rounded-3xl group border border-transparent hover:border-indigo-100 transition-all">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Phone / 电话</div>
                    <div className="text-gray-900 font-bold text-lg">{PERSONAL_INFO.contact}</div>
                  </div>
                </div>
                <button 
                  onClick={() => copyToClipboard(PERSONAL_INFO.contact, 'phone')}
                  className="p-3 hover:bg-white rounded-xl transition-all text-gray-400 hover:text-blue-600 shadow-none hover:shadow-md"
                >
                  {copiedType === 'phone' ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                </button>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
               <button 
                onClick={onClose}
                className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold text-sm hover:bg-gray-800 transition-colors"
               >
                 返回页面
               </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Header = ({ onContactClick }: { onContactClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">
              DJ
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              {PERSONAL_INFO.name}
            </span>
          </motion.div>
          <nav className="hidden md:flex space-x-10 text-sm font-semibold">
            {['关于我', '工作经历', '精品案例', '教育荣誉'].map((item, idx) => {
              const ids = ['about', 'experience', 'projects', 'education'];
              return (
                <button 
                  key={item} 
                  onClick={() => scrollTo(ids[idx])}
                  className="text-gray-500 hover:text-blue-600 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </button>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onContactClick}
              className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all"
            >
              联系我
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="about" className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold mb-6 tracking-wide"
          >
            <Star size={14} className="fill-current" /> 17年体验设计积淀
          </motion.div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1]">
            全栈设计领军人 <br />
            <span className="text-blue-600">赋能商业价值</span>
          </h1>
          <p className="mt-8 text-xl text-gray-600 max-w-2xl leading-relaxed">
            {PERSONAL_INFO.summary} 擅长将复杂战略转化为纯粹体验，不仅关注视觉美感，更聚焦于商业目标的精准达成。
          </p>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { label: '设计工龄', value: '17+' },
              { label: '管理经验', value: '10+' },
              { label: '覆盖用户', value: '5亿+' },
              { label: '最大团队', value: '60+' }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="group"
              >
                <div className="text-3xl font-black text-blue-600 group-hover:scale-110 transition-transform origin-left">{stat.value}</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, type: "spring" }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Avatar container reduced to 60% width of its column */}
          <div className="relative z-20 w-3/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
            <img 
              src={PERSONAL_INFO.avatar} 
              alt={PERSONAL_INFO.name} 
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* Decorative Floating Elements around the smaller avatar */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-4 z-30 bg-white p-3 rounded-xl shadow-lg border border-gray-100 hidden md:block"
          >
             <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
               <Zap size={14} />
             </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

const CharacteristicsSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        {...fadeInUp}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-4">核心优势与特质</h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
          深耕互联网十七载，在复杂业务建模与极简体验之间寻找最优平衡。
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            icon: <Target className="text-blue-600" />,
            title: "全栈设计贯通能力",
            desc: "精通UX/UI全链路，且具备扎实的技术背景（计算机专业），能够从技术底层逻辑出发构建更合理的交互方案。"
          },
          {
            icon: <Users className="text-indigo-600" />,
            title: "卓越的团队统御力",
            desc: "10年以上大型团队管理经验，曾带领超过60人的设计团队，擅长通过专业影响力建立标准化的设计体系与高效流程。"
          },
          {
            icon: <Compass className="text-purple-600" />,
            title: "深刻的商业敏锐度",
            desc: "不仅关注审美，更关注产品在市场中的竞争壁垒。擅长长线规划，将品牌策略深度融入产品体验中。"
          }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 group"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform duration-500">
              {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-4">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ExperienceTimeline = () => (
  <section id="experience" className="py-24 bg-gray-50 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        {...fadeInUp}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-black text-gray-900 sm:text-5xl mb-4 tracking-tight">工作足迹</h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-500 max-w-2xl mx-auto italic font-medium">
          “从一线设计到平台负责人，每一步都在追求极致的用户体验与商业逻辑的完美契合。”
        </p>
      </motion.div>

      <div className="relative space-y-24">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-100 via-blue-500 to-indigo-100 md:-translate-x-1/2"></div>
        
        {EXPERIENCES.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-600 shadow-xl z-10 flex items-center justify-center">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
            </div>
            
            <div className="w-full md:w-5/12 ml-12 md:ml-0">
              <div className="p-8 bg-white rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-blue-600 font-black text-xs tracking-widest bg-blue-50 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">{exp.company}</h3>
                <div className="mt-2 flex items-center gap-3 text-gray-400 font-bold text-xs uppercase tracking-wider">
                  <Briefcase size={14} className="text-blue-500" /> {exp.title}
                  <span className="text-gray-200">|</span>
                  <MapPin size={14} className="text-blue-500" /> {exp.location}
                </div>
                <div className="mt-6 space-y-4">
                  <div className="space-y-2">
                    {exp.tasks.map((task, idx) => (
                      <div key={idx} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                        <ChevronRight size={14} className="shrink-0 text-blue-400 mt-1" />
                        {task}
                      </div>
                    ))}
                  </div>
                  {exp.achievements.length > 0 && (
                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-3">核心成果</h4>
                      <div className="space-y-2">
                        {exp.achievements.map((ach, idx) => (
                          <div key={idx} className="flex gap-3 text-sm font-bold text-gray-800">
                            <Star size={14} className="shrink-0 text-amber-500 mt-0.5 fill-amber-500" />
                            {ach}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="hidden md:block w-2/12"></div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectGrid = () => (
  <section id="projects" className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        {...fadeInUp}
        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
      >
        <div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">精品案例</h2>
          <div className="h-1.5 w-16 bg-blue-600 mt-2 rounded-full"></div>
          <p className="mt-4 text-gray-500 font-medium">涵盖金融、社交、工具及软硬件结合等多元化领域。</p>
        </div>
        <div className="flex gap-3 p-1 bg-gray-50 rounded-full border border-gray-200 shadow-sm overflow-x-auto no-scrollbar">
          {['全部', '金融', '社交', '工具', '硬件'].map((filter) => (
            <button 
              key={filter} 
              className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-black transition-all ${filter === '全部' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-transparent text-gray-400 hover:text-blue-600'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {PROJECTS.map((project) => (
          <motion.div 
            key={project.id} 
            variants={fadeInUp}
            className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            <div className="aspect-[16/10] relative overflow-hidden">
              <img src={project.image} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest border border-white/20">
                  {project.category}
                </span>
              </div>
            </div>
            <div className="p-10">
              <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed font-medium">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.highlights.map((h, i) => (
                  <span key={i} className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const EducationAndAwards = () => (
  <section id="education" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-3xl font-black tracking-tight">教育背景</h2>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 relative overflow-hidden group shadow-sm">
            <div className="absolute top-0 right-0 p-8 text-blue-50 pointer-events-none group-hover:text-blue-100 transition-colors">
              <GraduationCap size={80} />
            </div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-2">
                <div>
                  <h3 className="text-2xl font-black text-gray-900">{EDUCATION.school}</h3>
                  <p className="text-blue-600 font-bold mt-1">{EDUCATION.major} · {EDUCATION.degree}</p>
                </div>
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full border border-gray-100">{EDUCATION.period}</span>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">学术荣誉</h4>
                  <div className="flex flex-wrap gap-2">
                    {EDUCATION.honors.map((h, i) => (
                      <span key={i} className="px-4 py-2 bg-gray-50 text-gray-700 font-bold text-xs rounded-xl border border-gray-100 shadow-sm">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">在校实践</h4>
                  <div className="space-y-3">
                    {EDUCATION.experience.map((e, i) => (
                      <div key={i} className="text-sm text-gray-600 flex gap-4 leading-relaxed font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                        {e}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-amber-100">
              <AwardIcon size={24} />
            </div>
            <h2 className="text-3xl font-black tracking-tight">业界成就</h2>
          </div>
          <div className="grid gap-6">
            {AWARDS.map((award, i) => (
              <motion.div 
                key={i} 
                whileHover={{ x: 10 }}
                className="flex gap-6 items-center p-6 bg-white hover:bg-amber-50/50 transition-all rounded-[1.5rem] border border-gray-100 hover:border-amber-100 group shadow-sm"
              >
                <div className="w-14 h-14 shrink-0 bg-amber-50 text-amber-500 rounded-2xl flex flex-col items-center justify-center border border-amber-100 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-500">
                  <span className="text-xs font-black">{award.year}</span>
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900">{award.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 font-medium">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = ({ onContactClick }: { onContactClick: () => void }) => (
  <footer className="bg-gray-950 text-white py-20 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
       <div className="grid grid-cols-12 gap-1 w-full h-full">
         {Array.from({length: 144}).map((_, i) => (
           <div key={i} className="border border-white aspect-square"></div>
         ))}
       </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-b border-white/5 pb-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
              DJ
            </div>
            <span className="text-2xl font-black tracking-tight">{PERSONAL_INFO.name}</span>
          </div>
          <p className="text-gray-400 text-base max-w-sm leading-relaxed font-medium">
            以设计之名，重塑商业体验。17年行业深耕，期待与您共创下个亿级可能。
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">快速联络</h4>
            <div className="space-y-3">
              <button onClick={onContactClick} className="flex items-center gap-4 text-gray-300 hover:text-blue-500 transition-colors group text-left">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone size={16} />
                </div>
                <span className="font-bold text-sm">{PERSONAL_INFO.contact}</span>
              </button>
              <button onClick={onContactClick} className="flex items-center gap-4 text-gray-300 hover:text-blue-500 transition-colors group text-left">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="font-bold text-sm">{PERSONAL_INFO.email}</span>
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">当前定位</h4>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                <MapPin size={16} className="text-blue-500" />
              </div>
              <span className="font-bold text-sm">广东 · 深圳</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-[11px] font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} DUAN JIA. DESIGN LEAD PORTFOLIO.
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white/5 hover:bg-white text-gray-400 hover:text-gray-900 rounded-full text-xs font-black transition-all border border-white/10"
        >
          DOWNLOAD FULL RESUME PDF
        </motion.button>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={() => setIsContactModalOpen(true)} />
      <main>
        <Hero />
        <CharacteristicsSection />
        <ExperienceTimeline />
        <ProjectGrid />
        <EducationAndAwards />
      </main>
      <Footer onContactClick={() => setIsContactModalOpen(true)} />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
