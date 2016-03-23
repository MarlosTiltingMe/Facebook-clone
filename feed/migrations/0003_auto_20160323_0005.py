# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-03-23 00:05
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('feed', '0002_auto_20160322_0342'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='status',
            name='favorited',
        ),
        migrations.AddField(
            model_name='status',
            name='favorited',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
    ]