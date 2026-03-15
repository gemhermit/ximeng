# 羲梦科技 (Ximeng Tech) - 未来科技官网

## 项目简介
本项目是羲梦科技（Ximeng Tech）的官方网站前端代码库。网站展示了公司在人工智能、云引擎服务、智能营销、教育科技等领域的核心业务、解决方案及创新案例。

## 技术栈
- **核心框架**: React 19 + TypeScript
- **构建工具**: Vite 6
- **路由管理**: React Router DOM 6
- **样式**: Tailwind CSS 3
- **动画**: GSAP (GreenSock Animation Platform)
- **包管理**: pnpm

## 功能模块
1.  **首页 (Home)**
    - 沉浸式 Hero Banner
    - 核心价值展示 (Values)
    - 解决方案预览 (Solutions)
    - 合作伙伴 Logo 墙 (Partners)
2.  **核心业务 (Solutions)**
    - 实体产业（工业制造、教育科技）
    - 沉浸体验（文化旅游、云引擎服务）
    - 智能营销（全域 AI 营销、AI 硬件定制）
3.  **创新案例 (Cases)**
    - 响应式网格布局
    - 多维度筛选
    - 详情页展示 (Case Detail)
4.  **关于我们 (About/Join)**
    - 公司愿景
    - 招聘信息
5.  **其他页面**
    - 联系我们、隐私政策、服务条款、网站地图

## 最近更新
- **代码优化**:
    - 所有相对路径导入改为绝对路径 (`@/` 别名)
    - App.tsx 使用绝对路径导入组件
- **SEO 优化**:
    - 添加完整的 meta 标签 (description, keywords)
    - 添加 Open Graph 和 Twitter Card
    - 设置 canonical URL
- **UI/UX 优化**:
    - Cases 页面响应式布局优化
    - 合作伙伴 Logo 墙升级为纯净模式

## 开发指南

### 安装依赖
```bash
pnpm install
```

### 启动开发服务器
```bash
pnpm dev
```

### 构建生产版本
```bash
pnpm build
```

### 预览生产版本
```bash
pnpm preview
```

## 目录结构
```
src/
├── components/     # 可复用组件
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── PageHeader.tsx
│   ├── TiltCard.tsx
│   └── ...
├── data/          # 静态数据
│   ├── cases.ts
│   └── jobs.ts
├── pages/         # 页面组件
│   ├── Cases.tsx
│   ├── CaseDetail.tsx
│   ├── Solutions.tsx
│   ├── Careers.tsx
│   ├── Contact.tsx
│   └── ...
├── App.tsx        # 应用入口
└── index.tsx     # 渲染入口
```

## 部署
本项目支持通过 Vercel、Netlify 或任意静态托管服务部署。

---
© 2025 羲梦科技 版权所有
