# 🔧 访客地图故障排除指南 / Visitor Map Troubleshooting Guide

## ✅ 文件检查 / File Check

所有必需文件已创建：
- ✅ `assets/js/visitor-map.js` (8.6 KB)
- ✅ `assets/css/visitor-map.css` (5.3 KB)
- ✅ `_includes/enhancements-loader.html` (已更新)
- ✅ `visitor-map-test.html` (测试页面)

---

## 🧪 测试步骤 / Testing Steps

### 方法1: 使用测试页面
1. 打开 `visitor-map-test.html` 文件
2. 在浏览器中查看
3. 检查右下角是否显示访客地图
4. 查看页面上的控制台输出

### 方法2: 检查实际网站
1. 构建网站：
   ```bash
   bundle exec jekyll build
   bundle exec jekyll serve
   ```

2. 访问首页：
   ```
   http://localhost:4000/
   ```

3. 打开浏览器开发者工具 (F12)

4. 检查控制台输出，应该看到：
   ```
   Visitor map script loaded
   Visitor map: Initializing...
   Visitor map: Widget created
   ✅ Visitor map initialized
   ```

---

## 🔍 常见问题 / Common Issues

### 问题1: 访客地图不显示

**可能原因：**
- 不在首页
- JavaScript未加载
- CSS未加载
- 浏览器控制台有错误

**解决方法：**

1. **确认在首页**
   - 访客地图仅在首页显示
   - URL应该是 `/` 或 `/index.html`

2. **检查JavaScript加载**
   ```javascript
   // 在浏览器控制台输入
   console.log('Script loaded:', typeof initVisitorMap !== 'undefined');
   ```

3. **检查CSS加载**
   ```javascript
   // 在浏览器控制台输入
   const styles = document.querySelector('link[href*="visitor-map.css"]');
   console.log('CSS loaded:', styles !== null);
   ```

4. **手动初始化（测试用）**
   ```javascript
   // 在浏览器控制台输入
   const script = document.createElement('script');
   script.src = '/assets/js/visitor-map.js';
   document.body.appendChild(script);
   ```

---

### 问题2: 控制台显示错误

**错误: "Cannot read property 'appendChild' of null"**

**原因:** DOM未完全加载

**解决:**
```javascript
// 确保在DOMContentLoaded后执行
document.addEventListener('DOMContentLoaded', function() {
  // 初始化代码
});
```

---

**错误: "fetch is not defined"**

**原因:** 浏览器不支持fetch API

**解决:** 使用XMLHttpRequest替代或添加polyfill

---

**错误: "localStorage is not defined"**

**原因:** 浏览器禁用了localStorage

**解决:** 启用浏览器存储或使用内存存储

---

### 问题3: 地理位置显示"Loading..."

**可能原因：**
- API请求失败
- 网络连接问题
- CORS限制

**解决方法：**

1. **检查网络请求**
   - 打开开发者工具 → Network标签
   - 查找 `ipapi.co` 请求
   - 检查状态码（应该是200）

2. **测试API**
   ```javascript
   // 在浏览器控制台测试
   fetch('https://ipapi.co/json/')
     .then(res => res.json())
     .then(data => console.log('Location:', data))
     .catch(err => console.error('Error:', err));
   ```

3. **使用备用API**
   如果ipapi.co不可用，可以替换为：
   - `https://api.ipify.org?format=json`
   - `https://ipinfo.io/json`
   - `https://geolocation-db.com/json/`

---

### 问题4: 样式显示异常

**可能原因：**
- CSS未加载
- 样式冲突
- z-index问题

**解决方法：**

1. **检查CSS加载**
   ```javascript
   // 在浏览器控制台
   const widget = document.getElementById('visitor-map-widget');
   if (widget) {
     const styles = window.getComputedStyle(widget);
     console.log('Position:', styles.position);
     console.log('Z-index:', styles.zIndex);
     console.log('Display:', styles.display);
   }
   ```

2. **强制样式**
   ```javascript
   // 临时修复
   const widget = document.getElementById('visitor-map-widget');
   if (widget) {
     widget.style.cssText = `
       position: fixed !important;
       bottom: 20px !important;
       right: 20px !important;
       z-index: 9999 !important;
       display: block !important;
     `;
   }
   ```

---

## 🛠️ 调试工具 / Debug Tools

### 1. 检查小部件是否存在
```javascript
// 在浏览器控制台
const widget = document.getElementById('visitor-map-widget');
console.log('Widget exists:', widget !== null);
if (widget) {
  console.log('Widget HTML:', widget.outerHTML.substring(0, 200));
}
```

