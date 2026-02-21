# Deploy Whitepaper Factory minisite to VPS (lindenhaeghe.troycollins.nl)

## 1. DNS (do this first)

In the DNS for **troycollins.nl**, add a record for the subdomain:

| Type | Name       | Value        | TTL  |
|------|------------|--------------|------|
| A    | lindenhaeghe | **YOUR_VPS_IP** | 300  |

Or if you use a CNAME to a hostname that already points to the VPS:

| Type  | Name       | Value (e.g. `vps.troycollins.nl`) | TTL  |
|-------|------------|-------------------------------------|------|
| CNAME | lindenhaeghe | your-vps-hostname                   | 300  |

Replace **YOUR_VPS_IP** with the public IP of your VPS.

---

## 2. On the VPS (SSH in)

### Install Node.js 18+ (if not already)

```bash
# Example on Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Clone and build the app

```bash
cd /var/www   # or wherever you keep sites
sudo mkdir -p /var/www
sudo chown $USER:$USER /var/www
cd /var/www

git clone https://github.com/DigitalScientist-xyz/lindenhaeghe.git
cd lindenhaeghe

npm ci
npm run build
```

### Run with PM2 (recommended)

```bash
sudo npm install -g pm2
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup   # follow the command it prints to enable on boot
```

Or without the config file: `pm2 start npm --name "lindenhaeghe" -- start`

The app will listen on **port 3000** by default.

### Or run without PM2 (foreground)

```bash
npm start
```

---

## 3. Nginx reverse proxy (subdomain → app)

Install Nginx if needed:

```bash
sudo apt update
sudo apt install nginx -y
```

Create a site config:

```bash
sudo nano /etc/nginx/sites-available/lindenhaeghe.troycollins.nl
```

Paste (replace `YOUR_VPS_IP` if you use it in `server_name`):

```nginx
server {
    listen 80;
    server_name lindenhaeghe.troycollins.nl;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site and reload Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/lindenhaeghe.troycollins.nl /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 4. HTTPS with Let’s Encrypt (recommended)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d lindenhaeghe.troycollins.nl
```

Follow the prompts. Certbot will add SSL and auto-renew.

---

## 5. Updating the site later

```bash
cd /var/www/lindenhaeghe
git pull
npm ci
npm run build
pm2 restart lindenhaeghe   # or: pm2 restart ecosystem.config.cjs
```

---

## Checklist

- [ ] DNS: `lindenhaeghe.troycollins.nl` → VPS IP (or CNAME)
- [ ] VPS: Node 18+, clone repo, `npm ci && npm run build`
- [ ] PM2: `pm2 start npm --name "lindenhaeghe" -- start` and `pm2 save` / `pm2 startup`
- [ ] Nginx: config for `lindenhaeghe.troycollins.nl` → `http://127.0.0.1:3000`, enable and reload
- [ ] HTTPS: `certbot --nginx -d lindenhaeghe.troycollins.nl`

After DNS propagates (a few minutes), open **https://lindenhaeghe.troycollins.nl** in a browser.
