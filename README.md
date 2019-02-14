# nginx部署

1.本地npm run build
2.ftp把本地文件.nuxt,nuxt.config.js package.json传到server
3.在server端的文件夹内，npm i --production
4.npm start
5.nginx设置监听npm start
    upstream nodenuxt {
        server 127.0.0.1:3000; #nuxt项目 监听端口
        keepalive 64;
    }
    server {
        listen 80;
        server_name localhost;
        location / {
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;  
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Nginx-Proxy true;
            proxy_cache_bypass $http_upgrade;
            proxy_pass http://nodenuxt; #反向代理
        }
    }