
import { Experience, Project, Education, Award } from './types';

export const PERSONAL_INFO = {
  name: '段嘉',
  status: '已婚已育',
  years: '17+',
  education: '本科',
  contact: '13168740076',
  wechat: 'kennyjl',
  email: '420325498@qq.com',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop', // 示意头像：干练的商务人士形象
  summary: '17 年以上产品体验设计经验，10 年以上大型互联网公司团队管理经验。曾负责过多个用户量过亿产品，具备全栈设计能力与深厚的技术功底。'
};

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: '雁巢集运 / gonest',
    period: '2024/11 – 至今',
    location: '深圳',
    title: '产品负责人',
    reportTo: 'CEO',
    teamSize: '核心产品团队',
    tasks: [
      '负责gonest/雁巢集运产品整体产品功能规划，产品设计及产品优化',
      '负责gonestbuy产品整体产品功能规划，产品设计'
    ],
    achievements: []
  },
  {
    id: '2',
    company: '招银网络科技 (招商银行子公司)',
    period: '2021/1 – 2023/10',
    location: '深圳',
    title: '对公（公司级面向客户业务）体验设计负责人',
    reportTo: '信息技术部首席体验架构师',
    teamSize: '50+',
    tasks: [
      '负责招商银行企业网银 app，企业网银 pc 版 ubank 的体验设计',
      '负责同业业务招赢通，招赢管家等产品的体验设计',
      '负责招行资金托管业务托管+和托管运营平台的体验设计',
      '负责招行国际跨境业务的体验设计'
    ],
    achievements: [
      '成功领导超过50人的体验设计团队',
      '支撑招商银行企业端全链路数字化转型'
    ]
  },
  {
    id: '3',
    company: '小赢科技 (NYSE: XYF)',
    period: '2018/10 – 2020/3',
    location: '深圳',
    title: '设计总监',
    reportTo: '公司联合创始人/VP',
    teamSize: '14+',
    tasks: [
      '负责小赢理财的产品交互设计',
      '负责创新型金融产品（分期商场，白鲸会员产品）的相关交互设计',
      '负责贷超产品整体策划设计'
    ],
    achievements: [
      '团队内部建立了良好的产品设计文化，帮团队在公司树立了良好的专业形象',
      '1 个多月时间完成 3 年内设计团队都未曾实施的核心产品设计改版',
      '推动多个重点项目的交互设计改版，质量与效率均为支撑部门之最'
    ]
  },
  {
    id: '4',
    company: '百度 (Nasdaq: BIDU)',
    period: '2017/12 – 2018/10',
    location: '深圳',
    title: '高级设计经理',
    reportTo: '国际业务部部门总监',
    teamSize: '20+',
    tasks: [
      '负责国际版输入法 facemoji 产品交互及设计（东南亚及欧美市场）',
      '负责硬件创新产品 alading(阿拉丁)项目的产品交互及设计（日本市场）',
      '负责海外网红 AR 广告平台 CAAD 的相关设计事务（全球市场）'
    ],
    achievements: []
  },
  {
    id: '5',
    company: '深圳英威诺科技有限公司',
    period: '2014/07 – 2016/3',
    location: '深圳',
    title: '平台事业部副总',
    reportTo: 'CTO',
    teamSize: '60+',
    tasks: [
      '审核公司产品体验设计的质量，重点项目的产品及交互',
      '兼管公司所有其他事业部的设计团队',
      '负责公司级平台产品部的搭建和平台产品小知的产品规划及需求管理',
      '参与规划 C 端主要战略产品的规划及战略决策'
    ],
    achievements: [
      '以设计总监身份入职，前 3 个月内帮公司接连成功拿下华为，联想等问题客户，助力公司获 B 轮 2 亿融资',
      '从 0 到 1 组建强而有力的设计团队，散落在各个业务线',
      '入职 6 个月左右获得晋升，管理 C 端产品部门的产品设计运营开发测试'
    ]
  },
  {
    id: '6',
    company: '腾讯科技 (MIG 移动互联网事业群)',
    period: '2009/04 – 2014/06',
    location: '深圳',
    title: '设计 Leader',
    reportTo: '设计总监',
    teamSize: '20+',
    tasks: [
      '管理 MIG 事业部唯一一个不归属于项目组的设计团队，涵盖门户 UI、运营设计、互动广告、产品交互、视频多媒体等',
      '主要服务产品：超级 QQ，手机 QQ，手机 QQ 浏览器，腾讯应用中心，腾讯游戏大厅，腾讯地图，腾讯安全管家'
    ],
    achievements: [
      '管理团队期间获年度 S 级优秀员工，支持的多个项目获得公司级最高荣誉奖项',
      '带领的团队在内部专业通道晋级通过率 100%',
      '首届 MIG 移动互联网事业群设计奥斯卡获创意大奖'
    ]
  },
  {
    id: '7',
    company: '好耶广告 (Allyes / Havas Digital)',
    period: '2006/07 – 2009/03',
    location: '深圳',
    title: '资深互动设计师 / 创意负责人',
    reportTo: '创意总监',
    teamSize: '核心设计组',
    tasks: [
      '负责雨燕 Swift、海马 3 等知名汽车品牌的数字营销视觉与交互设计',
      '主导大型互动专题网站的策划与执行',
      '探索前沿 Flash 交互技术在品牌营销中的应用'
    ],
    achievements: [
      '作品《雨燕 Swift 色彩营销网站》获得 2008 年莫比师国际广告节（Mobius Awards）一等奖',
      '荣获中国金印奖一等奖及全场大奖',
      '奠定了公司在汽车行业数字营销领域的领先地位'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: '招商银行企业网银',
    category: '金融科技 / B端产品',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    description: '负责招商银行公司级面向客户业务的整体体验设计升级，构建全链路数字化企业金融服务。',
    highlights: ['多端一致性体验', '复杂金融逻辑简化', '50+人团队协作']
  },
  {
    id: 'p2',
    title: 'Facemoji 国际版输入法',
    category: '工具 / 国际化',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop',
    description: '针对东南亚及欧美市场，负责百度国际化核心输入产品的交互设计，提升全球用户的输入效率。',
    highlights: ['全球化视野', '多语言适配', '社交化表情交互']
  },
  {
    id: 'p3',
    title: '腾讯超级 QQ',
    category: '社交 / 移动互联网',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop',
    description: '在腾讯 MIG 期间负责核心社交产品的功能迭代与运营设计，服务亿级移动互联网用户。',
    highlights: ['亿级流量产品', 'S级员工荣誉', '设计奥斯卡大奖']
  },
  {
    id: 'p4',
    title: '小赢理财',
    category: '互金 / 核心产品',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    description: '快速推动核心产品改版，解决积累三年的设计痛点，树立专业设计形象。',
    highlights: ['1个月极速改版', '体验闭环', '全栈设计思维']
  }
];

export const EDUCATION: Education = {
  period: '2002/09 - 2006/07',
  school: '华中科技大学',
  degree: '本科/学士学位',
  major: '计算机科学与技术',
  honors: ['2005校网站设计大赛第一名', '校二、三等奖学金', '系院优秀学生'],
  experience: [
    '大三通过自学FLASH及网站技术获得校网页设计大赛第一名',
    '大四上学期开办网络工作室，承接企业网站设计与制作'
  ]
};

export const AWARDS: Award[] = [
  { name: '中国金印奖一等奖、全场大奖', year: '2008', description: '雨燕 Swift 色彩营销网站' },
  { name: 'Mobius Adwards (莫比师国际广告节) 一等奖', year: '2008', description: '雨燕 Swift 色彩营销网站' },
  { name: '中国国际广告节金奖', year: '2008', description: '第十四届' },
  { name: '莫比师国际广告节二等奖', year: '2008', description: '海马 3 虚拟改装大赛' }
];
