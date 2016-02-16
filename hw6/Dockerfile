FROM mongo:latest

RUN apt-get update && apt-get install -y python python-pip build-essential python-dev
RUN pip install pymongo
RUN curl -JL -o ~/validate.py https://university.mongodb.com/static/MongoDB_2016_M101P_January/handouts/validate.dcea5a51b377.py
RUN curl -JL -o ~/init.sh https://gist.github.com/Erliz/d07bcec644034017c6b0/raw/2909df9e85142ccdd56d78ad5a227cc92f74f453/init.sh && \
    chmod +x ~/init.sh

CMD ~/init.sh && python ~/validate.py
