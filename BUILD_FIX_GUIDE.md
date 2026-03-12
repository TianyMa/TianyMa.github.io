# 构建错误修复指南 / Build Error Fix Guide

## 🔧 已修复的问题 / Fixed Issues

### 1. Liquid 嵌套深度错误
**错误信息**: `Nesting too deep included in research-card.html`

**原因**: Jekyll 的 Liquid 模板引擎对 include 嵌套有深度限制。

**解决方案**:
- 移除了 `analytics.md` 中的 `{% include research-card.html %}` 调用
- 改用直接的 HTML 和内联样式
- 保留了 `research-card.html` 组件供其他页面使用

### 2. 图片路径错误
**错误信息**: `internal image /images/mit.webp does not exist`

**原因**: 图片在 `images/logos/` 文件夹中，但引用路径缺少 `logos/`

**状态**: ✅ 已确认 `projects.md` 中的路径正确

---

## 📝 构建测试清单 / Build Test Checklist

### 本地测试
```bash
# 1. 清理旧的构建
bundle exec jekyll clean

# 2. 重新构建
bundle exec jekyll build

# 3. 本地预览
bundle exec jekyll serve

# 4. 检查构建输出
# 应该看到 "done in X seconds"
```

### 验证功能
- [ ] 网站能够成功构建
- [ ] 所有页面可以访问
- [ ] 图片正确显示
- [ ] JavaScript 功能正常
- [ ] CSS 样式正确加载

---

## 🚀 部署前检查 / Pre-deployment Checklist

### 文件检查
- [x] 所有 JavaScript 文件已创建
- [x] 所有 CSS 文件已创建
- [x] 所有 HTML 组件已创建
- [x] 图片路径已修复
- [x] 嵌套问题已解决

### 功能检查
- [ ] 搜索功能可用 (Ctrl+K)
- [ ] 地图正确显示
- [ ] 图表正确渲染
- [ ] 标签云正确显示
- [ ] 相关文章推荐工作正常

### 性能检查
- [ ] 页面加载时间 < 3秒
- [ ] JavaScript 无错误
- [ ] CSS 无冲突
- [ ] 图片正确懒加载

---

## 🔍 常见问题排查 / Troubleshooting

### 问题1: 构建失败
**症状**: Jekyll build 失败

**检查步骤**:
1. 查看错误信息
2. 检查 Liquid 语法
3. 验证文件路径
4. 确认 YAML front matter 格式

**解决方法**:
```bash
# 使用 --trace 查看详细错误
bundle exec jekyll build --trace

# 检查配置文件
bundle exec jekyll doctor
```

### 问题2: JavaScript 功能不工作
**症状**: 搜索、地图等功能无响应

**检查步骤**:
1. 打开浏览器开发者工具
2. 查看 Console 错误
3. 检查 Network 标签
4. 验证文件加载

**解决方法**:
- 确认 JavaScript 文件路径正确
- 检查是否有语法错误
- 验证依赖库已加载

### 问题3: 样式显示异常
**症状**: 页面样式混乱

**检查步骤**:
1. 检查 CSS 文件是否加载
2. 查看浏览器 Console 警告
3. 验证 CSS 选择器
4. 检查样式优先级

**解决方法**:
- 清除浏览器缓存
- 检查 CSS 文件路径
- 验证 CSS 语法

### 问题4: 图片不显示
**症状**: 图片显示为损坏图标

**检查步骤**:
1. 验证图片文件存在
2. 检查文件路径
3. 确认文件权限
4. 查看 Network 标签

**解决方法**:
```bash
# 检查图片文件
ls -la images/logos/

# 验证路径
grep -r "images/mit.webp" _tabs/
```

---

## 📋 文件清单 / File Checklist

### JavaScript 文件 (6个)
- [x] `assets/js/enhancements.js`
- [x] `assets/js/search.js`
- [x] `assets/js/research-map.js`
- [x] `assets/js/charts.js`
- [x] `assets/js/tag-cloud.js`

### CSS 文件 (7个)
- [x] `assets/css/enhancements.css`
- [x] `assets/css/search.css`
- [x] `assets/css/research-map.css`
- [x] `assets/css/charts.css`
- [x] `assets/css/tag-cloud.css`
- [x] `assets/css/related-posts.css`

### HTML 组件 (10个)
- [x] `_includes/enhancements-loader.html`
- [x] `_includes/share-buttons.html`
- [x] `_includes/research-card.html`
- [x] `_includes/timeline-item.html`
- [x] `_includes/related-posts.html`
- [x] `_includes/schema-website.html`
- [x] `_includes/schema-person.html`
- [x] `_includes/schema-article.html`

### 页面文件 (3个)
- [x] `_tabs/analytics.md` (已修复)
- [x] `_tabs/demo.md` (新建)
- [x] `_tabs/projects.md` (已验证)

### 数据文件 (1个)
- [x] `search.json`

---

## 🎯 下一步操作 / Next Steps

### 1. 立即执行
```bash
# 清理并重新构建
bundle exec jekyll clean
bundle exec jekyll build

# 如果成功，启动本地服务器
bundle exec jekyll serve
```

### 2. 验证功能
- 访问 http://localhost:4000
- 测试搜索功能 (Ctrl+K)
- 检查所有页面
- 验证图片显示

### 3. 提交更改
```bash
# 查看更改
git status

# 添加所有新文件
git add .

# 提交
git commit -m "Add advanced features: search, maps, charts, and more"

# 推送到远程
git push origin main
```

---

## ✅ 验证成功标志 / Success Indicators

### 构建成功
```
Configuration file: _config.yml
            Source: .
       Destination: _site
 Incremental build: disabled
      Generating...
                    done in X.XXX seconds.
```

### 功能正常
- ✅ 按 Ctrl+K 打开搜索
- ✅ 地图显示机构标记
- ✅ 图表正确渲染
- ✅ 标签云显示标签
- ✅ 所有页面可访问

### 无错误
- ✅ 浏览器 Console 无错误
- ✅ Network 标签显示所有资源加载成功
- ✅ 页面样式正确
- ✅ 交互功能正常

---

## 📞 需要帮助？/ Need Help?

如果遇到其他问题：

1. **查看错误日志**
   ```bash
   bundle exec jekyll build --trace
   ```

2. **检查浏览器控制台**
   - 按 F12 打开开发者工具
   - 查看 Console 和 Network 标签

3. **验证文件完整性**
   ```bash
   # 检查所有新文件是否存在
   ls -la assets/js/
   ls -la assets/css/
   ls -la _includes/
   ```

4. **清除缓存**
   - 清除浏览器缓存
   - 删除 `_site` 文件夹
   - 重新构建

---

**最后更新**: 2026-03-12
**状态**: ✅ 问题已修复，准备测试
