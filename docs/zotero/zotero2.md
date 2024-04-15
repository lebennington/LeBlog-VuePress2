---
title: Zotero 导出笔记
sidebarDepth: 3
search: true
tags:
  - Zotero
pageClass:
---

## 1. 通过 [zotero-integration](https://github.com/mgmeyers/obsidian-zotero-integration) 插件生成 obsidian 笔记

使用插件的优点：

- 自定义笔记模板（[[T-a-My Import Zotero Note|参考模板]]），方便排版；
- 自动在 obsidian 中存档 md 格式的文献阅读笔记。

### 1.1 操作

在 zotero 中对文献进行注释；
在 obsidian 中 `Ctrl+P` 打开命令菜单，运行在插件中定义好的命令；
搜索并选择需要生成笔记的文献，连按两次 `Enter`，即可生成模板样式的英文文献阅读笔记。
![image.png](https://article.biliimg.com/bfs/article/013fac0ef5d3ec0ff87d0d1585ac42c62f9bd19c.png)

参考资料：  
[obsidian-zotero-integration/docs/Templating.md at main · mgmeyers/obsidian-zotero-integration (github.com)](https://github.com/mgmeyers/obsidian-zotero-integration/blob/main/docs/Templating.md)  
[Obsidian 插件-Obsidian-Zotero-Integration - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/553864286)  
[Zotero Integration 插件说明 - 飞书云文档 (feishu.cn)](https://f8lfn9zs2l.feishu.cn/docx/doxcno0YluQMgtsNTj3SsaOr9Sd)  
[Nunjucks 中文文档 (bootcss.com)](https://nunjucks.bootcss.com/templating.html#for)

---

## 2. 手动从注释中添加笔记

主要功能：

1. 将笔记导入 word 文档，进一步形成文献汇报 PPT；
2. 直接在 obsidian 中存档 md 格式的文献阅读笔记；

### 2.0 基础设置

在 zotero 工具栏点击 `编辑>首选项`；

- zotero 6.0
  - 点击 `高级>高级设置：编辑器`
  - 点击 `I accept the risk!`（取消勾选复选框后，以后便可忽略此步骤）
- zotero 7.0
  - 点击 `高级`, 滑到最下点击 `编辑器 `

搜索 `extensions.zotero.annotations.noteTemplates.highlight`，并双击条目；  
粘贴[[T-从注释中添加笔记|模板]]内容，关闭所有对话框即完成基础设置。

### 2.1 生成笔记

在文献中做好注释后，按下图操作即可在 zotero 中直接形成自定义格式的笔记；  
![image.png](https://article.biliimg.com/bfs/article/d4ff5659809f72a5850f61b260f7d7e012d2aabe.png)  
右键单击文献条目，点击 `从注释中添加笔记`。  
![image.png](https://article.biliimg.com/bfs/article/5fb68768bc5c020aec332f744e3c8c62c365a7eb.png)  
条目下将自动生成笔记  
![image.png](https://article.biliimg.com/bfs/article/48198144401576641cb800bd26e2cfe8475feb19.png)  
点击笔记，右侧边栏将显示笔记内容  
如下图所示，在笔记编辑页面点击右上角三点，可选择 `显示/隐藏注释颜色/引注 `。

- 若 `显示注释颜色` ，复制粘贴笔记内容至 word 后，可保留注释颜色。
- 若 `显示注释引注` ，可通过后续操作在 md 文件中生成打开原文并定位注释的超链接（见 [[zotero导出笔记#2.3 在 obsidian 中存档|2.3]]）。
  ![image.png](https://article.biliimg.com/bfs/article/b9df5af26db618992f611ed8091e9a64a029bca8.png)

### 2.2 形成文献汇报 PPT

首先将笔记内容从 zotero 复制至 word 文档。

#### word 中进行的操作：

1. 清除所有文本的格式；
2. 按需求设置各级标题格式；

   > [!note] 注意
   > 正文需设置为三级标题，否则无法在 PPT 中正常显示。

3. 点击 `快速访问工具栏` 中的 `发送到 Microsoft PowerPoint` 图标： ![image.png](https://article.biliimg.com/bfs/article/84b77730bd80521b683817d614081d717b47b15b.png) （需要在 `文件>选项>快速访问工具栏` 中将该功能添加至 `自定义快速访问工具栏`）；

#### PPT 中进行的操作：

按喜好调整母版、排版、动画即可

> [!tip] PPT 使用窍门
> 若单页显示内容太多，可点击文本框，将鼠标移至右下角选择 `将文本拆分到两个幻灯片`  
> ![image.png](https://article.biliimg.com/bfs/article/6212cdfef3d1528d1c41a162461719bd9ff50af7.png)

### 2.3 在 obsidian 中存档

右键单击笔记，选择 `导出笔记`；  
![image.png](https://article.biliimg.com/bfs/article/9a7cfb7f97d5260b4790c4c321f22ccc781b848e.png)  
在弹出对话框中单击 `OK`（默认勾选的 `包括Zotero链接` 复选框可在 md 文件中生成打开原文并定位注释的链接）；  
![image.png](https://article.biliimg.com/bfs/article/0d95f3c2c5bf250f3193f4d7cfd4311a32411189.png)  
操作完成，接下来就可以将导出的 md 文件加入 obsidian 库进行存档。  
示例：[[zotero自带“导出笔记”示例]]

参考资料：  
[科研生产力：一个视频学会 zotero&Obsidian 模板设置.pdf - 飞书云文档 (feishu.cn)](https://f8lfn9zs2l.feishu.cn/file/boxcnuNLlu5dKnYcflCT6DwQHjf)  
[Nunjucks 中文文档 (bootcss.com)](https://nunjucks.bootcss.com/templating.html#for)

---

## 批注规定

在文献阅读时，需依照如下规定进行批注（可根据个人喜好自定义）：

- 黄色 `#ffd400` 及其他颜色 : 普通文本；
- 红色 `#ff6666` : 块引用形式的重要定义，并用链接标注定义的概念；
- 绿色 `#5fb236` : 说明重点的加粗文本，如方法等；
- 蓝色 `#2ea8e5` : 三级标题；
- 紫色 `#a28ae5` : 四级标题。

> [!note] 注意
> 在[[T-从注释中添加笔记|从注释中添加笔记的模板]]中，不能像[[T-a-My Import Zotero Note|插件模板]]一样设置成 `colorCategory == 'Blue'`，必须设置成 `color == '#2ea8e5'`