### 2. 检查统计数据
```javascript
// 在浏览器控制台
const stats = localStorage.getItem('visitorStats');
console.log('Stats:', JSON.parse(stats || '{}'));
```

### 3. 清除数据重新测试
```javascript
// 在浏览器控制台
localStorage.removeItem('visitorStats');
localStorage.removeItem('lastVisitDate');
console.log('Data cleared, refresh page to test');
```

### 4. 查看所有加载的脚本
```javascript
// 在浏览器控制台
const scripts = Array.from(document.querySelectorAll('script'));
scripts.forEach(s => {
  if (s.src.includes('visitor-map')) {
    console.log('Found visitor-map script:', s.src);
  }
});
```

---

## 📋 完整检查清单 / Complete Checklist

### 文件检查
- [ ] `assets/js/visitor-map.js` 存在
- [ ] `assets/css/visitor-map.css` 存在
- [ ] `_includes/enhancements-loader.html` 包含visitor-map引用
- [ ] `_includes/after-footer.html` 包含enhancements-loader

### 页面检查
- [ ] 访问的是首页 (`/` 或 `/index.html`)
- [ ] 页面完全加载
- [ ] 没有JavaScript错误

### 功能检查
- [ ] 小部件显示在右下角
- [ ] 统计数据正确显示
- [ ] 地理位置正确获取
- [ ] 可以折叠/展开
- [ ] 国家列表正确显示

### 浏览器检查
- [ ] JavaScript已启用
- [ ] localStorage已启用
- [ ] 网络连接正常
- [ ] 没有广告拦截器阻止

---

## 🔄 重新安装步骤 / Reinstall Steps

如果以上都不行，尝试重新安装：

1. **删除旧文件**
   ```bash
   rm assets/js/visitor-map.js
   rm assets/css/visitor-map.css
   ```

2. **清除缓存**
   ```bash
   bundle exec jekyll clean
   ```

3. **重新创建文件**
   - 从备份恢复或重新创建

4. **重新构建**
   ```bash
   bundle exec jekyll build
   ```

5. **清除浏览器缓存**
   - Ctrl+Shift+Delete
   - 清除缓存和Cookie
   - 硬刷新 (Ctrl+F5)

---

## 📞 获取帮助 / Get Help

### 收集诊断信息

运行以下命令并提供输出：

```bash
# 1. 检查文件
ls -la assets/js/visitor-map.js
ls -la assets/css/visitor-map.css

# 2. 检查内容
head -20 assets/js/visitor-map.js

# 3. 检查加载器
grep -n "visitor-map" _includes/enhancements-loader.html
```

### 浏览器信息

提供以下信息：
- 浏览器名称和版本
- 操作系统
- 控制台错误信息（完整）
- Network标签截图

---

## ✅ 成功标志 / Success Indicators

当访客地图正常工作时，你应该看到：

1. **视觉效果**
   - 右下角有紫色渐变的卡片
   - 显示3个统计数字
   - 有简单的地图可视化
   - 显示你的位置信息

2. **控制台输出**
   ```
   Visitor map script loaded
   Visitor map: Initializing...
   Visitor map: Widget created
   ✅ Visitor map initialized
   ```

3. **功能正常**
   - 点击折叠按钮可以收起/展开
   - 统计数字会增加
   - 地理位置正确显示
   - 国家列表显示访问数据

---

## 🎯 快速测试命令 / Quick Test Commands

在浏览器控制台依次运行：

```javascript
// 1. 检查脚本加载
console.log('Script loaded:', document.querySelector('script[src*="visitor-map"]') !== null);

// 2. 检查CSS加载
console.log('CSS loaded:', document.querySelector('link[href*="visitor-map"]') !== null);

// 3. 检查小部件
console.log('Widget exists:', document.getElementById('visitor-map-widget') !== null);

// 4. 检查位置
const widget = document.getElementById('visitor-map-widget');
if (widget) {
  const rect = widget.getBoundingClientRect();
  console.log('Widget position:', {
    bottom: window.innerHeight - rect.bottom,
    right: window.innerWidth - rect.right,
    visible: rect.bottom > 0 && rect.right > 0
  });
}

// 5. 检查数据
console.log('Stats:', localStorage.getItem('visitorStats'));
```

---

**最后更新:** 2026-03-12
**状态:** 已部署
**测试:** 待验证

如果问题仍然存在，请提供：
1. 浏览器控制台完整输出
2. Network标签截图
3. 访问的具体URL
4. 浏览器和操作系统信息
