from django.urls import path

from . import views

app_name = "nature"
urlpatterns = [
    path('', views.index, name='index'),
    path('game', views.game, name='game'),
    path('analytics', views.analytics, name='analytics')
]