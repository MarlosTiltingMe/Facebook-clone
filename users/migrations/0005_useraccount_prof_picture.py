# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-03-23 00:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20160323_0024'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='prof_picture',
            field=models.CharField(default='http://menlohacks.com/img/default-avatar.png', max_length=1024),
        ),
    ]