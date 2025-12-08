# 羲梦科技 (Ximeng Tech) - 未来科技官网

## 项目简介
本项目是羲梦科技（Ximeng Tech）的官方网站前端代码库。网站展示了公司在人工智能、云引擎服务、智能营销、教育科技等领域的核心业务、解决方案及创新案例。

## 技术栈
- **核心框架**: React 19 + TypeScript
- **构建工具**: Vite
- **路由管理**: React Router DOM
- **样式**: Tailwind CSS (通过 CDN 或内联样式)
- **动画**: GSAP (GreenSock Animation Platform)

## 功能模块
1.  **首页 (Home)**
    - 沉浸式 Hero Banner
    - 核心价值展示 (Values)
    - 解决方案预览 (Solutions)
    - 合作伙伴 Logo 墙 (Partners) - *已优化为纯 Logo 展示，自适应布局*
2.  **核心业务 (Solutions)**
    - 实体产业（工业制造、教育科技）
    - 沉浸体验（文化旅游、云引擎服务）
    - 智能营销（全域 AI 营销、AI 硬件定制）
3.  **创新案例 (Cases)**
    - 响应式网格布局
    - 多维度筛选（工业制造、教育平台、AI 文旅、云引擎服务等）
    - 详情页展示 (Case Detail)
4.  **关于我们 (About/Join)**
    - 公司愿景
    - 招聘信息

## 最近更新
- **UI/UX 优化**:
    - 全面优化 Cases 页面响应式布局，适配移动端与桌面端。
    - 合作伙伴 Logo 墙升级为纯净模式，支持白底 Logo 自适应显示。
    - 导航栏菜单结构调整，移除冗余模块。
- **内容更新**:
    - 调整案例分类顺序，新增“AI 文旅”并优化排序逻辑。
    - 替换并优化所有案例展示图片。

## 开发指南

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

## 目录结构
```
src/
├── components/     # 可复用组件 (Navbar, Footer, CaseCard, etc.)
├── data/          # 静态数据文件 (cases.ts)
├── pages/         # 页面组件 (Home, Cases, Solutions, etc.)
├── public/        # 静态资源 (images, icons)
└── App.tsx        # 应用入口
```

## 部署
本项目支持通过 Vercel 或 Netlify 进行快速部署。

---
© 2025 羲梦科技 版权所有
