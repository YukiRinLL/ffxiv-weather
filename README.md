# [FFXIV Weather Lookup](https://YukiRinLL.github.io/ffxiv-weather/)

Weather forecast and lookup for Final Fantasy XIV.

# License

Source code of this project is licensed under the [MIT license](LICENSE.txt).

FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.

All FINAL FANTASY XIV contents and materials are copyrights of SQUARE ENIX, FINAL FANTASY XIV © 2010 - 2021 SQUARE ENIX CO., LTD. All Rights Reserved.





## 开发备注:
使用 Wrangler CLI 工具部署 Cloudflare

1.`npm install -g wrangler`

2.`wrangler config`填写token`t2SedN5n0WNnGFgMCrbP0HVfurPQi5rHcFvR2b4C`

3.检查[wrangler.toml](wrangler.toml)
```
name = "ffxiv-weather"
pages_build_output_dir = "./dist"
```
4.运行以下命令进行部署

`wrangler pages deploy --project-name=ffxiv-weather`
