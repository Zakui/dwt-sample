# syntax=docker/dockerfile:1
FROM ruby:2.6.3-slim-buster
RUN apt-get update -qq && apt-get install -y libxrender1 curl && \
curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
apt-get install -y --no-install-recommends build-essential libpq-dev postgresql-client nodejs nano && \
rm -rf /var/lib/apt/lists/* && \
npm install --global yarn
WORKDIR /dwt-sample
COPY Gemfile /dwt-sample/Gemfile
COPY Gemfile.lock /dwt-sample/Gemfile.lock
RUN bundle install
COPY . /dwt-sample

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

RUN gem install bundler

EXPOSE 3000

# Start the main process.
# CMD ["rails", "server", "-b", "0.0.0.0"]
ENV RAILS_ENV ${RAILS_ENV}
ENV BUNDLE_PATH=/bundle \
    BUNDLE_BIN=/bundle/bin \
    GEM_HOME=/bundle
ENV PATH="${BUNDLE_BIN}:${PATH}"
