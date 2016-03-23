from __future__ import unicode_literals

from django.db import models
from users.models import UserAccount

class Status(models.Model):
    status = models.CharField(max_length=280)
    created = models.DateTimeField(auto_now_add=True, null=True)
    owner = models.ForeignKey(UserAccount, related_name='statuses')

    class Meta:
        ordering = ('created',)
