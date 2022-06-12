from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import EmployeeSerializer, FeedbackCycleSerializer, CompanySerializer
from .models import FeedBackCycle, Company
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework import viewsets


class FeedbackCycleViewSet(viewsets.ModelViewSet):
    queryset = FeedBackCycle.objects.all()
    serializer_class = FeedbackCycleSerializer


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer