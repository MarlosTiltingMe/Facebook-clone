from rest_framework import serializers
from feed.models import Status
from users.models import UserAccount
from django.contrib.auth import get_user_model

class UserSerializer(serializers.ModelSerializer):
    statuses = serializers.PrimaryKeyRelatedField(many=True,
                                                queryset=Status.objects.all(),
                                                required=False)
    favorited = serializers.PrimaryKeyRelatedField(many=True,
                                                queryset=Status.objects.all(),
                                                required=False)
    class Meta:
        model = UserAccount
        fields = ('__all__')
