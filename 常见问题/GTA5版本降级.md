---
title: GTA5版本降级
description: 
published: false
date: 2024-10-20T10:45:23.541Z
tags: 
editor: markdown
dateCreated: 2023-11-30T09:31:10.210Z
---

前情提要：

> ⚠️⚠️⚠️由于2023年12月12日的脑瘫更新（1.68 version 3095），bmx已丧失拍地/日墙/壁走跳跃/正常跳跃高度等技巧，所以~~一定要将自己的版本降级到正常的版本（1.66 version 2845）~~
> 
> 此方法失效，Rockstar已修复，1.66版本不能进入线上版本，1.67可以进入，但也是残废的BMX（有自动跳跃BUG）

✅可联机可玩图，需要与联机的另一方处于在同一版本

❌制作器外挂会失效

# 降级步骤（steam）

⚠️记得先备份，以便随时切换

-   复制旧版本的GTA5.exe到游戏根目录（必须）
-   ~~复制旧版本的GTAVLanguageSelect.exe、GTAVLauncher.exe、PlayGTAV.exe到游戏根目录（非必须）~~
-   复制旧版本的update.rpf、update2.rpf到游戏根目录下的update文件夹（必须）

### 游戏根目录的路径参考

```plaintext
C:\game\steam\steamapps\common\Grand Theft Auto V
```

# 降级步骤（epic+rockstar）

⚠️记得先备份，以便随时切换

-   复制旧版本的GTA5.exe到游戏根目录（必须）
-   复制旧版本的update.rpf、update2.rpf到游戏根目录下的update文件夹（必须）
-   保留旧版本的PlayGTAV.exe，不要替换！不要替换！不要替换！
-   GTAVLanguageSelect.exe、GTAVLauncher.exe无须复制，因为epic没有这两个文件

### 游戏根目录的路径参考

```plaintext
C:\game\gta epic\GTAV
```

# 旧版本文件下载

## 网盘（适用于steam+epic+rockstar）

[百度云](https://pan.baidu.com/s/1OwR5UFWIDznOejBLKGkNBw?pwd=6666)

[阿里云盘](https://www.alipan.com/s/xDdML4EPSg9)（双击解压exe自释放压缩包）

[MEGA](https://mega.nz/file/nlFlkYwC#vMKFwkuFi8nJGMtXM36OP7JG5mK8y6PRFqw_ie1pGRw)

[谷歌云盘](https://drive.google.com/file/d/1JYsq-Vk41faEp0SjVS-_9ZFauuMcm34j/view?usp=sharing)

## steam的控制台（适用于steam）

⚠️对网盘不放心的，或者没有网盘会员导致限速的，可以选择使用steam自带的控制台输入命令下载

> 命令里的代码来源于[steamdb.info](https://steamdb.info/app/271590/depots/)

🔎详细步骤如下：

打开并登录steam  
windows窗口键+R弹出运行窗口，输入

```plaintext
steam://open/console
```

回到steam，点击上方新出来的"控制台"菜单，输入获取旧版本的GTA5.exe文件

```plaintext
download_depot 271590 271591 4691883233240915
```

再输入获取旧版本的update.rpf、update2.rpf文件

```plaintext
download_depot 271590 271594 5995224156303136417
```

上述步骤获取到的文件在下方参考路径里可以找到，然后复制到[游戏根目录](https://gta5bmx.me/zh/常见问题/GTA5版本降级#降级步骤steam)

```plaintext
C:\game\steam\steamapps\content
```

> 下载到需要的文件后，请立马退出steam再打开，不然你会额外下载高达50个G的dlc🤧