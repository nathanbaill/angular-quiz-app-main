FROM node as builder

RUN npm install -g @angular/cli

COPY src/ /opt/workspace/src/
COPY *.json *.js /opt/workspace
WORKDIR /opt/workspace

RUN npm install && ng build

FROM httpd:alpine

COPY --from=builder /opt/workspace/dist/frontend/ /usr/local/apache2/htdocs/
