from rest_framework import serializers
from feed.models import Status
from users.models import UserAccount
from django.contrib.auth import get_user_model

class UserSerializer(serializers.ModelSerializer):
    statuses = serializers.PrimaryKeyRelatedField(many=True,
                                                queryset=Status.objects.all())

    class Meta:
        model = UserAccount
        fields = ('id', 'username', 'prof_picture', 'statuses', 'favorited')
