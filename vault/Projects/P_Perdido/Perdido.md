---
type: Server
periods:
  - 2021-now
role:
  - Lead
link: https://github.com/GregRos/perdido
---
Perdido is a personal media and gaming server. It hosts around 20 or so different services and game servers. It’s written in #bash, #python, and #fish.

![[Achievements|clean no-title]]

It’s partially containerized.
# Location
Right now, Perdido is a dedicated server, specifically HP DL320e Gen8 v2. I set it up using the HP iLO remote management interface and I administer it mainly through SSH.

My hosting provider is [NFOrce](https://www.nforce.com/). I’ve also used [Hetzner](https://www.hetzner.com) in the past.
# Scripts
I keep the server as a set of deployment scripts on a public GitHub repository. These deployment scripts are very convenient, as I’ve had to move hosting providers more than once due to various issues.
# Services
Perdido is home to a huge collection of services, and each one is deployed using a script.
- [SSL Certificates](https://github.com/GregRos/perdido/blob/master/setup.d/20.certs.bash) via LetsEncrypt
- [nginx](https://github.com/GregRos/perdido/blob/master/setup.d/23.nginx.bash)
- [vsftpd](https://github.com/GregRos/perdido/blob/master/setup.d/50.ftp.bash) for encrypted FTP
- [smb](https://github.com/GregRos/perdido/blob/master/setup.d/52.samba.bash) 
- [restic](https://github.com/GregRos/perdido/blob/master/setup.d/75.restic.bash) for backups
- [fail2ban](https://github.com/GregRos/perdido/tree/master/config/fail2ban/jail.d) for security
# Components
Perdido contains some custom tools for administration and other purposes.
## [Sweeper](https://github.com/GregRos/sweeper)
A CLI tool for classifying and sorting media files, #python.
## [delete-media](https://github.com/GregRos/perdido/blob/master/delete-media/run.py)
A CLI tool for deleting hardlinks across multiple folders, #python.
## [pd-shortcuts](https://github.com/GregRos/perdido/blob/master/shell/pd-tools.fish)
Shorthand for common server administration tasks,, written in #fish.