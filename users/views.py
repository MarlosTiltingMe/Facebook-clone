import json
from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework import viewsets, generics, views, status
from rest_framework.response import Response
from users.serializers import UserSerializer
from users.models import UserAccount
from django.contrib.auth import authenticate, login, logout


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = UserAccount.objects.all()
    serializer_class = UserSerializer
