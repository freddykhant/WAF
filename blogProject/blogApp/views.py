from django.shortcuts import render, get_object_or_404
from .models import Post

def index(request):
    postsQuerySet = Post.objects.all()
    return render(request, 'index.html', {'posts': postsQuerySet})

def post_detail(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    return render(request, 'details.html', {'post': post})