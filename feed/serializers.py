from rest_framework import serializers
from feed.models import Status
from users.models import UserAccount

class StatusSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    favorited = serializers.PrimaryKeyRelatedField(many=True,
                                                queryset=UserAccount.objects.filter())
    class Meta:
        model = Status
        fields = ('id', 'status', 'favorites', 'created', 'owner', 'favorited')
