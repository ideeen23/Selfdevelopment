from rest_framework import generics
from .serializers import TagSerializer
from django.http import JsonResponse
from .models import Tag


class TagList(generics.ListAPIView):
    
    queryset = Tag.objects.order_by('created_at').reverse().all()[:20]
    serializer_class = TagSerializer