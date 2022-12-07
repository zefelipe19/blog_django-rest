from django.urls import path
from . import views


urlpatterns = [
    path('api/', views.BlogList.as_view(), name='index')
]
