FROM quay.io/ukhomeofficedigital/openjdk8:v1.0.0

ENV PTTG_API_ENDPOINT localhost
ENV USER pttg
ENV GROUP pttg
ENV NAME pttg-income-proving-ui

ARG JAR_PATH
ARG VERSION

WORKDIR /app

RUN groupadd -r ${GROUP} && \
    useradd -r -g ${USER} ${GROUP} -d /app && \
    mkdir -p /app && \
    chown -R ${USER}:${GROUP} /app

COPY package.json /app/package.json
COPY bower.json /app/bower.json

COPY ${JAR_PATH}/${NAME}-${VERSION}.jar /app
COPY run.sh /app

RUN chmod a+x /app/run.sh

EXPOSE 8000

ENTRYPOINT /app/run.sh
