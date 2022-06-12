from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('create-feedback-cycle', index),
    path('create-company', index)
]