from django.conf.urls import url, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.urlpatterns import format_suffix_patterns
from users.views import UserViewSet
from django.contrib import admin
from animu.views import IndexView
from feed.views import StatusViewSet, api_root
from users.views import UserViewSet, CurUser, LoginView
from rest_framework import renderers

status_list = StatusViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

status_detail = StatusViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

user_list = UserViewSet.as_view({
    'get': 'list'
})

user_detail = UserViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update'
})

cur_user = CurUser.as_view({
    'get': 'retrieve'
})


urlpatterns = format_suffix_patterns([
    url(r'^api/$', api_root),
    url(r'^api/current/$', cur_user, name='current_user'),
    url(r'^api/statuses/$', status_list, name='status-list'),
    url(r'^api/statuses/(?P<pk>[0-9]+)/$', status_detail, name='status-detail'),
    url(r'^api/users/$', user_list, name='user-list'),
    url(r'^api/users/(?P<pk>[0-9]+)/$', user_detail, name='user-detail'),
    url(r'^api-auth/', include('rest_framework.urls',
                                  namespace='rest_framework')),
    url(r'^api/auth/login/$', LoginView.as_view(), name='login'),
    url(r'^.*$', IndexView.as_view(), name='index'),
])
