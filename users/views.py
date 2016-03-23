import json
from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework import viewsets, generics, views, status
from rest_framework.response import Response
from users.serializers import UserSerializer
from users.models import UserAccount
from django.contrib.auth import authenticate, login, logout


class CurUser(viewsets.ModelViewSet):
    queryset = UserAccount.objects.all()
    model = UserAccount
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

    def list(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = UserAccount.objects.all()
    serializer_class = UserSerializer
