export interface CourseFeature {
  title: string;
  description: string;
}

export interface ScheduleItem {
  week: string;
  date: string;
  subject: string;
  topic: string;
  teacher: string;
}

export interface ContactInfo {
  location: string;
  time: string;
  price: string;
  registration: string;
}

export interface FlyerData {
  brandText: string;
  mainTitle: string;
  introText: string;
  features: CourseFeature[];
  scheduleTitle: string;
  scheduleItems: ScheduleItem[];
  promoText: string;
  contactInfo: ContactInfo;
  qrUrl: string;
  qrLabel: string;
  qrUrl2?: string;
  qrLabel2?: string;
  footerNotes: string;
  theme: 'classic' | 'minimalist' | 'bento' | 'accent' | 'friendly' | 'brutalist' | 'elegant' | 'tech';
}

export const defaultFlyerData: FlyerData = {
  brandText: "DANLU EDUCATION CENTER",
  mainTitle: "2026 典陸教育會考數理「精熟 A⁺」考前搶分班",
  introText: "為何這三個月是孩子翻轉成績的最後機會？會考倒數快破百，孩子面臨的不僅是知識儲備的厚度，更是「應考心理韌性」與「精準解題效率」的全面考驗。數理兩科，往往是決定能否跨入 A⁺⁺ 門檻的決勝關鍵。\n\n許多孩子努力了三年，卻在最後關頭因複雜的幾何圖形或冗長的素養題組而感到挫折。搶分班並非單純的課業複習，而是一場高效率的考前衝刺。我們透過大數據精準篩選核心考區，並由四大名師親授考場「秒殺技巧」，目標是在最後階段協助孩子「拒絕無效努力，專注必考重點」。確保孩子能以最容信的姿態，穩守數理拿 A、衝刺 A⁺⁺，贏得理想志願的入場券！",
  features: [
    { title: "鎖定 A 保底分", description: "系統梳理 80% 高頻考點\n確保基礎題「零失分」" },
    { title: "數理 A⁺⁺ 關鍵分", description: "突破幾何、素養難題\n教導看穿命題陷阱" },
    { title: "建立考前答題手感", description: "2 小時高強度訓練\n將解題流程轉化為直覺" }
  ],
  scheduleTitle: "會考數理「精熟 A⁺」考前搶分班上課週次與主題安排",
  scheduleItems: [
    { week: "第一週", date: "01/25", subject: "數學", topic: "幾何 I：圓形性質、空間幾何與三視圖", teacher: "Allen 老師" },
    { week: "第二週", date: "02/08", subject: "理化", topic: "物質世界、力與運動：會考必出計算題解析", teacher: "傳益老師" },
    { week: "第三週", date: "03/01", subject: "數學", topic: "線型函數、等差數列與級數的應用實戰", teacher: "志豪老師" }
  ],
  promoText: "⭐ 享 0 元上課，免費參加！（只要目前在典陸上任一科目，即具備報名資格）",
  contactInfo: {
    location: "《台南站前旗艦校》台南市中西區北門路一段 171 號",
    time: "01/25-05/10，週日 18:30-20:30",
    price: "定價 $9,900",
    registration: "掃描右方表單線上填表報名"
  },
  qrUrl: "https://danlu.com.tw",
  qrLabel: "線上報名表單",
  qrUrl2: "",
  qrLabel2: "",
  footerNotes: "上方主題為預排內容，實際請依現場授課老師課程內容為主。 | 典陸教育集團《台南站前旗艦校》 06-2355666",
  theme: 'classic'
};
