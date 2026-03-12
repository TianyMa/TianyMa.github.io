# 快速参考指南 / Quick Reference Guide

## 新建文章 / Creating New Posts

### 1. 文件命名 / File Naming
```
_posts/YYYY-MM-DD-descriptive-title.md
```

### 2. Front Matter 模板 / Front Matter Template
```yaml
---
title: 文章标题
date: 2024-01-01 12:00:00 +0000
author_id:
  - name: Tianyi MA
    github: TSdreamer
    url: tsdreamer.github.io
categories: [PhD Life]
tags: [weekly updates, research]
pin: false
math: false
mermaid: false
image:
  path: /images/2024/your-image.jpg
  alt: 图片描述
---
```

### 3. 图片使用 / Using Images

#### 存放位置 / Storage Location
- 2024年图片 → `images/2024/`
- 2025年图片 → `images/2025/`
- 项目图片 → `images/UCL-2024/`
- Logo图片 → `images/logos/`

#### 图片命名规范 / Image Naming Convention
**重要：所有图片必须使用描述性的英文名称**

**命名原则：**
- ✅ 使用小写字母
- ✅ 使用连字符(-)分隔单词
- ✅ 使用描述性名称，避免数字或日期
- ✅ 包含图片类型或用途的前缀

**命名示例：**
```
✅ 好的命名 / Good:
- week10-progress-screenshot.png
- machine-learning-architecture.png
- ucl-campus-photo.jpg
- pemwe-system-configuration-schematic.png
- germany-conference-photo.jpg

❌ 避免的命名 / Avoid:
- 04th.png
- 08.04.2024.png
- 1.png
- screenshot2.png
- IMG_1234.jpg
```

**常用前缀 / Common Prefixes:**
- `week##-` - 周进度截图
- `pemwe-` - PEMWE相关图表
- `mes-` - 多电化学储能系统
- `energy-system-` - 能源系统图表
- `ucl-` - UCL相关照片
- `profile-` - 个人照片
- `conference-` - 会议相关

#### 引用方式 / Reference Format
```markdown
![描述文字](/images/2024/descriptive-filename.jpg)
![描述文字](/images/2024/descriptive-filename.jpg){: width="972" height="589"}
```

## 常用分类和标签 / Common Categories & Tags

### 分类 / Categories
- `[PhD Life]` - 博士生活
- `[Homelab]` - 个人实验室
- `[Lab]` - 实验室工作
- `[Research]` - 研究相关

### 标签 / Tags
- `weekly updates` - 每周更新
- `DMEEA` - 项目代号
- `introduction` - 介绍性文章
- `research` - 研究
- `optimization` - 优化
- `energy storage` - 储能

## 草稿管理 / Draft Management

### 创建草稿 / Create Draft
1. 在 `_drafts/` 文件夹创建文件
2. 文件名不需要日期：`descriptive-title.md`
3. 添加 front matter（可以不包含 date）

### 发布草稿 / Publish Draft
1. 移动文件到 `_posts/`
2. 重命名添加日期：`YYYY-MM-DD-descriptive-title.md`
3. 确保 front matter 包含正确的日期

## 本地预览 / Local Preview

```bash
# 安装依赖
bundle install

# 启动本地服务器
bundle exec jekyll serve

# 包含草稿预览
bundle exec jekyll serve --drafts

# 访问
http://localhost:4000
```

## 文件结构速查 / Directory Quick Reference

```
TianyMa.github.io/
├── _posts/          # 已发布文章
├── _drafts/         # 草稿文章
├── _tabs/           # 导航页面
├── images/          # 图片资源
│   ├── 2024/       # 2024年图片
│   ├── 2025/       # 2025年图片
│   ├── UCL-2024/   # UCL项目图片
│   └── logos/      # Logo文件
├── _config.yml      # 网站配置
└── assets/          # 主题资源
```

## 常见问题 / Common Issues

### 图片不显示 / Images Not Showing
- ✅ 检查路径是否以 `/` 开头
- ✅ 确认文件名大小写正确
- ✅ 验证图片文件确实存在

### 文章不显示 / Post Not Showing
- ✅ 检查文件名格式：`YYYY-MM-DD-title.md`
- ✅ 确认 front matter 格式正确
- ✅ 检查日期不是未来日期

### 格式错误 / Format Errors
- ✅ YAML front matter 必须以 `---` 开始和结束
- ✅ 缩进使用空格，不要用 Tab
- ✅ 字符串包含特殊字符时使用引号

## 有用的命令 / Useful Commands

```bash
# 查看所有文章
ls -la _posts/

# 查看图片结构
tree images/

# 搜索特定内容
grep -r "关键词" _posts/

# 检查 Jekyll 配置
bundle exec jekyll doctor

# 清理缓存
bundle exec jekyll clean
```

## 更多信息 / More Information

- 详细结构说明：查看 `STRUCTURE.md`
- 优化总结：查看 `OPTIMIZATION_SUMMARY.md`
- Jekyll 文档：https://jekyllrb.com/docs/
- Chirpy 主题：https://github.com/cotes2020/jekyll-theme-chirpy

---

**最后更新 / Last Updated:** 2026-03-12
