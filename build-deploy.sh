#!/bin/bash

ng build --prod
ssh tdr@167.99.207.150 "rm -rf /usr/share/nginx/html/*"
scp -r ./dist/frontend/* tdr@167.99.207.150:/usr/share/nginx/html
