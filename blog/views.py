from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Blog
from .serializers import BlogSerializer


class BlogList(APIView):

    def get(self, request):
        blogs = Blog.objects.all()
        serializer = BlogSerializer(blogs, many=True)
        return Response(serializer.data)
