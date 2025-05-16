# github无法访问的五种方式

GitHub 是一个面向开源及私有软件项目的托管平台，不管是行业大佬还是编程小白都可以在 GitHub 上交流学习，但是国内的 GitHub 访问被污染，导致无法正常访问。

本文通过 6 种方法解决 GitHub 访问被污染的问题。如果全部方法试用后仍然无法访问（概率极低），欢迎在下方评论，手把手帮你处理！

GitHub 的 DNS 污染问题通常表现为域名解析被劫持到错误的 IP 地址，导致无法正常访问。

浏览器报错如下：

**嗯… 无法访问此页面**

**github.com 响应时间太长**

![github.com 响应时间太长](./assets/image-By8lrPM5.png)

------

下面提供几个可行的方案共大家参考

## [**1.手动修改 Hosts 文件**](https://www.ermao.net/article/jddtxrrw/#_1-手动修改-hosts-文件)推荐

通过直接绑定 GitHub 域名的正确 IP 地址，绕过 DNS 解析污染。**步骤**：

1. **获取最新的 GitHub 域名 IP**：

   - 访问IPAddress.com

     查询以下域名的当前 IP：

     - `github.com`
     - `assets-cdn.github.com`
     - `github.global.ssl.fastly.net`
     - `api.github.com`
     - `raw.githubusercontent.com`

   - 或使用cmd命令查询(需安装`nslookup`或`dig`)

     ```
     nslookup github.com 8.8.8.8  # 使用 Google DNS 查询
     nslookup api.github.com 8.8.8.8 
     nslookup github.global.ssl.fastly.net 8.8.8.8  
     nslookup raw.githubusercontent.com 8.8.8.8
     ```

2. **修改 Hosts 文件**：

   - Windows

     - 文件路径：`C:\Windows\System32\drivers\etc\hosts`

     - 右键用管理员权限编辑，添加以下内容：

       ```
       # GitHub
       140.82.113.3    github.com
       185.199.108.153 assets-cdn.github.com
       199.232.69.194  github.global.ssl.fastly.net
       ```

   - macOS/Linux

     - 文件路径：`/etc/hosts`
     - 终端输入 `sudo nano /etc/hosts`，添加上述内容。

3. **刷新 DNS 缓存**：

   - Windows：`ipconfig /flushdns`
   - macOS/Linux：`sudo dscacheutil -flushcache` 或 `sudo systemd-resolve --flush-caches`

------

## [**2. 使用加密 DNS 服务**](https://www.ermao.net/article/jddtxrrw/#_2-使用加密-dns-服务)

通过加密 DNS（如 DNS-over-HTTPS 或 DNS-over-TLS）避免解析被劫持。
**推荐方案**：

- Cloudflare DNS

  ```
  1.1.1.1
  ```

  Google DNS

  ```
  8.8.8.8
  ```

  手动设置设备的 DNS 地址。

- DNSCrypt 或 DoH/DoT 工具

  - 使用 [AdGuard DNS](https://adguard-dns.io/)、[NextDNS](https://nextdns.io/) 等支持加密的 DNS 服务。

------

## [**3. 使用代理或 VPN(终极大杀器)**](https://www.ermao.net/article/jddtxrrw/#_3-使用代理或-vpn-终极大杀器)

通过代理或 VPN 完全绕过本地 DNS 污染。
**推荐工具**：

- **Clash**（支持规则分流，开源免费）
- **Shadowsocks/V2Ray**（需自建或购买节点）
- 商业 VPN（如 ExpressVPN、NordVPN）

相关内容：

- 📱 [clash for Android](https://www.ermao.net/article/eh8f4n86/)
- 🖥 [clash for Windows](https://www.ermao.net/article/0gematwc/)
- 🍎 [clash for iOS](https://www.ermao.net/article/z747kgjd/)

------

## [**4. 使用 GitHub 镜像站点**](https://www.ermao.net/article/jddtxrrw/#_4-使用-github-镜像站点)

访问 GitHub 的镜像服务，避开主域名污染。
**常用镜像**：

- [GitHub 加速下载](https://ghproxy.com/)
- [FastGit](https://hub.fastgit.org/)（已停用，可寻找替代）

------

## [**5. 验证 DNS 污染**](https://www.ermao.net/article/jddtxrrw/#_5-验证-dns-污染)

确认是否真的是 DNS 污染导致的问题：

1. 使用nslookup或dig查询域名：

   ```
   nslookup github.com 8.8.8.8  # 使用干净的 DNS 查询
   nslookup github.com          # 使用本地默认 DNS 查询
   ```

   - 若结果不一致，说明存在 DNS 污染。

------

## [**6. 清除本地 DNS 缓存**](https://www.ermao.net/article/jddtxrrw/#_6-清除本地-dns-缓存)

- Windows

  ```
  ipconfig /flushdns
  ```

- macOS

  ```
  sudo killall -HUP mDNSResponder
  ```

- Linux

  ```
  sudo systemctl restart nscd
  ```

## [**注意事项**](https://www.ermao.net/article/jddtxrrw/#注意事项)

1. **IP 地址可能变化**，需定期更新 Hosts 文件。
2. **优先使用 HTTPS**，避免中间人攻击。
3. 如果使用代理/VPN，确保节点未被 GitHub 封禁（如某些机场 IP 可能被限制）。

------

通过以上方法，可有效绕过 DNS 污染问题。若问题持续，可能是网络环境限制（如防火墙），需结合代理或 VPN 彻底解决。