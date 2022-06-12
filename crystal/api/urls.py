from django.urls import path, include
from .views import FeedbackCycleViewSet, CompanyViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'feedbackcycle', FeedbackCycleViewSet, basename="feedbackcycle")
router.register(r'company', CompanyViewSet, basename="company")


urlpatterns = [
    path('', include(router.urls)),
]



