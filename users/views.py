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

class UserViewSet(viewsets.ModelViewSet):
    queryset = UserAccount.objects.all()
    serializer_class = UserSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            UserAccount.objects.create_user(**serializer.validated_data)

            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)

        return Response({
            'status': 'Bad request',
            'message': 'Account could not be created'
        }, status=status.HTTP_400_BAD_REQUEST)

class LoginView(views.APIView):
    def post(self, request, format=None):
        data = request.data

        username = data.get('username', None)
        password = data.get('password', None)

        account = authenticate(username=username, password=password)
        if account is not None:
            login(request, account)

            serialized = UserSerializer(account)

            return Response(serialized.data)
        else:
            return Response({
                'status': 'Unathorized',
                'message': 'Lazy error message.'
            }, status=status.HTTP_401_UNAUTHORIZED)
