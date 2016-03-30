from rest_framework import serializers
from feed.models import Status
from users.models import UserAccount

class StatusSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    

    class Meta:
        model = Status
        fields = ('id', 'status', 'created', 'owner', 'favorites')
