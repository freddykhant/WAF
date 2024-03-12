from django.shortcuts import render, get_object_or_404
from .models import Post
from django.http import HttpResponse

def index(request):
    postsQuerySet = Post.objects.all()
    return render(request, 'index.html', {'posts': postsQuerySet})

def post_detail(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    return render(request, 'details.html', {'post': post})

def error_400(request, exception):
    return HttpResponse('Bad Request (400)', status=400)

def error_403(request, exception):
    return HttpResponse('Forbidden (403)', status=403)

def error_404(request, exception):
    return HttpResponse('Page Not Found (404)', status=404)

def error_500(request):
    return HttpResponse('Internal Server Error (500)', status=500)