from __future__ import unicode_literals
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.dispatch import receiver
from django.db.models.signals import post_save
from rest_framework.authtoken.models import Token
from animu import settings
from django.db import models
from django.contrib.auth import get_user_model

class UserAccountManager(BaseUserManager):
	def create_user(self, email, username, password):
		if not email:
			raise ValueError('Users must have a valid email address.')
		if not username:
			raise ValueError('Users must have a valid username')

		user = self.model(
			email=self.normalize_email(email), username=username
		)

		user.set_password(password)
		user.save()
		return user

	def create_superuser(self, email, username, password):
		user = self.create_user(email, username, password)

		user.is_admin = True
		user.save()

		return user

class UserAccount(AbstractBaseUser):
	#Basic
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=16, unique=True, blank=False)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    is_admin = models.BooleanField(default=False)
    favorited = models.ManyToManyField('feed.Status', related_name='favorites')
    prof_picture = models.CharField(max_length=1024, default='http://menlohacks.com/img/default-avatar.png')

	#GunZ Servers Start Here
    fgunz = models.CharField(max_length=24, default='None')
    darkgunz = models.CharField(max_length=24, default='None')
    drgunz = models.CharField(max_length=24, default='None')
    egunz = models.CharField(max_length=24, default='None')
    hggunz = models.CharField(max_length=24, default='None')
    sgunz = models.CharField(max_length=24, default='None')
    phgunz = models.CharField(max_length=24, default='None')
    rival = models.CharField(max_length=24, default='None')
    reloaded = models.CharField(max_length=24, default='None')
    agunz = models.CharField(max_length=24, default='None')

	#Social/Broadcasting
    skype = models.CharField(max_length=24, default='None')
    twitter = models.CharField(max_length=24, default='None')
    twitch = models.CharField(max_length=24, default='None')
    youtube = models.CharField(max_length=24, default='None')

	#zz stuff
    objects = UserAccountManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = UserAccountManager()
    def get_date(self):
	    return self.created_at
    def get_count(self):
	    return self.count
    def __str__(self):
	    return self.username
    def get_image(self):
	    return self.avatar
    def get_desc(self):
	    return self.description
    def get_full_name(self):
	    return self.full_name
    def get_short_name(self):
	    print('a')
    @property
    def is_superuser(self):
	    return self.is_admin
    @property
    def is_staff(self):
	    return self.is_admin
    def has_perms(self, obj=None):
	    return self.is_admin
    def has_perm(self, obj=None):
		return self.is_admin
    def has_module_perms(self, app_label):
	    return self.is_admin

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
