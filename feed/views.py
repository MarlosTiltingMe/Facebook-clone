from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import generics
from rest_framework import permissions
from permissions import IsOwnerOrReadOnly
from models import Status
from serializers import StatusSerializer


class StatusViewSet(viewsets.ModelViewSet):
    queryset = Status.objects.all().order_by('-created')
    serializer_class = StatusSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'statuses': reverse('status-list', request=request, format=format)
    })
