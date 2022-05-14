FROM php:8.1-apache

RUN apt-get update && apt-get install -y \
      libicu-dev \
      libpq-dev \
      libmcrypt-dev \
      mariadb-client \
      git \
      zip \
      unzip \
    && rm -r /var/lib/apt/lists/* \
    && pecl install xdebug \
    && docker-php-ext-install \
      intl \
      pcntl \
      opcache \
    && docker-php-ext-enable xdebug

#install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer

#set our application folder as an environment variable
ENV APP_HOME /var/www/html

#change uid and gid of apache to docker user uid/gid
RUN usermod -u 1000 www-data && groupmod -g 1000 www-data

#change the web_root to cakephp /var/www/html/webroot folder
RUN sed -i -e "s/html/html\/webroot/g" /etc/apache2/sites-enabled/000-default.conf

# enable apache module rewrite
RUN a2enmod rewrite
