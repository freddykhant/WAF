from django.db import models
from django.contrib.auth.models import User
import datetime

# Create your models here.
class Post(models.Model):

    title = models.CharField(max_length=255)
    description = models.TextField()
    publication_date = models.DateTimeField(auto_now_add=True)
    tag = models.CharField(max_length=50)
    slug = models.SlugField(max_length=255, unique=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_posts')

    def is_pre_covid(self):
        # Defining the cutoff date for pre-COVID-19
        covid_start_date = datetime.date(2020, 3, 10)
        return self.publication_date.date() <= covid_start_date

    def __str__(self):
        return self.title

