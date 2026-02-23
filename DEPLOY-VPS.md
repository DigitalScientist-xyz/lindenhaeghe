# Deploy Whitepaper Factory minisite to VPS (lindenhaeghe.troycollins.nl)

---

## Step-by-step (do in order)

Your VPS already has **port 3000** (portfolio), **3003**, **3004** in use. This app will use **port 3010** (free).

### Step 1 – Clone the repo (from `/var/www`)

If the repo is **private**, create a GitHub Personal Access Token (Settings → Developer settings → Personal access tokens, scope `repo`), then run (replace `YOUR_TOKEN` with the token):

```bash
cd /var/www
git clone https://YOUR_TOKEN@github.com/DigitalScientist-xyz/lindenhaeghe.git
cd lindenhaeghe
```

If the repo is **public**, you can use:

```bash
cd /var/www
git clone https://github.com/DigitalScientist-xyz/lindenhaeghe.git
cd lindenhaeghe
```

### Step 2 – Install deps and build

```bash
npm ci
npm run build
```

### Step 3 – Start the app with PM2 (port 3010)

```bash
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

(Run the command that `pm2 startup` prints so it starts on reboot.)

### Step 4 – Nginx config for lindenhaeghe.troycollins.nl

```bash
sudo nano /etc/nginx/sites-available/lindenhaeghe.troycollins.nl
```

Paste this (app is on port 3010):

```nginx
server {
    listen 80;
    server_name lindenhaeghe.troycollins.nl;
    location / {
        proxy_pass http://127.0.0.1:3010;
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

Save (Ctrl+O, Enter, Ctrl+X), then:

```bash
sudo ln -s /etc/nginx/sites-available/lindenhaeghe.troycollins.nl /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Step 5 – HTTPS (optional)

```bash
sudo certbot --nginx -d lindenhaeghe.troycollins.nl
```

### Step 6 – DNS

In your DNS for **troycollins.nl**, add an **A** record: name **lindenhaeghe**, value = your VPS IP. Wait a few minutes, then open **https://lindenhaeghe.troycollins.nl**.

---

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

GitHub no longer accepts account passwords. Use one of these:

**Option A – Repo is public:** clone with HTTPS (no login needed):

```bash
cd /var/www
git clone https://github.com/DigitalScientist-xyz/lindenhaeghe.git
cd lindenhaeghe
```

**Option B – Repo is private, use a Personal Access Token (PAT):**

1. On GitHub: **Settings → Developer settings → Personal access tokens → Tokens (classic)**. Generate a token with `repo` scope.
2. On the VPS, clone using the token (replace `YOUR_GITHUB_TOKEN` with the token):

```bash
cd /var/www
git clone https://YOUR_GITHUB_TOKEN@github.com/DigitalScientist-xyz/lindenhaeghe.git
cd lindenhaeghe
```

**Option C – Repo is private, use SSH:** add the VPS SSH key to your GitHub account, then:

```bash
cd /var/www
git clone git@github.com:DigitalScientist-xyz/lindenhaeghe.git
cd lindenhaeghe
```

Then install and build:

```bash
npm ci
npm run build
```

### Pick a free port

With multiple sites, 3000/3001 may already be in use. Check what’s listening:

```bash
ss -tlnp | grep LISTEN
# or: netstat -tlnp | grep LISTEN
```

Pick a free port (e.g. **3010**, 3020, 3030, 3847). The app defaults to **3010** in `ecosystem.config.cjs`. To use another port:

1. Edit `ecosystem.config.cjs`: set `PORT: "3020"` (or your choice) in the `env` object.
2. In the Nginx config below, use the same port in `proxy_pass` (e.g. `http://127.0.0.1:3020;`).

### Run with PM2 (recommended)

```bash
sudo npm install -g pm2
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup   # follow the command it prints to enable on boot
```

Or with a one-off port: `PORT=3020 pm2 start npm --name "lindenhaeghe" -- start`

### Or run without PM2 (foreground)

```bash
PORT=3010 npm start
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

Paste. Use the **same port** you set for this app (default 3010):

```nginx
server {
    listen 80;
    server_name lindenhaeghe.troycollins.nl;
    location / {
        proxy_pass http://127.0.0.1:3010;
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
- [ ] Nginx: config for `lindenhaeghe.troycollins.nl` → `http://127.0.0.1:YOUR_PORT` (e.g. 3010), enable and reload
- [ ] HTTPS: `certbot --nginx -d lindenhaeghe.troycollins.nl`

After DNS propagates (a few minutes), open **https://lindenhaeghe.troycollins.nl** in a browser.
