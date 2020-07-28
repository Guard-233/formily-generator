<!-- @format -->

# Formily 可视化 schema 编辑器

![preview](/public/markdown/preview.png)

### 预览

可以直接点击[本链接](https://guard-233.github.io/formily-generator/)在线使用

### clone 并使用

```bash
git clone https://github.com/Guard-233/formily-generator.git
cd ./formily-generator
yarn start
```

**注意，使用本工具之前，最好先了解[Formily](https://formilyjs.org)的使用方式**

### 界面说明

#### 左侧

左侧主要是可拖动的组件，分为基础组件，布局组件，数组组件

在此主要说明布局组件与数组组件的使用方式

##### 布局组件

所有的布局组件除了 pureObject 之外均为样式组件，如果想让数据结构与样式同意，则需要给布局组件内部嵌套一层 pureObject。

**pureObject 存在**

![preview](/public/markdown/pureObj.png)
![preview](/public/markdown/pureObj-p.png)

**pureObject 不存在**

![preview](/public/markdown/formCard.png)
![preview](/public/markdown/formCard-p.png)

##### 数组组件

数组组件目前有两种 ArrayCard 与 ArrayTable

**注意，因数组的 items 属性是 ISchema | ISchema[] 所以具体的组件需要拖放在内部的对象中，而不是数组本身**

因表格组件的拖拽显示不太直观，所以数组组件在拖拽区域如下图所示

![preview](/public/markdown/array.png)

而最终预览的形态，则以表格的形式正常显示

![preview](/public/markdown/array-p.png)

#### 中部

中部区域为组件可拖放的区域，需要注意的是，中部区域的组件预览效果与最终效果有出入，请以点击预览按钮后的页面为准

#### 右侧

点击中部区域的任意一个以拖放的组件，都可以在右侧进行相应的属性编辑，具体可编辑的属性，可以看[Formily](https://formilyjs.org)的官方文档
